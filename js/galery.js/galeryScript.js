const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');

let lightbox = document.querySelector('#contenedor-principal');
let imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;


/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
  navBar.style.display = 'block';
});

document.getElementById('galery').style.display = 'none';

//Entra el ID del TAG
let loadGalery2 = (tag) => {
  console.log(tag);
  console.log(tag.id);
  //document.getElementById('galery').style.display='block';

  document.getElementById('galeryLightBox').innerHTML = "";

  let object = imagenes[tag.id];

  object.forEach(value => {

    document.getElementById('galeryLightBox').innerHTML += `<img src="${value.picture}"alt="" >`

  })
  ulImagenes = document.querySelectorAll('#galeryLightBox img');
  // console.log(ulImagenes);
};



/*Abre el Lightbox*/

let ulImagenes = document.querySelectorAll('#galeryLightBox img');
let navBar = document.getElementById('header')

const abreLightbox = (event) => {
  console.log(event);
  imagenActiva.src = event.target.src;
  //  imagenActiva.src = ulImagenes[0].src;
  lightbox.style.display = 'flex';

  navBar.style.display = 'none';
  indiceImagen = Array.from(ulImagenes).indexOf(event.target);
  console.log(event.target);
  console.log(indiceImagen);
};

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

//HAY MANERA DE OPTIMIZAR EL CODIGO A CONTINUACION???????????????????????
//??????????????????????????????????????????????????????????????????????/   

document.getElementById('abrir1').addEventListener('click', abreLightbox);
document.getElementById('abrir2').addEventListener('click', abreLightbox);
document.getElementById('video1').addEventListener('click', abreLightbox);
document.getElementById('abrir3').addEventListener('click', abreLightbox);
document.getElementById('abrir5').addEventListener('click', abreLightbox);
document.getElementById('abrir6').addEventListener('click', abreLightbox);
document.getElementById('img011').addEventListener('click', abreLightbox);
document.getElementById('img012').addEventListener('click', abreLightbox);
document.getElementById('img014').addEventListener('click', abreLightbox);
document.getElementById('img015').addEventListener('click', abreLightbox);

// mouse enter & leave cambios en imagen 
//comentada ya que no esta funcionando como deveria. cuando el mause pasa por abrir desactiva la funcion de light box

let abrir1 = document.getElementById('card-01', )
let verMas = document.getElementById('verMas1')

function enterImg() {
  verMas.style.display = 'block'
  abrir1.style.opacity = '0.8';
  let texto = abrir1.children[1].innerHTML = '<p  class=" btnImg" >Ver más &raquo;</p>';
}

function leaveImg() {
  verMas.style.display = 'none'
  abrir1.style.opacity = '1';
}
// abrir1.addEventListener('mouseenter', enterImg);
// abrir1.addEventListener('mouseleave', leaveImg);