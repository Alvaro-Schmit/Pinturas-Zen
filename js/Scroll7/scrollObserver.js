const imgIndex1 = document.getElementById('imgDeco1');
const imgIndex2 = document.getElementById('imgDeco2');
const imgIndex3 = document.getElementById('imgDeco3')

const cargarImagen = (entradas, observador) =>{
    // console.log(entradas);
    // console.log(observador);
    
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
                entrada.target.classList.add('visible')
        }else{
            entrada.target.classList.remove('visible')
        }
        
    });
}

const observador = new IntersectionObserver(cargarImagen, {
root:null,
rootMargin: '0px 0px 0px 0px',
threshold: .3
});

observador.observe(imgIndex1);
observador.observe(imgIndex2);
observador.observe(imgIndex3);