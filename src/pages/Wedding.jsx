import React, { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';
import '../styles/wedding.css';

function Weddings() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Function to import all images from bryllup folder
    const importImages = () => {
      const lowQualityModules = require.context(
        '../../public/assets/images/bryllup/lowQuality', 
        false, 
        /\.(png|jpe?g|webp)$/i
      );
      
      const imageList = lowQualityModules.keys().map((item, index) => {
        const filename = item.replace('./', '');
        return {
          src: `/assets/images/bryllup/lowQuality/${filename}`,
          highQualitySrc: `/assets/images/bryllup/highQuality/${filename}`,
          name: filename.replace(/\.(png|jpe?g|webp)$/i, ''),
          id: index
        };
      });
      
      setImages(imageList);
    };

    importImages();
  }, []);

  const openLightbox = (image) => {
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
            <img src={image.src} alt={image.name} loading="lazy" />
            <div className="wedding-overlay">
              <span>{image.name}</span>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="loading">
          <p>Loading wedding photos...</p>
        </div>
      )}

      <Lightbox
        selectedImage={selectedImage}
        images={images}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </main>
  );
}

export default Weddings;