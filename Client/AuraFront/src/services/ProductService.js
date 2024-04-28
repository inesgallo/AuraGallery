// import axios, { all } from "axios";
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5001',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const ProductService = {
    async getProducts() {
        try {
         
            let response = await apiClient.get("/product/get_product");
            let allProducts = response.data;
            console.log(allProducts)
            console.log('Hola soy el get')
            return allProducts; 
        } catch (error) {
            console.error("Error al obtener las obras:", error);

        }
    },
    async getProductById(id) {
        try {
            let response = await apiClient.get(`/product/get_product_by_id/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error al obtener la obra por ID:", error);
            throw error;
        }
    },
    async submitProduct(newProduct){
        try {
            return await apiClient.post("/product/post_product", newProduct);
        } catch (error) {
            console.error("Error al enviar la obra:", error);
        }
    
    },
    async deleteProduct(id){
        try {
            return await apiClient.delete("/product/" + id);
        } catch (error) {
            console.error("Error al eliminar la obra:", error);
        }
    },
    async updateProduct(id, updatedProduct) {
        try {
            return await apiClient.patch("/products/" + id, updatedProduct);
        } catch (error) {
            console.error("Error al actualizar la obra:", error);
        }
    }
}

export default ProductService;