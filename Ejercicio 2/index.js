// Tareas
// Generar un número aleatorio entre 1 y 151). ✅
// Hacer una petición a la API usando ese número aleatorio para obtener los datos del Pokémon usando fetch. ✅
// Mostrar la imagen del Pokémon en la página. ✅

// Función para tener un número aleatorio entre 1 y 151
function getRandomPokemonId() {
 return Math.floor(Math.random() * 151) + 1
}

// Función para obtener los datos del Pokémon usando fetch
function getRandomPokemon() {
 const pokemonId = getRandomPokemonId() // Obtenemos un ID aleatorio
 const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}` // Construimos la URL

 fetch(apiURL)
  .then((response) => {
   if (!response.ok) {
    throw new Error('Error al obtener los datos de la API')
   }
   return response.json()
  })
  .then((data) => {
   displayPokemonImage(data) // Llamamos a la función para mostrar la imagen
  })
  .catch((error) => {
   console.error('Error:', error)
  })
}

// Función para mostrar la imagen del Pokémon
function displayPokemonImage(data) {
 const pokemonImage = document.getElementById('pokemon-image')
 // Obtenemos la URL de la imagen (en este caso la primera imagen de la lista)
 pokemonImage.src = data.sprites.front_default
}

// Ejecutamos la función para cargar un Pokémon aleatorio al iniciar
getRandomPokemon()
