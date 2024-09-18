import { Header } from './components/Header.js'
import { Gallery } from './components/Gallery.js'

// Añadir el Header al principio del body
document.body.prepend(Header())

// URL de la API de Unsplash para obtener imágenes (cambia la clave por la tuya)
const API_URL =
  'https://api.unsplash.com/search/photos?client_id=J89-V7DBHP5ouPccGkIGUpJGPVxMzR1myx-Rh9JPmpU'

// Obtener el contenedor de la galería
const galleryContainer = document.getElementById('gallery')
let currentPage = 1 // Página inicial
let loading = false // Controla si ya se están cargando más imágenes

// Función para obtener imágenes de la API
async function fetchImages(query = 'nature', page = 1, perPage = 50) {
  try {
    // Hacer la solicitud a la API
    const response = await fetch(
      `${API_URL}&query=${query}&per_page=${perPage}&page=${page}`
    )
    if (!response.ok) throw new Error('Error al obtener las imágenes')

    // Convertir la respuesta en formato JSON
    const data = await response.json()

    // Si no se encuentran resultados en la primera página
    if (data.results.length === 0 && page === 1) {
      if (query !== 'gatos') {
        // Si no encuentra resultados, muestra una alerta y busca "gatos"
        alert(
          `No se encontraron resultados para "${query}". Mostrando resultados para "gatos".`
        )
        fetchImages('gatos', 1, perPage) // Búsqueda de fallback con "gatos"
      } else {
        // Mensaje si tampoco encuentra resultados para "gatos"
        alert(
          'No se encontraron resultados para "gatos". Por favor, intenta con otra búsqueda.'
        )
      }
    } else {
      // Añadir los resultados a la galería
      galleryContainer.appendChild(Gallery(data.results))
    }
  } catch (error) {
    console.error('Error al obtener las imágenes:', error)
  }
}

// Cargar las primeras imágenes al abrir la página
fetchImages('nature', currentPage, 50)

// Lógica para hacer scroll infinito
window.addEventListener('scroll', () => {
  // Verifica si estamos cerca del final de la página y no estamos cargando más imágenes
  if (
    window.innerHeight + window.scrollY >= document.body.scrollHeight - 100 &&
    !loading
  ) {
    loading = true
    currentPage++ // Incrementar la página
    // Obtener más imágenes mientras se hace scroll
    fetchImages('nature', currentPage, 20).then(() => {
      loading = false // Permitir más cargas después
    })
  }
})

// Botones para buscar imágenes
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')

// Función para realizar búsquedas
function performSearch() {
  const query = searchInput.value.trim() // Obtener el valor del input
  if (query) {
    galleryContainer.innerHTML = '' // Limpiar la galería para la nueva búsqueda
    currentPage = 1 // Reiniciar la página
    fetchImages(query, currentPage, 50) // Buscar imágenes con el término ingresado
    searchInput.value = '' // Limpiar el input después de la búsqueda
  }
}

// Buscar imágenes al hacer clic en el botón de búsqueda
searchBtn.addEventListener('click', performSearch)

// Buscar imágenes al presionar "Enter" en el input
searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    performSearch()
  }
})

// Restablecer al estado inicial al hacer clic en el logo
const logo = document.querySelector('.logo img')

logo.addEventListener('click', () => {
  galleryContainer.innerHTML = '' // Limpiar la galería
  currentPage = 1 // Reiniciar la página
  fetchImages('nature', currentPage, 50) // Cargar las imágenes iniciales
})
