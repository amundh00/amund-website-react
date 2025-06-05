import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const LOCAL_STORAGE_KEY = "cachedImages";
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export async function fetchImagesByCategory(category) {
  console.log(`Fetching images for category: ${category}`);
  
  try {
    const categoryRef = ref(storage, category);
    const result = await listAll(categoryRef);
    
    console.log(`Found ${result.items.length} images in ${category}`);
    
    // Get all images in the main folder (not in thumbnail subfolder)
    const mainImages = result.items.filter(item => 
      !item.fullPath.includes('/thumbnail/')
    );
    
    console.log(`Found ${mainImages.length} main images`);
    
    const imagePromises = mainImages.map(async (imageRef, index) => {
      const fullUrl = await getDownloadURL(imageRef);
      
      // Generate thumbnail filename by adding _900x900 before the extension
      const fileName = imageRef.name;
      const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
      const extension = fileName.substring(fileName.lastIndexOf('.'));
      const thumbnailFileName = `${nameWithoutExt}_900x900${extension}`;
      
      let thumbnailUrl = fullUrl; // Default to full image
      
      try {
        // Try to get the thumbnail from the thumbnail subfolder
        const thumbnailRef = ref(storage, `${category}/thumbnail/${thumbnailFileName}`);
        thumbnailUrl = await getDownloadURL(thumbnailRef);
        console.log(`✅ Found thumbnail for ${fileName}: ${thumbnailFileName}`);
      } catch (thumbError) {
        console.log(`⚠️ No thumbnail found for ${fileName} (looking for ${thumbnailFileName}), using full image`);
      }
      
      return {
        id: `${category}-${index}`,
        name: fileName,
        fullUrl: fullUrl,      // High quality for lightbox
        thumbnailUrl: thumbnailUrl, // 900x900 thumbnail for gallery
        category: category
      };
    });
    
    const images = await Promise.all(imagePromises);
    console.log(`Processed ${images.length} images for ${category}`);
    
    // Cache the results
    const cached = getCachedImages() || {};
    cached[category] = images;
    cached.timestamp = Date.now();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cached));
    
    return images;
  } catch (error) {
    console.error(`Error fetching images for ${category}:`, error);
    return [];
  }
}

export function getCachedImages() {
  const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!cached) return null;
  
  const data = JSON.parse(cached);
  const now = Date.now();
  
  if (now - data.timestamp > CACHE_DURATION) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    return null;
  }
  
  return data;
}