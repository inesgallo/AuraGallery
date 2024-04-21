import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const ProductService = {
    async getProducts() {
        try {
            let response = await apiClient.get("/products");
            let allProducts = response.data;
            return allProducts;
        } catch (error) {
            console.error("Error al obtener las obras:", error);
        }
    },
    async getProduct(id) {
        try {
            let response = await apiClient.get("/products/" + id);
            let product = response.data;
            return product;
        } catch (error) {
            console.error("Error al obtener la obra:", error);
        }
    },
    async submitProduct(newProduct){
        try {
            return await apiClient.post("/products", newProduct);
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