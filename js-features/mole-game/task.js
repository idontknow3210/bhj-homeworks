
let dead=document.getElementById("dead");
let lost=document.getElementById("lost");
function getHole(index) {
	return document.getElementById(`hole${index}`);
}

for(let i = 1; i<10; i++) {
    let hole = getHole(i);
    hole.onclick=()=> {
        if (hole.className.includes('hole_has-mole')) {
          dead.textContent++;
        } else {
          lost.textContent++;
        }
        if (dead.textContent == 10||lost.textContent == 5) {
          if(dead.textContent == 10) {
            alert("Вы победили!");
          } else {
            alert("Вы проиграли =(");
          }
          playing = false;
          lost.textContent = 0;
          dead.textContent = 0;
        }
    };
}



    
