let timer = document.getElementById("timer");
function endTimer() {
    if (+timer.textContent>=0)
    timer.textContent-=1;
    console.log("вычет");
    if (+timer.textContent===-1) {
        alert("Вы победили в конкурсе!");
        timer.textContent=59;
    }
}
setInterval(endTimer, 1000);




               