// import ArtworkService from '../services/ArtworkService';

// export const ArtworkHandler = {
//   async getAllArtworks() {
//     let allArtworks = await ArtworkService.getAllArtworks();
//     return allArtworks;
//   },

//   async getArtwork(id) {
//     let artwork = await ArtworkService.getArtwork(id);
//     return artwork;
//   },


  
//   async submitArtwork(newArtwork) {
//     return ArtworkService.submitArtwork(newArtwork).then((response) => {
//       // Manejar la respuesta de forma específica al componente
//       if (response.status === 201) {
//         console.log(response.data);
//       } else {
//         // Error al crear la obra
//         // Mostrar mensaje de error al usuario
//         throw new Error('Error al enviar la obra');
//       }
//     });
//   },

//   async searchArtworks(searchTerm) {
//     let allArtworks = await ArtworkService.getAllArtworks();

//     let filteredArtworks = allArtworks.filter(artwork =>
//       artwork.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return filteredArtworks;
//   },

//   // Funcion de filtrado
//   async getFilteredArtworks(artworkCategory) {
//     let allArtworks = await ArtworkService.getArtworks();

//     // Aplicar filtros si se proporcionan
//     if (artworkCategory) {
//       allArtworks = allArtworks.filter(artwork => artwork.artworkCategory === artworkCategory);
//     }

//     return allArtworks;
//   },

// }

// export default ArtworkHandler;