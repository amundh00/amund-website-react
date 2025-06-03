import React from 'react';
import '../styles/lightbox.css';

function Lightbox({ selectedImage, images, onClose, onNext, onPrev }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  };

  React.useEffect(() => {
    if (!selectedImage) return;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  if (!selectedImage) return null;

  return (
    <div className="lightbox" onClick={handleBackgroundClick}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>×</button>
        <button className="lightbox-prev" onClick={onPrev}>‹</button>
        <img src={selectedImage.highQualitySrc} alt={selectedImage.name} />
        <button className="lightbox-next" onClick={onNext}>›</button>
        <div className="lightbox-info">
          <h3>{selectedImage.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;