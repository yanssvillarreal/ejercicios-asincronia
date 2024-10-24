// Tareas:
// Tener el html enlazado y actualizado. ✅
// Referencias al DOM. ✅
// Hacer una petición a la API para obtener los personajes usando fetch ✅
// Llenar el select con los nombres de los personajes.✅
// Cambiar la imagen cada vez que se seleccione un personaje.✅

//Fetch me permite pedir datos a un servidor
const apiURL = 'https://thronesapi.com/api/v2/Characters'

// Referencias al DOM
const characterList = document.getElementById('character-list')
const characterImage = document.getElementById('character-image')

// Hacer una petición a la API para obtener los personajes usando fetch
function getCharacters() {
 fetch(apiURL)
  .then((response) => {
   if (!response.ok) {
    throw new Error('Error al obtener los datos de la API')
   }
   return response.json()
  })
  .then((characters) => {
   populateCharacterList(characters)
  })
  .catch((error) => {
   console.error('Error:', error)
  })
}

// Función para llenar el select con los nombres de los personajes
function populateCharacterList(characters) {
 characters.forEach((character) => {
  const option = document.createElement('option')
  option.value = character.imageUrl // Guardar la URL de la imagen como el valor del option
  option.textContent = character.fullName // El texto visible en el select será el nombre completo
  characterList.appendChild(option)
 })
}

// Evento que se activa cuando cambias la imagen del personaje seleccionado.
characterList.addEventListener('change', function () {
 const selectedImageUrl = this.value // El valor del option seleccionado es la URL de la imagen
 if (selectedImageUrl) {
  // Validar que no esté vacío
  characterImage.src = selectedImageUrl // Cambiamos el src de la imagen
 } else {
  characterImage.src = '' // Si no hay selección válida, limpiamos la imagen
 }
})

// Ejecutamos la función para cargar los personajes al inicio
getCharacters()
