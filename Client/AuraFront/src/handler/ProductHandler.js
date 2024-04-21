import ProductService from '../services/ProductService';

export const ProductHandler = {
  async getAllProducts() {
    let allProducts = await ProductService.getAllProducts();
    return allProducts;
  },

  async getProduct(id) {
    let product = await ProductService.getProduct(id);
    return product;
  },

  async submitProduct(newProduct) {
    return ProductService.submitProduct(newProduct).then((response) => {
      // Manejar la respuesta de forma específica al componente
      if (response.status === 201) {
        console.log(response.data);
      } else {
        // Error al crear la obra
        // Mostrar mensaje de error al usuario
        throw new Error('Error al enviar la obra');
      }
    });
  },

  async searchProducts(searchTerm) {
    let allProducts = await ProductService.getAllProducts();

    let filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredProducts;
  },

  // Funcion de filtrado
  async getFilteredProducts(category_product) {
    let allProducts = await ProductService.getProducts();

    // Aplicar filtros si se proporcionan
    if (category_product) {
      allProducts =  allProducts.filter(product => product.category_product === category_product);
    }

    return allProducts;
  },

}

export default ProductHandler;