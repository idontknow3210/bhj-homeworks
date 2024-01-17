let rotatorCase=document.getElementsByClassName("rotator__case");
let i =0;

setInterval(()=>{
         
        rotatorCase[i].classList.add("rotator__case_active");
        console.log("1");

        for(let index = 0 ; index<rotatorCase.length; index++) {
            if(index!==i) {
               rotatorCase[index].classList.remove("rotator__case_active");
               console.log("2");
            }
        }
   i++;
   if (i===rotatorCase.length)  {
      i=0;
   }   
     
     
     
}, 1000);



