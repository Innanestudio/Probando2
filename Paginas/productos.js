const inputQuantity = document.querySelector('.input-quantity');
const toggleDescription = document.querySelector('.title-description');
const contentDescription = document.querySelector('.text-description');
const toggleAdditionalInformation = document.querySelector('.title-additional-information');
const contentAdditionalInformation = document.querySelector('.text-additional-information');

// Verifica si los elementos existen antes de añadir los listeners
if (toggleDescription && contentDescription) {
    toggleDescription.addEventListener('click', () => {
        contentDescription.classList.toggle('hidden');
    });
}

if (toggleAdditionalInformation && contentAdditionalInformation) {
    toggleAdditionalInformation.addEventListener('click', () => {
        contentAdditionalInformation.classList.toggle('hidden');
    });
}

document.addEventListener("DOMContentLoaded", function() {
	// Selecciona todas las categorías
	const categories = document.querySelectorAll(".category");

	categories.forEach(categoryElement => {
		const categoryText = categoryElement.textContent.trim();

		// Crea un nuevo enlace solo para la categoría
		const categoryLink = document.createElement("a");
		categoryLink.classList.add("category-link");
		categoryLink.textContent = categoryText;
		categoryLink.style.textDecoration = "none"; // Opcional: sin subrayado
		categoryLink.href = categoryText === "Dulces" ? "Dulces.html" : categoryText === "Tejidos" ? "Telares.html" : "#";

		// Reemplaza el texto de categoría por el enlace
		categoryElement.replaceWith(categoryLink);
	});
});



// Objeto con los precios para cada producto y tamaño
const productos = {
    "Pie de Limón": {
        "Pequeño": "6.500",
        "Mediano": "7.890",
        "Grande": "8.990"
    },
    "Pan de Pascua": {
        "Pequeño": "4.780",
        "Mediano": "6.780",
        "Grande": "8.500"
    },
    // Agrega más productos y precios aquí
};

// Función para actualizar el precio según el tamaño seleccionado
function actualizarPrecio() {
    // Obtener el nombre del producto desde el título
    const nombreProducto = document.querySelector('.heading h1').textContent;
    // Obtener el tamaño seleccionado
    const tamañoSelect = document.getElementById('tamaño');
    const tamañoSeleccionado = tamañoSelect.value;

    // Verificar si el producto y tamaño existen en el objeto de productos
    if (productos[nombreProducto] && productos[nombreProducto][tamañoSeleccionado]) {
        const precio = productos[nombreProducto][tamañoSeleccionado];
        document.querySelector('.container-price span').textContent = `$${precio} Pesos`;
    }
}

// Seleccionar automáticamente el tamaño "Mediano" al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    // Obtener el nombre del producto desde el título
    const nombreProducto = document.querySelector('.heading h1').textContent;
    const tamañoSelect = document.getElementById('tamaño');

    // Verificar si el producto tiene un precio para el tamaño "Mediano"
    if (productos[nombreProducto] && productos[nombreProducto]["Mediano"]) {
        // Seleccionar el tamaño "Mediano" y actualizar el precio
        tamañoSelect.value = "Mediano";
        actualizarPrecio();
    }

    // Agregar un evento para actualizar el precio cuando el usuario cambie el tamaño
    tamañoSelect.addEventListener('change', actualizarPrecio);
});


// Seleccionar las imágenes y el contenedor de la galería
const galleryWrapper = document.querySelector('.gallery-wrapper');
const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

// Función para mostrar la siguiente imagen
function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Regresa al inicio si está en la última imagen
    }
    updateGallery();
}

// Función para mostrar la imagen anterior
function previousImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Regresa a la última imagen si está en la primera
    }
    updateGallery();
}

// Función para actualizar la posición de la galería
function updateGallery() {
    const offset = -currentIndex * 100;
    galleryWrapper.style.transform = `translateX(${offset}%)`;
}
