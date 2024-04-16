import axios from "axios"

const ProductService = {
    createProducts: function (formData) {
      const baseURL = "http://localhost:3000/products";
        axios.post(baseURL, formData)
          .then(response => {

            console.log('Respuesta de la API POST:', response.data);

          })
          .catch(error => {
            console.error('Error al enviar la solicitud:', error);
          });
      },          
    
      getProducts: async function (product) {
        
        const baseURL = "http://localhost:3000/products";
        const response = await axios.get(baseURL)
          .then(response => {
            console.log('Respuesta de la API GET:', response.data);
            return response.data
          })
          .catch(error => {
            console.error('Error al enviar la solicitud:', error);
          }); 
        return response;
      },

      deleteProduct: async function (product) {
        const productId= product.id;
        const baseURL = `http://localhost:3000/products/${productId}`;
        await axios.delete(baseURL)
          .then(response => {
            console.log('Respuesta de la API DELETE:', response.data);
          })
          .catch(error => {
            console.error('Error al ELIMINAR la el producto:', error);
          }); 
      }
}
export default UserService;