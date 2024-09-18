// Importamos el componente ImageCard para usarlo en la galería
import { ImageCard } from './ImageCard.js'

// Función para crear la galería con las imágenes
export const Gallery = (images) => {
  // Creamos un contenedor "fragment" para evitar múltiples reflow al DOM
  const fragment = document.createDocumentFragment()

  // Recorremos cada imagen obtenida y creamos una tarjeta de imagen
  images.forEach((image) => {
    // Para cada imagen se llama al componente ImageCard y se añade al fragment
    fragment.appendChild(ImageCard(image))
  })

  // Devolvemos el fragmento completo con todas las imágenes
  return fragment
}
