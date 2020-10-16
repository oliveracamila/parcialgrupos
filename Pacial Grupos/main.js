let prop = document.querySelector('#propagandas');
let cabecera = document.querySelector('#cabecera');
let botonCerrar = document.querySelector('#button-close');
let yaseactivo = localStorage.getItem("seActivo");


window.addEventListener('scroll',()=>{
    if (yaseactivo == null) {
        if (window.scrollY > cabecera.scrollHeight) {
            prop.classList.add('prop-activas');
            localStorage.setItem("seActivo",true);
            yaseactivo = true;
        }
    }
});


botonCerrar.addEventListener('click',()=>{
    prop.classList.remove('prop-activas');
})