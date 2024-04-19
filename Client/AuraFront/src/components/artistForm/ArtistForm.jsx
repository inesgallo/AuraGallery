import React, { useState } from 'react';
import { ArtworkHandler } from '../../handler/ArtworkHandler';
import './artistForm.css';

const ArtistForm = () => {
  const [id_user_artistFK, setId_user_artistFK] = useState('');
  const [title_product, setTitle_product] = useState('');
  const [category_product, setCategory_product] = useState('');
  const [price_product, setPrice_product] = useState('');
  const [description_product, setDescription_product] = useState('');
  const [categories, setCategories] = useState('');
  const [image_product, setImage_product] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setCategories(value);
  };

  const handleImages = (e) => {
    setImage_product([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id_user_artistFK', id_user_artistFK);
    formData.append('title_product', title_product);
    formData.append('category_product', category_product);
    formData.append('price_product', price_product);
    formData.append('description_product', description_product);
    formData.append('categories', categories);
    images.forEach((image_product) => {
      formData.append('image_product', image_product);
    });
    ArtworkHandler.submitArtwork(formData);
  };

  return (
    <form className='artistform' onSubmit={handleSubmit}>
      <section className='containerForm'>
      <h2 className='dates_products'>Datos nueva obra</h2>
      <label className='userLabel'>
        <input className='userInput' type="text" name="id_user_artistFK" onChange={(e) => setId_user_artistFK(e.target.value)} />
      </label>

      <div className='title_productGroup'>
        <label className='titleLabel'>
          nombre de la obra:
          <input className='titleInput' type="text" name="title_product" onChange={(e) => setTitle_product(e.target.value)} />
        </label>
      </div>

      <div className='productPriceGroup'>
        <div className='category_productGroup'>
          <label className='categoryLabel'>
            tipo de obra:
            <input className='categoryInput' type="text" name="category_product" onChange={(e) => setCategory_product(e.target.value)} />
          </label>
        </div>

        <div className='price_productGroup'>
          <label className='priceLabel'>
            precio:
            <input className='priceInput' type="number" name="price_product" onChange={(e) => setPrice_product(e.target.value)} />
          </label>
        </div>
      </div>

      <div className='description_productGroup'>
        <label className='descriptionLabel'>
          descripción de la obra:
          <textarea className='descriptionInput' name="description_product" onChange={(e) => setDescription_product(e.target.value)} />
        </label>
      </div>

      <div className='image_productGroup'>
        <label className='imageLabel'>
          subir imágenes:
          <input className='chooseFile' type="file" multiple onChange={handleImages} />
        </label>
      </div>


      <fieldset className='categoryFieldset'>
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

      <button type="submit" className='sendBotton'>enviar</button>
      </section>
    </form>
    
  );
}

export default ArtistForm;
