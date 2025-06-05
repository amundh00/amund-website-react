import React, { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';
import '../styles/wedding.css';
import { fetchImagesByCategory, getCachedImages } from '../api/fetchImages';

function Weddings() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      console.log('Loading wedding images from Firebase...');
      
      // Check cache first
      const cached = getCachedImages();
      if (cached && cached.weddings && cached.weddings.length > 0) {
        console.log('Using cached wedding images:', cached.weddings);
        setImages(cached.weddings);
        setLoading(false);
        return;
      }
      
      // Fetch fresh images from Firebase Storage using 'weddings' folder
      try {
        const weddingImages = await fetchImagesByCategory('weddings');
        console.log('Fetched wedding images:', weddingImages);
        
        // Log each image to see if thumbnails are being used
        weddingImages.forEach((img, index) => {
          console.log(`Wedding ${index + 1}:`, {
            name: img.name,
            fullUrl: img.fullUrl,
            thumbnailUrl: img.thumbnailUrl,
            usingThumbnail: img.fullUrl !== img.thumbnailUrl
          });
        });
        
        setImages(weddingImages);
      } catch (error) {
        console.error('Error loading wedding images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const openLightbox = (image) => {
    console.log('Opening lightbox with:', {
      thumbnail: image.thumbnailUrl,
      fullImage: image.fullUrl
    });
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  if (loading) {
    return (
      <main className="weddings-main">
        <div className="weddings-header">
          <h1>Wedding Photography</h1>
          <p>Capturing love stories and unforgettable moments on your special day</p>
        </div>
        <div className="loading">
          <p>Loading wedding photos...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="weddings-main">
      <div className="weddings-header">
        <h1>Wedding Photography</h1>
        <p>Capturing love stories and unforgettable moments on your special day</p>
      </div>

      <div className="weddings-gallery">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="wedding-item"
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.thumbnailUrl} 
              alt={image.name} 
              loading="lazy"
              onLoad={() => console.log(`Loaded wedding thumbnail: ${image.name}`)}
              onError={() => console.log(`Failed to load wedding thumbnail: ${image.name}`)}
            />
            <div className="wedding-overlay">
              <span>{image.name.replace(/\.[^/.]+$/, "")}</span>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && !loading && (
        <div className="loading">
          <p>No wedding photos found. Upload some images to the 'weddings' folder in Firebase Storage.</p>
        </div>
      )}

      <Lightbox
        selectedImage={selectedImage ? {
          ...selectedImage,
          highQualitySrc: selectedImage.fullUrl
        } : null}
        images={images.map(img => ({
          ...img,
          highQualitySrc: img.fullUrl
        }))}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </main>
  );
}

export default Weddings;