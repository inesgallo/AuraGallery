import React, { useState, useEffect } from 'react';
import './artistForm.css'


const ArtistForm = () => {

  const [artworkName, setArtworkName] = useState('');
  const [artworkType, setArtworkType] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState({
    category1: false,
    category2: false,
    category3: false,
    category4: false,
    category5: false,
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    switch (type) {
      case 'checkbox':
        setCategories({ ...categories, [name]: checked });
        break;
      default:
        switch (name) {
          case 'artworkName':
            setArtworkName(value);
            break;
          case 'artworkType':
            setArtworkType(value);
            break;
          case 'price':
            setPrice(value);
            break;
          case 'description':
            setDescription(value);
            break;
          default:
            break;
        }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
    console.log({ artworkName, artworkType, price, description, images, categories });
  };

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };


  return (

    <form onSubmit={handleSubmit}>
      <label>
        Artwork Name:
        <input type="text" name="artworkName" value={artworkName} onChange={handleChange} />
      </label>
      <label>
        Artwork Type:
        <input type="text" name="artworkType" value={artworkType} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={price} onChange={handleChange} />
      </label>
      <label>
        Description of the Artwork:
        <textarea name="description" value={description} onChange={handleChange} />
      </label>
      <fieldset>
        <legend>Categories:</legend>
        <label>
          <input type="checkbox" name="category1" checked={categories.category1} onChange={handleChange} />
          Category 1
        </label>
        <label>
          <input type="checkbox" name="category2" checked={categories.category2} onChange={handleChange} />
          Category 2
        </label>
        <label>
          <input type="checkbox" name="category3" checked={categories.category3} onChange={handleChange} />
          Category 3
        </label>
        <label>
          <input type="checkbox" name="category4" checked={categories.category4} onChange={handleChange} />
          Category 4
        </label>
        <label>
          <input type="checkbox" name="category5" checked={categories.category5} onChange={handleChange} />
          Category 5
        </label>
      </fieldset>
      <label>
        Upload Images:
        <input type="file" multiple onChange={handleImages} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ArtistForm
