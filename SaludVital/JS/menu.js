// Menú hamburguesa para celulares
const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", abierto);
    botonMenu.textContent = abierto ? "✕" : "☰";
});

// Cerrar el menú al tocar un enlace
menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
        menu.classList.remove("abierto");
        botonMenu.textContent = "☰";
    });
});
