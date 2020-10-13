let prop = document.querySelector('#propagandas');
let cabecera = document.querySelector('#cabecera');
let botonCerrar = document.querySelector('#button-close');
let yaseactivo = false;

window.addEventListener('scroll',()=>{
    if ( (!yaseactivo) && (window.scrollY > cabecera.scrollHeight) ) {
        prop.classList.add('prop-activas');
        yaseactivo = true;
    }
});
botonCerrar.addEventListener('click',()=>{
    prop.classList.remove('prop-activas');
})