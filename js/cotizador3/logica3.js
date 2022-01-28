//funcion que carga los select

let selectContainer = document.getElementById('selectContainer')

function loadSelect(dataSelect) {
    let carga = true
    if (carga !=true) {
        console.log('no carga');
    } else {
        dataSelect.forEach((data2) => {

            selectContainer.innerHTML += `<div class="${data2.class}" ><p>${data2.InfoCampo}</p><select id="${data2.id}" class="select"></select></div>`
        });  
    }
   
}


//funcion que carga etiquetas option
function getElement() {
let idreboque00 = document.getElementById('idreboque00');
let idreboque01 = document.getElementById('idreboque01');
let idreboque02 = document.getElementById('idreboque02');
let idreboque03 = document.getElementById('idreboque03');
let idreboque04 = document.getElementById('idreboque04');
let idreboque05 = document.getElementById('idreboque05');
}

function getElementMadera() {
    let idMadera00 = document.getElementById('idMadera00');
    let idMadera01 = document.getElementById('idMadera01');
    let idMadera02 = document.getElementById('idMadera02');
    let idMadera03 = document.getElementById('idMadera03');
    let idMadera04 = document.getElementById('idMadera04');
    let idMadera05 = document.getElementById('idMadera05');
    }
    function getElementMetal() {
        let idMetal00 = document.getElementById('idMetal00');
        let idMetal01 = document.getElementById('idMetal01');
        let idMetal02 = document.getElementById('idMetal02');
        let idMetal03 = document.getElementById('idMetal03');
        let idMetal04 = document.getElementById('idMetal04');
        let idMetal05 = document.getElementById('idMetal05');
        }

function loadOptions(select0X, dataOption0X) {
    dataOption0X.forEach(data => {
    select0X.innerHTML +=`<option value="${data.valorMultiplicador}">${data.textOption}</option>`;
    });
}


function toReboqueEnduido() {
    loadOptions(idreboque00,reboqueDataOpt00);
    loadOptions(idreboque01,reboqueDataOpt01);
    loadOptions(idreboque02,reboqueDataOpt02);
    loadOptions(idreboque03,reboqueDataOpt03);
    loadOptions(idreboque04,reboqueDataOpt04);
    loadOptions(idreboque05,reboqueDataOpt05);
}


function toMadera() {
    loadOptions(idMadera00,maderaDataOpt00);
    loadOptions(idMadera01,maderaDataOpt01);
    loadOptions(idMadera02,maderaDataOpt02);
    loadOptions(idMadera03,maderaDataOpt03);
    loadOptions(idMadera04,maderaDataOpt04);
    loadOptions(idMadera05,maderaDataOpt05);
}

function toMetal() {
    loadOptions(idMetal00,MetalDataOpt00);
    loadOptions(idMetal01,MetalDataOpt01);
    loadOptions(idMetal02,MetalDataOpt02);
    loadOptions(idMetal03,MetalDataOpt03);
    loadOptions(idMetal04,MetalDataOpt04);
    loadOptions(idMetal05,MetalDataOpt05);
}


//DIV contenedores de select con display none para iniciarlos no visibles

// let reboqueEnduido = document.querySelectorAll('.reboqueEnduido');
// let madera = document.querySelectorAll('.madera');
// let metal = document.querySelectorAll('.metal');
// let despliegueMenu = document.getElementById('despliegueMenu')
 
 
//  reboqueEnduido.forEach(element =>  element.style.display = "none");
//  madera.forEach(element =>  element.style.display = "none");
//  metal.forEach(element =>  element.style.display = "none");


// funcion que hace aparecer los select segun la eleccion de materiales





selectMaterial.addEventListener('change', selectData= ()=> {

  
   
if (selectMaterial.value == 'reboque') {
    let madera = document.querySelectorAll('.madera');
    madera.forEach(element =>  element.style.display = "none");


    loadSelect(reboqueDataSelect);
   getElement()
   toReboqueEnduido();
   eventoChange()
   
}
 else if (selectMaterial.value == 'madera') {
   let reboqueEnduido = document.querySelectorAll('.reboqueEnduido');
    
 reboqueEnduido.forEach(element =>  element.style.display = "none");
 loadSelect(maderaDataSelect);
 getElementMadera()
   toMadera();
  
  
}
else if (selectMaterial.value == 'metal') {
    let reboqueEnduido = document.querySelectorAll('.reboqueEnduido');
     
  reboqueEnduido.forEach(element =>  element.style.display = "none");
  loadSelect(metalDataSelect);
  getElementMetal()
    toMetal();
   
   
 }

  
  });

// funcion evento change de los select
function eventoChange() {
    

idreboque00.addEventListener('change', idreboqueData0= ()=> idreboque00.value);
idreboque01.addEventListener('change', idreboqueData1= ()=> idreboque01.value) ;
idreboque02.addEventListener('change', idreboqueData2= ()=> idreboque02.value) ;
idreboque03.addEventListener('change', idreboqueData3= ()=> idreboque03.value) ;
idreboque04.addEventListener('change', idreboqueData4= ()=> idreboque04.value) ;
idreboque05.addEventListener('change', idreboqueData5= ()=> idreboque05.value) ;
}

// evento click de cotizar

let metrosIngresados = document.getElementById('metrosIngresados')
function metros() {
 
    return metrosIngresados.value
}
metrosIngresados.addEventListener('input', metros)

let butoonCotizar = document.getElementById('cotizar')

let resultadoEnPantalla = document.getElementById('resultadoEnPantalla')// resultado en pantalla


function cotizar() {
   let precioXmetro = 100
    let resultado = `${precioXmetro}` *`${metros()}` * `${idreboqueData0()}`* `${idreboqueData1()}`* `${idreboqueData2()}`* `${idreboqueData3()}`* `${idreboqueData4()}`* `${idreboqueData5()}`//aca tengo que sumar los otros valores
    console.log(resultado);
  
resultadoEnPantalla.innerHTML= `El resultado de la cotización segun los valores ingresados es : $ ${resultado}`
}

butoonCotizar.addEventListener('click', cotizar);
console.log(metros());

