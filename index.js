// JavaScript para alternar el menú en dispositivos móviles
document.getElementById('hamburger').addEventListener('click', function () {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});
