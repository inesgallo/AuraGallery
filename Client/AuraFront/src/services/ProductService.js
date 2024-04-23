import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})
const apiClientDB = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const ProductServiceDB = {
    async getProducts() {
        try {
            let response = await apiClientDB.get("/products");
            let allProducts = response.data;
            console.log(allProducts)
            return allProducts;
        } catch (error) {
            console.error("Error al obtener las obras:", error);
        }
    },
}

export const ProductService = {
    async getProducts() {
        try {
            let response = await apiClient.get("/product/get_product");
            let allProducts = response.data;
            console.log(allProducts)
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