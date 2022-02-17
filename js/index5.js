    let circles = document.querySelectorAll('.circle');
    let circleSelect = ''
       
      circles.forEach(e => {
         e.addEventListener('mouseenter', enterCircle); 
      }); 
      circles.forEach(f =>{
          f.addEventListener('mouseleave', leaveCircle);
      }) 
      
      function  enterCircle(select) { 
        circleSelect =select.target;
        circleSelect.style.transform= 'scale(1.15, 1.15)';
        circleSelect.style.transition ='all 1.5s';
     };

     function  leaveCircle(select) { 
        circleSelect =select.target;
       circleSelect.style.transform= 'scale(1, 1)';
       circleSelect.style.transition ='all 2s';
     }
 ///////////////////////////////////////////////////////////////////////          
 const everyImage =document.querySelectorAll('.escalar_hover')        
     let pFuntionEnter =''         
     
function enterImg(e) {
 
 
  let idImg = e.target;
  console.log(idImg);
  idImg.style.filter = 'brightness(1.25)';
 
  
  let child = document.createElement('p');
   idImg.appendChild(child).textContent= 'Ver más';
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
 
    
   