const f = document.getElementById("formulario");

console.log(f);

f.addEventListener("submit", function (e) {
    console.log(e);
    e.preventDefault();
});