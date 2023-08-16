// ImageUpload.jsx

import React, { useRef } from 'react';
import { FaImage } from 'react-icons/fa';
import axios from 'axios';

function ImageUpload({ onUpload }) {
  const fileInputRef = useRef(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'CLOUDINARY_URL'); // Remplacez par votre propre preset

    try {
      const response = await axios.post(process.env.CLOUDINARY_URL, formData);
      onUpload(response.data.secure_url);
    } catch (error) {
      console.error("Erreur lors de l'upload de l'image:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
    <div 
      className="bg-black w-16 h-16 rounded-full flex items-center justify-center cursor-pointer mb-2"
      onClick={() => fileInputRef.current.click()}
    >
      <FaImage size={24} color="white" />
    </div>
    <input 
      ref={fileInputRef} 
      type="file" 
      accept="image/*" 
      style={{ display: 'none' }} 
      onChange={handleImageUpload} 
    />
  </div>
  
  );
}

export default ImageUpload;
