let exterioresSection = document.getElementById('exterioresSection');
let mueblesSection = document.getElementById('mueblesSection');
let ropeSection = document.getElementById('ropeSection');
let obrasSection = document.getElementById('obrasSection')
let interiorSection = document.getElementById('interiorSection')


// console.log(mueblesSections);

function loadGalery(sections, dataSections) {
    
return dataSections.map((value, i) =>{
    sections.innerHTML += `<div class="${value.classDiv}" id="${value.idDiv}${i}"><img loading="lazy" id="${value.id}${i}" class="${value.classImg}" src="${value.src}" alt="${value.alt}"></div>`
})

}

loadGalery(exterioresSection, galeryExterior);
loadGalery(mueblesSection, galeryMuebles);
loadGalery(ropeSection, galeryRope);
loadGalery(obrasSection, galeryObras);
loadGalery(interiorSection, galeryInterior);