//funcion que carga los select

let selectContainer = document.getElementById('selectContainer')


for (let index = 0; index <=5; index++) {
   
    selectContainer.innerHTML +=` <div><p>Selecciona el material de la superficie</p><select name="" id="select0${index}" class="select"></select></div>`
}

//funcion que carga etiquetas option

let select00 = document.getElementById('select00')
let select01 = document.getElementById('select01')
let select02 = document.getElementById('select02')
let select03 = document.getElementById('select03')
let select04 = document.getElementById('select04')
let select05 = document.getElementById('select05')


function loadOptions(select0X, dataSelect0X) {
    dataSelect0X.forEach((data,i) => {
 console.log(i);
        select0X.innerHTML += `<option value="${data.valorMultiplicador}" ">${data.textOption}</option>`
    });
}
loadOptions(select00,dataselect00);
loadOptions(select01,dataselect01);
loadOptions(select02,dataselect02);
loadOptions(select03,dataselect03);
loadOptions(select04,dataselect04);
loadOptions(select05,dataselect05);

//funcion evento change de los select




select00.addEventListener('change', selectData0= ()=> select00.value) ;
select01.addEventListener('change', selectData1= ()=> select01.value) ;
select02.addEventListener('change', selectData2= ()=> select02.value) ;
select03.addEventListener('change', selectData3= ()=> select03.value) ;
select04.addEventListener('change', selectData4= ()=> select04.value) ;
select05.addEventListener('change', selectData5= ()=> select05.value) ;

//evento click de cotizar

let metrosIngresados = document.getElementById('metrosIngresados')
function metros() {
    console.log(metrosIngresados.value);
    return metrosIngresados.value
}
metrosIngresados.addEventListener('input', metros)

let butoonCotizar = document.getElementById('cotizar')

let resultadoEnPantalla = document.getElementById('resultadoEnPantalla')// resultado en pantalla


function cotizar() {
   let precioXmetro = 100
    let resultado = `${precioXmetro}` *`${metros()}` * `${selectData0()}`* `${selectData1()}`* `${selectData2()}`* `${selectData3()}`* `${selectData4()}`* `${selectData5()}`//aca tengo que sumar los otros valores
    console.log(resultado);
  
resultadoEnPantalla.innerHTML= `El resultado de la cotización segun los valores ingresados es : $ ${resultado}`
}

butoonCotizar.addEventListener('click', cotizar);
console.log(metros());

