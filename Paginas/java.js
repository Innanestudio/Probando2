document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el comportamiento por defecto del Enter en formularios
        searchProducts();       // Llama a la función de búsqueda
    }
});

function searchProducts() {
    // Obtiene el valor de búsqueda
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    // Selecciona todas las cajas de productos
    const productBoxes = document.querySelectorAll(".products-container .box");

    // Recorre cada producto y verifica si coincide con el término de búsqueda
    productBoxes.forEach(box => {
        // Obtiene el nombre del producto en la caja
        const productName = box.querySelector("h3").textContent.toLowerCase();
        
        // Compara el nombre del producto con el término de búsqueda
        if (productName.includes(searchTerm)) {
            box.style.display = "block"; // Muestra el producto si coincide
        } else {
            box.style.display = "none"; // Oculta el producto si no coincide
        }
    });
}

// Listener para el botón "Todos"
document.getElementById("allOption").addEventListener("click", function() {
    filterProducts("all");
});

document.getElementById("featuredOption").addEventListener("click", function() {
    filterProducts("featured");
});

document.getElementById("recentOption").addEventListener("click", function() {
    filterProducts("recent");
});

document.getElementById("bestSellingOption").addEventListener("click", function() {
    filterProducts("best-selling");
});

function filterProducts(category) {
    // Selecciona todos los productos
    const productBoxes = document.querySelectorAll(".products-container .box");

    // Recorre cada producto
    productBoxes.forEach(box => {
        // Muestra todos los productos si la categoría es "all"
        if (category === "all" || box.getAttribute("data-category") === category) {
            box.style.display = "block"; // Muestra el producto
        } else {
            box.style.display = "none"; // Oculta el producto
        }
    });

    // Actualiza la clase "active" en las opciones de clasificación
    document.querySelectorAll(".container-options span").forEach(option => {
        option.classList.remove("active");
    });
    document.getElementById(category + "Option").classList.add("active");
}
