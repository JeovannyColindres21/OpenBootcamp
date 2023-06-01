//Eventos personalizados
const h = document.getElementById("headding");

console.log(h);

h.addEventListener("cambioTexto", function (e) {
    console.log(e.detail);
    h.innerText = e.detail.texto;
    h.style.color = e.detail.color;
});

function cambiartexto(nuevotexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevotexto,
            color: color
        }
    })
    h.dispatchEvent(evento)
}