import React, { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';
import '../styles/products.css';
import { fetchImagesByCategory, getCachedImages } from '../api/fetchImages';

function Products() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      console.log('Loading products images from Firebase...');
      
      // Clear cache to force fresh fetch and see what's happening
      localStorage.removeItem('cachedImages');
      
      try {
        const productImages = await fetchImagesByCategory('others');
        console.log('Fetched product images:', productImages);
        
        // Log each image to see if thumbnails are being used
        productImages.forEach((img, index) => {
          console.log(`Image ${index + 1}:`, {
            name: img.name,
            fullUrl: img.fullUrl,
            thumbnailUrl: img.thumbnailUrl,
            usingThumbnail: img.fullUrl !== img.thumbnailUrl
          });
        });
        
        setImages(productImages);
      } catch (error) {
        console.error('Error loading products images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const openLightbox = (image) => {
    console.log('Opening lightbox with:', {
      thumbnail: image.thumbnailUrl,
      fullImage: image.fullUrl,
      willUseInLightbox: image.fullUrl // This becomes highQualitySrc
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
      <main className="products-main">
        <div className="products-header">
          <h1>Product Photography</h1>
          <p>Showcasing products with professional lighting and composition</p>
        </div>
        <div className="loading">
          <p>Loading Images...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="products-main">
      <div className="products-header">
        <h1>Product Photography</h1>
        <p>Showcasing products with professional lighting and composition</p>
      </div>

      <div className="products-gallery">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="product-item"
            onClick={() => openLightbox(image)}
          >
            {/* Add debugging info */}
            <img 
              src={image.thumbnailUrl} 
              alt={image.name} 
              loading="lazy"
              onLoad={() => console.log(`Loaded thumbnail: ${image.name}`)}
              onError={() => console.log(`Failed to load thumbnail: ${image.name}`)}
            />
            <div className="product-overlay">
              <span>{image.name.replace(/\.[^/.]+$/, "")}</span>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && !loading && (
        <div className="loading">
          <p>No products found. Upload some images to the 'others' folder in Firebase Storage.</p>
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

export default Products;