import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const ArtworkService = {
    async getArtworks() {
        try {
            let response = await apiClient.get("/artworks");
            let allArtworks = response.data;
            return allArtworks;
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    },
    async getArtwork(id) {
        try {
            let response = await apiClient.get("/artworks/" + id);
            let artwork = response.data;
            return artwork;
        } catch (error) {
            console.error("Error al obtener la obra:", error);
        }
    },
    async submitArtwork(newArtwork){
        try {
            return await apiClient.post("/artworks", newArtwork);
        } catch (error) {
            console.error("Error al enviar la obra:", error);
        }
    
    },
    async deleteArtwork(id){
        try {
            return await apiClient.delete("/artwork/" + id);
        } catch (error) {
            console.error("Error al eliminar la obra:", error);
        }
    },
    async updateArtwork(id, updatedArtwork){
        try {
            return await apiClient.patch("/artworks/" + id, updatedArtwork);
        } catch (error) {
            console.error("Error al actualizar la obra:", error);
        }
    }
}

export default ArtworkService;