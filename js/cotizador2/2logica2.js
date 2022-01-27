//funcion que carga los select

let selectContainer = document.getElementById('selectContainer')



dataSelect.forEach((data, i) => {
    selectContainer.innerHTML += `<div class="${data.class}" ><p>${data.InfoCampo}</p><select id="select${i}" class="select"></select></div>`
})


//id de etiquetas select 

let select0 = document.getElementById('select0');
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let select3 = document.getElementById('select3');
let select4 = document.getElementById('select4');
let select5 = document.getElementById('select5');

//funcion que carga las etiquetas option

function loadOptions(select0X, dataOption0X) {
    dataOption0X.forEach(data => {
        select0X.innerHTML += `<option value="${data.valorMultiplicador}">${data.textOption}</option>`;
    });
}

loadOptions(select0, optData00);
loadOptions(select1, optData01);
loadOptions(select2, optData02);
loadOptions(select3, optData03);
loadOptions(select4, optData04);
loadOptions(select5, optData05);

//trayendo los select por  clases y los  guardando en variable


let reboqueEnduido = document.querySelectorAll('.reboqueEnduido');
let madera = document.querySelectorAll('.madera');
let metal = document.querySelectorAll('.metal');
let todos = document.querySelectorAll('.todos');
let metraje = document.getElementById('metraje')
//los inicio con diplay 'none'

reboqueEnduido.forEach(element => element.style.display = "none");
madera.forEach(element => element.style.display = "none");
metal.forEach(element => element.style.display = "none");
todos.forEach(element => element.style.display = "none");
metraje.style.display ='none'

//traigo el select de materiales para luego darle una funcion que dependiendo
//el material ejejido me deje lo que necesito en el fformulario de multiple opcion.

let selectMaterial = document.getElementById('selectMaterial');

selectMaterial.addEventListener('change', selectData)


function selectData() {
    metraje.style.display ='block'
    todos.forEach(element => element.style.display = "block");

    if (selectMaterial.value == 'reboque' || selectMaterial.value =='enduido' ) {
        //borrar select que no son utiles para Material reboque o enduido
        madera.forEach(element => element.style.display = "none");
        metal.forEach(element => element.style.display = "none");
        //cargar select para reboque y enduido
        reboqueEnduido.forEach(element => element.style.display = "block");
    } else if (selectMaterial.value === 'madera') {
        //borrar select que no son utiles para Material madera
        reboqueEnduido.forEach(element => element.style.display = "none");
        metal.forEach(element => element.style.display = "none");

        //cargar select para madera
        madera.forEach(element => element.style.display = "block");
    } else if (selectMaterial.value === 'metal') {
        //borrar select que no son utiles para Material metal
        reboqueEnduido.forEach(element => element.style.display = "none");
        madera.forEach(element => element.style.display = "none");

        //cargar select para madera
        metal.forEach(element => element.style.display = "block");
    }


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





// selectMaterial.addEventListener('change', selectData= ()=> {



// if (selectMaterial.value == 'reboque') {
//     let madera = document.querySelectorAll('.madera');
//     madera.forEach(element =>  element.style.display = "none");


//     loadSelect(reboqueDataSelect);
//    getElement()
//    toReboqueEnduido();
//    eventoChange()

// }
//  else if (selectMaterial.value == 'madera') {
//    let reboqueEnduido = document.querySelectorAll('.reboqueEnduido');

//  reboqueEnduido.forEach(element =>  element.style.display = "none");
//  loadSelect(maderaDataSelect);
//  getElementMadera()
//    toMadera();


// }
// else if (selectMaterial.value == 'metal') {
//     let reboqueEnduido = document.querySelectorAll('.reboqueEnduido');

//   reboqueEnduido.forEach(element =>  element.style.display = "none");
//   loadSelect(metalDataSelect);
//   getElementMetal()
//     toMetal();


//  }


//   });

// // funcion evento change de los select
// function eventoChange() {


// idreboque00.addEventListener('change', idreboqueData0= ()=> idreboque00.value);
// idreboque01.addEventListener('change', idreboqueData1= ()=> idreboque01.value) ;
// idreboque02.addEventListener('change', idreboqueData2= ()=> idreboque02.value) ;
// idreboque03.addEventListener('change', idreboqueData3= ()=> idreboque03.value) ;
// idreboque04.addEventListener('change', idreboqueData4= ()=> idreboque04.value) ;
// idreboque05.addEventListener('change', idreboqueData5= ()=> idreboque05.value) ;
// }

// // evento click de cotizar

// let metraje = document.getElementById('metraje')
// function metros() {

//     return metraje.value
// }
// metraje.addEventListener('input', metros)

// let butoonCotizar = document.getElementById('cotizar')

// let resultadoEnPantalla = document.getElementById('resultadoEnPantalla')// resultado en pantalla


// function cotizar() {
//    let precioXmetro = 100
//     let resultado = `${precioXmetro}` *`${metros()}` * `${idreboqueData0()}`* `${idreboqueData1()}`* `${idreboqueData2()}`* `${idreboqueData3()}`* `${idreboqueData4()}`* `${idreboqueData5()}`//aca tengo que sumar los otros valores
//     console.log(resultado);

// resultadoEnPantalla.innerHTML= `El resultado de la cotización segun los valores ingresados es : $ ${resultado}`
// }

// butoonCotizar.addEventListener('click', cotizar);
// console.log(metros());