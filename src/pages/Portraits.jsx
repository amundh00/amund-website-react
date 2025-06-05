import React, { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';
import '../styles/portraits.css';
import { fetchImagesByCategory, getCachedImages } from '../api/fetchImages';

function Portraits() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      console.log('Loading portraits images from Firebase...');
      
      // Check cache first
      const cached = getCachedImages();
      if (cached && cached.portraits && cached.portraits.length > 0) {
        console.log('Using cached portraits images:', cached.portraits);
        setImages(cached.portraits);
        setLoading(false);
        return;
      }
      
      // Fetch fresh images from Firebase Storage using 'portraits' folder
      try {
        const portraitImages = await fetchImagesByCategory('portraits');
        console.log('Fetched portrait images:', portraitImages);
        
        // Log each image to see if thumbnails are being used
        portraitImages.forEach((img, index) => {
          console.log(`Portrait ${index + 1}:`, {
            name: img.name,
            fullUrl: img.fullUrl,
            thumbnailUrl: img.thumbnailUrl,
            usingThumbnail: img.fullUrl !== img.thumbnailUrl
          });
        });
        
        setImages(portraitImages);
      } catch (error) {
        console.error('Error loading portraits images:', error);
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
      <main className="portraits-main">
        <div className="portraits-header">
          <h1>Portrait Photography</h1>
          <p>Capturing authentic moments and genuine emotions through portraiture</p>
        </div>
        <div className="loading">
          <p>Loading portraits...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="portraits-main">
      <div className="portraits-header">
        <h1>Portrait Photography</h1>
        <p>Capturing authentic moments and genuine emotions through portraiture</p>
      </div>

      <div className="portraits-gallery">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="portrait-item"
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.thumbnailUrl} 
              alt={image.name} 
              loading="lazy"
              onLoad={() => console.log(`Loaded portrait thumbnail: ${image.name}`)}
              onError={() => console.log(`Failed to load portrait thumbnail: ${image.name}`)}
            />
            <div className="portrait-overlay">
              <span>{image.name.replace(/\.[^/.]+$/, "")}</span>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && !loading && (
        <div className="loading">
          <p>No portraits found. Upload some images to the 'portraits' folder in Firebase Storage.</p>
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

export default Portraits;