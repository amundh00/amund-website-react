import React, { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';
import '../styles/portraits.css';

function Portraits() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Function to import all images from Portraits folder
    const importImages = () => {
      const lowQualityModules = require.context(
        '../../public/assets/images/Portraits/lowQuality', 
        false, 
        /\.(png|jpe?g|webp)$/i
      );
      
      const imageList = lowQualityModules.keys().map((item, index) => {
        const filename = item.replace('./', '');
        return {
          src: `/assets/images/Portraits/lowQuality/${filename}`,
          highQualitySrc: `/assets/images/Portraits/highQuality/${filename}`,
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
            <img src={image.src} alt={image.name} loading="lazy" />
            <div className="portrait-overlay">
              <span>{image.name}</span>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="loading">
          <p>Loading portraits...</p>
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

export default Portraits;