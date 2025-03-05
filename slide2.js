'use strict';
{
    const images=['oka3.5.png','okaoka3.5.png',]
    const slideImg = document.getElementById('slide_img');
    const prev = document.getElementById('prev');
    const page = document.getElementById('pabe');
    const next = document.getElementById('next');
    let current = 0;
   
    

    
    next.addEventListener('click',function(){
        
            current=1;
            
        


            slideImg.src = images[current];

    });
    prev.addEventListener('click',function(){
        
        current=0;
    


        slideImg.src = images[current];

    });
}

    
      
