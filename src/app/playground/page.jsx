'use client'

import React, { useState, useRef, useEffect } from 'react';
import { FaHeading, FaRegKeyboard, FaRegCheckSquare, FaRegWindowMaximize, FaImage, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import ImageUpload from './ImageUpload';

function InteractiveWhiteboard() {
  const [formElements, setFormElements] = useState([]);
  const [editingElementId, setEditingElementId] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const addElement = (type) => {
    const newElement = { id: Date.now(), type, value: '' };
    setFormElements([...formElements, newElement]);
  };

  const deleteElement = (id) => {
    setFormElements(formElements.filter(element => element.id !== id));
  };

  const startEditing = (id, value) => {
    setEditingElementId(id);
    setEditingValue(value);
  };

  const saveEditing = (id) => {
    const updatedElements = formElements.map(element => {
      if (element.id === id) {
        return { ...element, value: editingValue };
      }
      return element;
    });
    setFormElements(updatedElements);
    setEditingElementId(null);
    setEditingValue('');
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'YOUR_CLOUDINARY_UPLOAD_PRESET');

    try {
      const response = await axios.post(process.env.CLOUDINARY_URL, formData);
      const newElement = { id: Date.now(), type: 'image', value: response.data.secure_url };
      setFormElements([...formElements, newElement]);
    } catch (error) {
      console.error("Erreur lors de l'upload de l'image:", error);
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-4">
      {/* Toolbox pour ajouter des éléments */}
      <div className="flex text-2xl space-x-4 mb-4">
      <button 
  className="transform transition-transform duration-300 hover:scale-110" 
  onClick={() => addElement('imageUpload')} 
  title="Ajouter une image"
>
  <FaImage />
</button>

        <button 
          className="transform transition-transform duration-300 hover:scale-110" 
          onClick={() => addElement('title')} 
          title='Ajouter un titre'
        >
          <FaHeading />
        </button>
        <button 
          className="transform transition-transform duration-300 hover:scale-110" 
          onClick={() => addElement('input')} 
          title="Ajouter un champ de saisie"
        >
          <FaRegKeyboard />
        </button>
        <button 
          className="transform transition-transform duration-300 hover:scale-110" 
          onClick={() => addElement('checkbox')} 
          title="Ajouter une case à cocher"
        >
          <FaRegCheckSquare />
        </button>
        <button 
          className="transform transition-transform duration-300 hover:scale-110" 
          onClick={() => addElement('banner')} 
          title="Ajouter une bannière"
        >
          <FaRegWindowMaximize />
        </button>
      </div>
      

      {/* Tableau blanc */}
      <div className="flex flex-col items-center w-full space-y-4">
        {formElements.map(element => {
          switch (element.type) {
            case 'title':
              return (
                <div key={element.id} className="flex flex-col items-center mt-8">
                  {editingElementId === element.id ? (
                    <>
                      <input value={editingValue} onChange={(e) => setEditingValue(e.target.value)} />
                      <button onClick={() => saveEditing(element.id)}>Save</button>
                    </>
                  ) : (
                    <h1 onClick={() => startEditing(element.id, element.value || 'Titre')}>
                      {element.value || 'Titre'}
                    </h1>
                  )}
                  <div className="relative group">
                    <button 
                      className="focus:outline-none" 
                      onClick={() => deleteElement(element.id)}
                      title="Remove"
                    >
                      <FaTrash size={20} />
                    </button>
                    <div className="absolute left-0 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Remove
                    </div>
                  </div>
                </div>
              );
            case 'input':
              return (
                <div key={element.id} className="flex flex-col items-center">
                  <input placeholder="Champ de saisie" />
                  <div className="relative group">
                    <button 
                      className="focus:outline-none" 
                      onClick={() => deleteElement(element.id)}
                      title="Remove"
                    >
                      <FaTrash size={20} />
                    </button>
                    <div className="absolute left-0 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Remove
                    </div>
                  </div>
                </div>
              );
            case 'checkbox':
              return (
                <div key={element.id} className="flex flex-col items-center">
                  <input type="checkbox"/>
                  <input type="text" placeholder="Texte ici" className="border rounded p-1" />
                  <div className="relative group">
                    <button 
                      className="focus:outline-none" 
                      onClick={() => deleteElement(element.id)}
                      title="Remove"
                    >
                      <FaTrash size={20} />
                    </button>
                    <div className="absolute left-0 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Remove
                    </div>
                  </div>
                </div>
              );
            case 'banner':
              return (
                <div key={element.id} className="flex flex-col items-center" style={{ backgroundColor: 'lightgray', padding: '10px' }}>
                  Bannière
                  <div className="relative group">
                    <button 
                      className="focus:outline-none" 
                      onClick={() => deleteElement(element.id)}
                      title="Remove"
                    >
                      <FaTrash size={20} />
                    </button>
                    <div className="absolute left-0 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Remove
                    </div>
                  </div>
                </div>
              );
            case 'imageUpload':
              return (
                <div key={element.id} className="flex flex-col items-center mt-8">
                  <ImageUpload onUpload={handleImageUpload} />
                  <div className="relative group">
                    <button 
                      className="focus:outline-none" 
                      onClick={() => deleteElement(element.id)}
                      title="Remove"
                    >
                      <FaTrash size={20} />
                    </button>
                    <div className="absolute left-0 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Remove
                    </div>
                  </div>
                </div>
              );
              default:
                return null;
            }
          })}
        </div>
      </div>
    );
  }
  
  export default InteractiveWhiteboard;
 
  
  
  
  
  
