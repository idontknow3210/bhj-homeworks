let plus = document.querySelectorAll(".product__quantity-control_inc");
let minus = document.querySelectorAll(".product__quantity-control_dec");

minus.forEach(el=>{
    el.addEventListener("click", ()=>{
        if(el.nextElementSibling.textContent>1) {
        el.nextElementSibling.textContent--;
        } 
    });
});
plus.forEach(el=>{
    el.addEventListener("click", ()=>{
        el.previousElementSibling.textContent++;
    });
});

let productAdd = document.querySelectorAll(".product__add")

productAdd.forEach((el)=>{
    el.addEventListener("click", ()=>{
        let parent = el.closest(".product"); 
        let obj = {
            id: parent.dataset.id,
            title: parent.querySelector("h3").textContent,
            src: parent.querySelector("img").src,
            count: parent.querySelector(".product__quantity-value").textContent
        };
          
    });
});
   