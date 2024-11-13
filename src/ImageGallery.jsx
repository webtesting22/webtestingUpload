// src/ImageGallery.jsx
import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {

    const importedImages = import.meta.glob('./avoProduct/*.{png,jpg,jpeg,svg}');
    const imagePromises = Object.keys(importedImages).map(async (path) => {
      const module = await importedImages[path]();
      return module.default; 
    });

    
    Promise.all(imagePromises).then((resolvedImages) => setImages(resolvedImages));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index}`}
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            margin: '10px',
            transition: 'transform 0.5s ease',
          }}
          className="rotating-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
