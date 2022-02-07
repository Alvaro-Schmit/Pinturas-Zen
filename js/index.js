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
           
          
          
    
   