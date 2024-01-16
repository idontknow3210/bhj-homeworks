let tab=document.getElementsByClassName("tab");
let tabContent = document.getElementsByClassName("tab__content");
for (let i = 0; i<tab.length; i++) {
    tab[i].onclick=()=>{
        tab[i].classList.add("tab_active");
        tabContent[i].classList.add("tab__content_active");
       for(let index = 0; index<tab.length; index++) {
        if (index!==i) {
            tab[index].classList.remove("tab_active");
            tabContent[index].classList.remove("tab__content_active");
        }
       }
    }
}