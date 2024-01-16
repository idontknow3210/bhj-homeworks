let dropdownValue = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");
let dropdownItem = document.getElementsByClassName("dropdown__item");
let dropdownLink = document.getElementsByClassName("dropdown__link");
dropdownValue.onclick =  () => {
    dropdownList.classList.add("dropdown__list_active");
}
for(let i=0; i<dropdownItem.length; i++) {
    dropdownItem[i].onclick=()=>{
        dropdownValue.textContent=dropdownLink[i].textContent;
        dropdownList.classList.remove("dropdown__list_active");
        return false;
    }

}