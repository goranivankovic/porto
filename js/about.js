let objIndex={
    menuBar:document.querySelector('.menu'),
    divNavPos:document.querySelector('.divNavPosAbout'),
    aboutText:document.querySelector('.aboutText'),
    nav:document.querySelector('nav'),
    ul:document.querySelector('ul'),
    laz:false,
    div30:document.querySelector('.div30'),
   
   


}
objIndex.menuBar.addEventListener('click',(e)=>{
    e.preventDefault();

    if (objIndex.laz==false) {
        objIndex.divNavPos.style.display ='flex';
          objIndex.div30.style.position='absolute';
          objIndex.div30.style.bottom='-100%';
          objIndex.div30.style.height='20%';
          objIndex.menuBar.style.background='lightblue'
          objIndex.aboutText.display='block';
          objIndex.aboutText.style.top='120%';
          
          

        objIndex.laz=true;
        
    }else if(objIndex.laz==true){
        objIndex.divNavPos.style.display ='none'
        objIndex.div30.style.position='absolute';
        objIndex.div30.style.bottom='0%';
        objIndex.div30.style.height='0%';
        objIndex.menuBar.style.background='whitesmoke';
        objIndex.aboutText.display='none';
        objIndex.aboutText.style.top='10%'


       objIndex.laz=false;


    }

    
})



function myFunction(x) {
    if (x.matches) { // If media query matches
        objIndex.divNavPos.style.display ='none'
        objIndex.menuBar.style.background='whitesmoke'
        
       
     
    } else {
       
        objIndex.divNavPos.style.display='flex';
        objIndex.div30.style.height='0%';
        objIndex.aboutText.display='block';
        objIndex.aboutText.style.top='10%'
       
        
       
     
    }
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes