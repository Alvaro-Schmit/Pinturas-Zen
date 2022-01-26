//funcion que carga los select

let selectContainer = document.getElementById('selectContainer')

function loadSelect() {
    dataSelect.forEach((data2,i) => {

        selectContainer.innerHTML += `<div class="${data2.class}" ><p>${data2.InfoCampo}</p><select id="select0${i}" class="select"></select></div>`
    });
}
loadSelect()

//funcion que carga etiquetas option

let select00 = document.getElementById('select00')
let select01 = document.getElementById('select01')
let select02 = document.getElementById('select02')
let select03 = document.getElementById('select03')
let select04 = document.getElementById('select04')
let select05 = document.getElementById('select05')
let select06 = document.getElementById('select06')
let select07 = document.getElementById('select07')
let select08 = document.getElementById('select08')

function loadOptions(select0X, dataOption0X) {
    dataOption0X.forEach(data => {
    select0X.innerHTML +=`<option value="${data.valorMultiplicador}">${data.textOption}</option>`;
    });
}
loadOptions(select00,dataOption00);
loadOptions(select01,dataOption01);
loadOptions(select02,dataOption02);
loadOptions(select03,dataOption03);
loadOptions(select04,dataOption04);
loadOptions(select05,dataOption05);
loadOptions(select06,dataOption06);
loadOptions(select07,dataOption07);
loadOptions(select08,dataOption08);

//DIV contenedores de select con display none para iniciarlos no visibles

let reboqueEnduido = document.querySelectorAll('.reboqueEnduido');
let madera = document.querySelectorAll('.madera');
let metal = document.querySelectorAll('.metal');

 
 
 reboqueEnduido.forEach(element =>  element.style.display = "none");
 madera.forEach(element =>  element.style.display = "none");
 metal.forEach(element =>  element.style.display = "none");


// funcion que hace aparecer los select segun la eleccion de materiales


selectMaterial.addEventListener('change', selectData0= ()=> {

if (selectMaterial.value == 'reboque') {
   
 reboqueEnduido.forEach(element =>  element.style.display = "block");
}
    
  
  });

// funcion evento change de los select

select00.addEventListener('change', selectData0= ()=> select00.value);
select01.addEventListener('change', selectData1= ()=> select01.value) ;
select02.addEventListener('change', selectData2= ()=> select02.value) ;
select03.addEventListener('change', selectData3= ()=> select03.value) ;
select04.addEventListener('change', selectData4= ()=> select04.value) ;
select05.addEventListener('change', selectData5= ()=> select05.value) ;
select05.addEventListener('change', selectData5= ()=> select06.value) ;

//evento click de cotizar

let metrosIngresados = document.getElementById('metrosIngresados')
function metros() {
 
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

