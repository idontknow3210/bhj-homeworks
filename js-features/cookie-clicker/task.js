let clickerCounter=document.getElementById("clicker__counter");
let cookie=document.getElementById("cookie");

cookie.onclick = () => {
    clickerCounter.textContent++;
    cookie.width = cookie.width === 200 ? 300 : 200;
};




