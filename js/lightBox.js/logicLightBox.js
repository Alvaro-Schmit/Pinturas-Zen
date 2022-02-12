const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');

const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;
let ulImagenes = document.querySelectorAll('#galeryLightBox img');
const navBar = document.getElementById('header')

const everyImage =document.querySelectorAll('.escalar_hover')

document.getElementById('galery').style.display = 'none';


everyImage.forEach(open =>{
  open.addEventListener('click', loadGalery);
})


function loadGalery(params) {
let idTag =params.target.id  
document.getElementById('galeryLightBox').innerHTML = "";
let object =imagenes[params.target.id]

object.forEach(value => {
  document.getElementById('galeryLightBox').innerHTML += `<img src="${value.picture}"alt="" class='imageLightBox'>`

 })

ulImagenes = document.querySelectorAll('.imageLightBox');

}



/*Abre el Lightbox*/


const abreLightbox = (event) => {
   imagenActiva.src = ulImagenes[0].src;
  lightbox.style.display = 'flex';
  navBar.style.display = 'none';
  };

  everyImage.forEach(open =>{
    open.addEventListener('click', abreLightbox);
  })
  
/*Cierra el Lightbox */

function cierraLightBox (){
  lightbox.style.display = 'none';
  navBar.style.display = 'block';

}

btnCierra.addEventListener('click', cierraLightBox);

lightbox.addEventListener('click', cierraLightBox)

/// detener la propagacion del evento en la imagen esta echo en html en la linea del contenedor-interno

////////////////////////////////////////////////

const adelantaImagen = () => {
  if (indiceImagen === ulImagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = ulImagenes[indiceImagen + 1].src;
  indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = ulImagenes.length;
  }
  imagenActiva.src = ulImagenes[indiceImagen - 1].src;
  indiceImagen--;
};


btnRetrocede.addEventListener('click', retrocederImagen);

function keyup(event) {
  if (event.keyCode == '37') {
    retrocederImagen()
  }
  if (event.keyCode == '39') {
    adelantaImagen()
  }
}
window.onkeyup = keyup


// mouse enter & leave cambios en imagen 



let pFuntionEnter =''

function enterImg(e) {
 let idImg = e.target;
 idImg.style.filter = 'brightness(1.25)';
 let padre = idImg.parentNode
 let child = document.createElement('p');
  padre.appendChild(child).textContent= 'Ver más';
  child.setAttribute("id","pId");
  pFuntionEnter = document.getElementById('pId');
  
}

function leaveImg(e) {
  let idImgleave = e.target;
  idImgleave.style.filter = 'none';
  pFuntionEnter = document.getElementById('pId')
  pFuntionEnter.remove()
}


everyImage.forEach(v =>{
  v.addEventListener('mouseenter', enterImg);
})
everyImage.forEach(v =>{
  v.addEventListener('mouseleave', leaveImg);
})

