let objIndex={
    menuBar:document.querySelector('.menu'),
    divNavPos:document.querySelector('.divNavPosSkills'),
    nav:document.querySelector('nav'),
    ul:document.querySelector('ul'),
    projectPos:document.querySelector('.projectPos'),
    laz:false,
    divProjects:document.querySelector('.divProjects')
   
   
   


}
objIndex.menuBar.addEventListener('click',(e)=>{
    e.preventDefault();

    if (objIndex.laz==false) {
        objIndex.divNavPos.style.display ='flex';
          objIndex.menuBar.style.background='tomato';
          objIndex.divProjects.display='block';
          objIndex.divProjects.style.top='125%';
    
      
          
          

        objIndex.laz=true;
        
    }else if(objIndex.laz==true){
        objIndex.divNavPos.style.display ='none'
        objIndex.menuBar.style.background='whitesmoke';
        objIndex.divProjects.style.top='10%';
    
          
       


       objIndex.laz=false;


    }

    
})



function myFunction(x) {
    if (x.matches) { // If media query matches
        objIndex.divNavPos.style.display ='none'
        objIndex.menuBar.style.background='whitesmoke'
        
       
     
    } else {
       
        objIndex.divNavPos.style.display='flex';
        objIndex.divProjects.display='block';
        objIndex.divProjects.style.top='10%'
   
     
       
        
       
     
    }
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes