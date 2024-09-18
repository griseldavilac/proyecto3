// Componente para crear una tarjeta de imagen
export const ImageCard = (imageData) => {
  // Creamos el div principal que contendrá la tarjeta
  const card = document.createElement('div')
  card.classList.add('card') // Le añadimos la clase 'card' para su estilo

  // Añadimos la imagen a la tarjeta
  const img = document.createElement('img')
  img.src = imageData.urls.regular // Establecemos la URL de la imagen en su tamaño regular
  img.alt = imageData.alt_description || 'Imagen de Unsplash' // Texto alternativo, si está disponible
  card.appendChild(img) // Agregamos la imagen al contenedor de la tarjeta

  // Creamos el contenedor para la información del usuario
  const userInfo = document.createElement('div')
  userInfo.classList.add('user-info') // Clase para darle estilo

  // Añadimos la imagen de perfil del usuario
  const userImg = document.createElement('img')
  userImg.src = imageData.user.profile_image.medium // Imagen de perfil del usuario
  userImg.alt = imageData.user.name // Texto alternativo para la imagen de perfil
  userInfo.appendChild(userImg) // Agregamos la imagen de perfil al contenedor de la información del usuario

  // Añadimos el nombre del usuario
  const userName = document.createElement('span')
  userName.textContent = imageData.user.name // Nombre del usuario
  userInfo.appendChild(userName) // Agregamos el nombre al contenedor de la información del usuario

  // Finalmente, añadimos el contenedor de la información del usuario a la tarjeta
  card.appendChild(userInfo)

  // Devolvemos la tarjeta completa con la imagen y la información del usuario
  return card
}
