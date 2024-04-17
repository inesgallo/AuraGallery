import React, { useState } from 'react';
import { ArtworkHandler } from '../../handler/ArtworkHandler'; // Cambia la importación


const ArtistForm = () => {
  const [artistName, setArtistName] = useState('');
  const [artworkName, setArtworkName] = useState('');
  const [artworkType, setArtworkType] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState('');
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setCategories(value);
  };

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('artistName', artistName);
    formData.append('artworkName', artworkName);
    formData.append('artworkType', artworkType);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', categories); // Agregamos la categoría seleccionada
    images.forEach((image) => {
      formData.append('images', image);
    });
    ArtworkHandler.submitArtwork(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        nombre del artista:
        <input type="text" name="artistName" onChange={(e) => setArtistName(e.target.value)} />
      </label>
      <label>
        nombre de la obra:
        <input type="text" name="artworkName" onChange={(e) => setArtworkName(e.target.value)} />
      </label>
      <label>
        tipo de obra:
        <input type="text" name="artworkType" onChange={(e) => setArtworkType(e.target.value)} />
      </label>
      <label>
        precio:
        <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        descripción de la obra:
        <textarea name="description" onChange={(e) => setDescription(e.target.value)} />
      </label>
      <fieldset>
        <legend>Categorías:</legend>
        <label>
          <input type="radio" name="category" value="arte abstracto" checked={categories === 'arte abstracto'} onChange={handleChange} />
          Arte abstracto
        </label>
        <label>
          <input type="radio" name="category" value="realismo contemporáneo" checked={categories === 'realismo contemporáneo'} onChange={handleChange} />
          Realismo contemporáneo
        </label>
        <label>
          <input type="radio" name="category" value="expresionismo" checked={categories === 'expresionismo'} onChange={handleChange} />
          Expresionismo
        </label>
        <label>
          <input type="radio" name="category" value="arte digital" checked={categories === 'arte digital'} onChange={handleChange} />
          Arte digital
        </label>
        <label>
          <input type="radio" name="category" value="neo-pop" checked={categories === 'neo-pop'} onChange={handleChange} />
          Neo-pop
        </label>
      </fieldset>
      <label>
        subir imágenes::
        <input type="file" multiple onChange={handleImages} />
      </label>
      <button type="submit">enviar</button>
    </form>
  );
}

export default ArtistForm;
