let objIndex={
    menuBar:document.querySelector('.menu'),
    divNavPos:document.querySelector('.divNavPosSkills'),
    nav:document.querySelector('nav'),
    ul:document.querySelector('ul'),
    formPos:document.querySelector('.formPos'),
    info:document.querySelector('.info'),
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
          objIndex.menuBar.style.background='thistle'
          objIndex.formPos.display='block';
          objIndex.formPos.style.top='115%';
          objIndex.info.style.position='absolute';
          objIndex.info.style.bottom='-83%';
          
          

        objIndex.laz=true;
        
    }else if(objIndex.laz==true){
        objIndex.divNavPos.style.display ='none'
        objIndex.div30.style.position='absolute';
        objIndex.div30.style.bottom='0%';
        objIndex.div30.style.height='0%';
        objIndex.menuBar.style.background='whitesmoke';
          objIndex.formPos.style.top='25%';
          objIndex.info.style.bottom='2%';
          
       


       objIndex.laz=false;


    }

    
})



function myFunction(x) {
    if (x.matches) { // If media query matches
        objIndex.divNavPos.style.display ='none'
        objIndex.menuBar.style.background='whitesmoke'
        objIndex.formPos.style.top='25%'
        objIndex.info.style.bottom='2%';
       
     
    } else {
       
        objIndex.divNavPos.style.display='flex';
        objIndex.div30.style.height='0%';
        objIndex.formPos.display='block';
        objIndex.formPos.style.top='25%'
        objIndex.info.style.bottom='2%';
       
        
       
     
    }
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes