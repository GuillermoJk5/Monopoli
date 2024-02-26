"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiCaller_1 = require("./ApiCaller");
// URL de la API
const apiUrl = 'https://digi-api.com/api/v1/digimon?pageSize=10&xAntibody=false'; // URL de la API proporcionada
// Crear una instancia de ApiCaller
const apiCaller = new ApiCaller_1.ApiCaller(apiUrl);
// Llamar al método fetchData
apiCaller.fetchData()
    .then((data) => {
    const digimonarray = [];
    for (const item of data) {
        digimonarray.push(item);
    }
    digimonarray.forEach(digimon => {
        pintarlista(digimon);
    });
})
    .catch((error) => {
    // Manejar el error si la llamada falla
    console.error('Error occurred:', error);
});
function pintarlista(digimon) {
    const listado = $("#lista");
    let copia = $("#cartica").clone(true, true); // Clonar el div #cartica
    copia.removeAttr('id'); // Eliminar el atributo id de la copia
    copia.find('.card-title').text(digimon.name); // Cambiar el texto
    copia.find('.card-img-top').attr('src', digimon.imagen); // Cambiar la imagen
    copia.appendTo(listado).show(); // Agregar la copia al contenedor deseado y mostrarla
}
//# sourceMappingURL=ListadoController.js.map