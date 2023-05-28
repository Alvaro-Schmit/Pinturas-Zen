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
// let select5 = document.getElementById('select5');

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
// loadOptions(select5, optData05);

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

//llamo por id el boton de cotizar y volver a cotizar
let butoonCotizar = document.getElementById('cotizar');
let volverACotizar = document.getElementById('volverACotizar')

//llamo por id el p que contiene el texto del metraje o cantidad por unidad
let metroUnidad = document.getElementById('metroUnidad')

//dejo los botones en diplay none
butoonCotizar.style.display='none';
volverACotizar.style.visibility='hidden';

//creo el evento para habrir menu de preguntas segun el material elegido

selectMaterial.addEventListener('change', selectData);

function selectData() {

    butoonCotizar.style.display='block';
    metraje.style.display ='block'
    todos.forEach(element => element.style.display = "block");


   

    if (selectMaterial.value == 'reboque' || selectMaterial.value =='enduido' || selectMaterial.value =='siding' ) {
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

//traigo el evento change del select2 para rescatar su value y cambiar el valor del input metros por cantidad.

metroUnidad.textContent = "Ingresa los metros a pintar";

select2.addEventListener('change', selectFuntion2=()=>{
    console.log(select2.value);
    (select2.value ==='40' || select2.value ==='50' )?metroUnidad.textContent = "Ingresa la cantidad de puertas a Pintar":metroUnidad.textContent = "Ingresa los metros a pintar";
   return select2.value 
})
  
//comienzo a rescatar valores necesarios para la operacion de cotizacion

let valorMetroCuadrado = 120

let metrosIngresados= document.getElementById('metrosIngresados')


 function innerMeters() {
     console.log(metrosIngresados.value);
return metrosIngresados.value
 }

metrosIngresados.addEventListener('input', innerMeters)

//traigo valores de los demas select

select0.addEventListener('change', selectFuntion0= ()=> select0.value);
select1.addEventListener('change', selectFuntion1= ()=> select1.value);
//el select2 esta en la linea 111
select3.addEventListener('change', selectFuntion3= ()=> select3.value);
select4.addEventListener('change', selectFuntion4= ()=> select4.value);
// select5.addEventListener('change', selectFuntion5= ()=> select5.value);
let resultado =0
console.log(resultado);

// texto donde se va arrojar el resultado

let resultadoEnPantalla = document.getElementById('resultadoEnPantalla')// resultado en pantalla


function operarValores() {
    volverACotizar.style.visibility='inherit';
    resultadoEnPantalla.style.visibility='inherit'
resultado=0


    if (selectMaterial.value == 'reboque' || selectMaterial.value =='enduido' || selectMaterial.value =='siding') {
        resultado = `${innerMeters()}` * `${valorMetroCuadrado}`*`${selectFuntion0()}`*`${selectFuntion1()}`*`${selectFuntion4()}`
        console.log(resultado);   
    }else if (selectMaterial.value === 'madera') {
        resultado = `${innerMeters()}` * `${valorMetroCuadrado}`*`${selectFuntion1()}`*`${selectFuntion2()}`*`${selectFuntion4()}`
        console.log(resultado); 
    }else if (selectMaterial.value === 'metal') {
        resultado = `${innerMeters()}` * `${valorMetroCuadrado}`*`${selectFuntion1()}`*`${selectFuntion3()}`;
        console.log(resultado); 
    }

    // texto donde se va arrojar el resultado
 

resultadoEnPantalla.textContent= `El resultado de la cotización segun los valores ingresados es : $ ${resultado}`

    
}


butoonCotizar.addEventListener('click', operarValores)

//funcion de volver a cotizar

volverACotizar.addEventListener('click', functionBorrar)

function functionBorrar() {
    console.log('soy volver a cotizar');
    madera.forEach(element => element.style.display = "none");
        metal.forEach(element => element.style.display = "none"); 
        reboqueEnduido.forEach(element => element.style.display = "none");
        todos.forEach(element => element.style.display = "none");
        metraje.style.display ='none'
        butoonCotizar.style.display='none';
        volverACotizar.style.visibility='hidden';
resultadoEnPantalla.style.visibility='hidden'
metrosIngresados.value=''
selectMaterial.value='elije'
        
}


