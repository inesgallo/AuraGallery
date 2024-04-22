import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { ProductHandler } from '../../handler/ProductHandler';
import { Container } from 'reactstrap';
import Dropzone from 'react-dropzone';
import axios from "axios";
import Swal from 'sweetalert2';
import './artistForm.css';

const ArtistForm = () => {
  const { user } = useContext(UserContext);
  const [title_product, setTitle_product] = useState('');
  const [category_product, setCategory_product] = useState('');
  const [price_product, setPrice_product] = useState('');
  const [description_product, setDescription_product] = useState('');
  const [categories, setCategories] = useState('');
  const [image_product, setImage_product] = useState([]);
  const [imagePreviewArray, setImagePreviewArray] = useState([]);
  const [Loading, setLoading] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCategories(value);
  };


  const handleDrop = async (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "WorkArtist");
      formData.append("api_key", "753773386976734");
      formData.append("timestamp", (Date.now() / 1000) | 0);
      setLoading(true);
      return axios
        .post("https://api.cloudinary.com/v1_1/dl6ri9wnd/image/upload", formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        })
        .then((response) => {
          const data = response.data;
          const fileURL = data.secure_url;
          setImage_product([...image_product, fileURL]);
          setImagePreviewArray([...imagePreviewArray, URL.createObjectURL(file)]);
        })
        .catch((error) => {
          console.error('Error al subir la imagen:', error);
        });
    });
    try {
      await axios.all(uploaders);
      setLoading(false);
    } catch (error) {
      console.error('Error al subir imágenes:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Validar si todos los campos están rellenos
    if (
      id_user_artistFK &&
      title_product &&
      category_product &&
      price_product &&
      description_product &&
      categories &&
      image_product.length > 0
    ) {
      try {
        const formData = new FormData();
        formData.append('id_user_artistFK', id_user_artistFK);
        formData.append('title_product', title_product);
        formData.append('category_product', category_product);
        formData.append('price_product', price_product);
        formData.append('description_product', description_product);
        formData.append('categories', categories);
        image_product.forEach((image) => {
          formData.append('image_product', image);
        });
  
        await ProductHandler.submitProduct(formData);
        setLoading(false);
        // Limpiar los campos del formulario
        setId_user_artistFK('');
        setTitle_product('');
        setCategory_product('');
        setPrice_product('');
        setDescription_product('');
        setCategories('');
        setImage_product([]);
        setImagePreviewArray([]);
        // Mostrar SweetAlert de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'La obra ha sido enviada correctamente.',
        });
      } catch (error) {
        console.error('Error al enviar la obra:', error);
        setLoading(false);
        // Mostrar SweetAlert de error
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Ha ocurrido un error al enviar la obra.',
        });
      }
    } else {
      // Mostrar alerta de que todos los campos deben estar llenos
      Swal.fire({
        icon: 'warning',
        title: '¡Advertencia!',
        text: 'Por favor, rellena todos los campos del formulario.',
      });
      setLoading(false);
    }
  };
  
  return (
    <Container>
      <form className='artistform' onSubmit={handleSubmit}>
        <section className='containerForm'>
          <h2 className='dates_products'>Datos nueva obra</h2>
          <h3 className='name_Person'>{user && <p>{user.namePerson}!</p>}</h3>
          
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
              <Dropzone
                className="dropzone"
                onDrop={handleDrop}
                accept="image/*"
                multiple
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps({className: "dropzone"})}>
                      <input {...getInputProps()} />
                      <p>Coloca tus imágenes</p>
                    </div>
                  </section>
                )}
              </Dropzone>
              <div className="imagePreview">
                {imagePreviewArray.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    className="previewImage"
                  />
                ))}
              </div>
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
      {Loading && <p>Cargando...</p>}
    </Container>

  );
}

export default ArtistForm;

