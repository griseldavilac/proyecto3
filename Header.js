// Función para crear el componente del header
export const Header = () => {
  // Creamos el elemento header
  const header = document.createElement('header')

  // Creamos el div que contendrá el logo
  const logoContainer = document.createElement('div')
  logoContainer.classList.add('logo') // Añadimos una clase para el estilo

  // Creamos la imagen del logo
  const logo = document.createElement('img')
  logo.src = './assets/pinterest-logo.png' // Ruta de la imagen del logo
  logo.alt = 'Pinterest' // Texto alternativo

  // Añadimos la imagen del logo al contenedor
  logoContainer.appendChild(logo)

  // Creamos el menú de navegación
  const nav = document.createElement('nav')
  const ul = document.createElement('ul') // Lista no ordenada para los elementos del menú

  // Creamos los elementos de navegación
  const navItems = ['Inicio', 'Explorar', 'Crear'] // Elementos de la barra de navegación
  navItems.forEach((item) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = '#' // Enlace vacío, puedes cambiarlo según sea necesario
    a.textContent = item // Texto del enlace
    if (item === 'Inicio') {
      a.classList.add('active') // Añadir clase activa al primer enlace
    }
    li.appendChild(a)
    ul.appendChild(li)
  })

  // Añadimos la lista al contenedor de navegación
  nav.appendChild(ul)

  // Creamos el contenedor de la barra de búsqueda
  const searchBar = document.createElement('div')
  searchBar.classList.add('search-bar') // Añadimos una clase para el estilo

  // Creamos el input para las búsquedas
  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'Buscar' // Texto del placeholder
  input.id = 'searchInput' // ID para el manejo en JavaScript

  // Creamos el botón para buscar
  const button = document.createElement('button')
  button.id = 'searchBtn' // ID para el manejo en JavaScript

  // Añadimos el icono de lupa (puedes usar una imagen o un icono)
  const icon = document.createElement('i')
  icon.classList.add('fa', 'fa-search') // Puedes usar FontAwesome o tu propio icono

  // Añadimos el icono dentro del botón
  button.appendChild(icon)

  // Añadimos el input y el botón dentro de la barra de búsqueda
  searchBar.appendChild(input)
  searchBar.appendChild(button)

  // Añadimos el logo, el menú de navegación y la barra de búsqueda al header
  header.appendChild(logoContainer)
  header.appendChild(nav)
  header.appendChild(searchBar)

  // Devolvemos el header completo para añadirlo al DOM
  return header
}
