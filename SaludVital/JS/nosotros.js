// Animaciones al hacer scroll (scrollytelling)
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
    });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observador.observe(el));


// Historia: transiciones horizontales
const pista = document.querySelector(".h-pista");
const paneles = document.querySelectorAll(".h-panel");
const pasos = document.querySelectorAll(".h-paso");
const barra = document.querySelector(".h-barra span");
let actual = 0;

function mostrar(n) {
    actual = (n + paneles.length) % paneles.length;

    pista.style.transform = "translateX(-" + (actual * 100) + "%)";

    paneles.forEach((p, i) => {
        p.classList.toggle("activo", i === actual);
        p.classList.toggle("previo", i < actual);
    });

    pasos.forEach((p, i) => p.classList.toggle("activo", i === actual));

    barra.style.width = ((actual + 1) / paneles.length * 100) + "%";
}

document.querySelector(".h-sig").addEventListener("click", () => mostrar(actual + 1));
document.querySelector(".h-ant").addEventListener("click", () => mostrar(actual - 1));
pasos.forEach((p, i) => p.addEventListener("click", () => mostrar(i)));

// Deslizar con el dedo en celulares
let inicioX = 0;
const zona = document.querySelector(".h-contenido");

zona.addEventListener("touchstart", e => { inicioX = e.touches[0].clientX; }, { passive: true });
zona.addEventListener("touchend", e => {
    const dif = e.changedTouches[0].clientX - inicioX;
    if (Math.abs(dif) > 50) mostrar(dif < 0 ? actual + 1 : actual - 1);
}, { passive: true });

mostrar(0);
