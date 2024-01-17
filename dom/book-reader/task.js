let fontSize = document.getElementsByClassName("font-size");
let bookContent = document.querySelector(".book__content");
for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", (event) => {
        fontSize[i].classList.add("font-size_active");
        if(i===0) {
            bookContent.classList.add("book_fs-small");
        } else {
            bookContent.classList.remove("book_fs-small");
        }
        if(i==2) {
            bookContent.classList.add("book_fs-big");
        } else {
            bookContent.classList.remove("book_fs-big");
        }

        for (let index = 0; index < fontSize.length; index++) {
            if (index !== i) {
                fontSize[index].classList.remove("font-size_active");
            }
        }
      event.preventDefault();


});
}