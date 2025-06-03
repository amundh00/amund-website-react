import React, { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';
import '../styles/products.css';

function Products() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Function to import all images from products folder
    const importImages = () => {
      const lowQualityModules = require.context(
        '../../public/assets/images/products/lowQuality', 
        false, 
        /\.(png|jpe?g|webp)$/i
      );
      
      const imageList = lowQualityModules.keys().map((item, index) => {
        const filename = item.replace('./', '');
        return {
          src: `/assets/images/products/lowQuality/${filename}`,
          highQualitySrc: `/assets/images/products/highQuality/${filename}`,
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
            <img src={image.src} alt={image.name} loading="lazy" />
            <div className="product-overlay">
              <span>{image.name}</span>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="loading">
          <p>Loading products...</p>
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

export default Products;