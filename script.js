const sol = document.querySelector(".sol");
const mercurio = document.querySelector(".mercurio");
const venus = document.querySelector(".venus");
const terra = document.querySelector(".terra");
const marte = document.querySelector(".marte");
const jupiter = document.querySelector(".jupiter");
const saturno = document.querySelector(".saturno");
const urano = document.querySelector(".urano");
const netuno = document.querySelector(".netuno");
const tela = document.querySelector(".tela");

dragElement(tela);

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;

    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      sol.style.top = (sol.offsetTop - pos2) + "px";
      sol.style.left = (sol.offsetLeft - pos1) + "px";
      mercurio.style.top = (mercurio.offsetTop - pos2) + "px";
      mercurio.style.left = (mercurio.offsetLeft - pos1) + "px";
      venus.style.top = (venus.offsetTop - pos2) + "px";
      venus.style.left = (venus.offsetLeft - pos1) + "px";
    terra.style.top = (terra.offsetTop - pos2) + "px";
    terra.style.left = (terra.offsetLeft - pos1) + "px";
    marte.style.top = (marte.offsetTop - pos2) + "px";
    marte.style.left = (marte.offsetLeft - pos1) + "px";
    jupiter.style.top = (jupiter.offsetTop - pos2) + "px";
    jupiter.style.left = (jupiter.offsetLeft - pos1) + "px";
    saturno.style.top = (saturno.offsetTop - pos2) + "px";
    saturno.style.left = (saturno.offsetLeft - pos1) + "px";
    urano.style.top = (urano.offsetTop - pos2) + "px";
    urano.style.left = (urano.offsetLeft - pos1) + "px";
    netuno.style.top = (netuno.offsetTop - pos2) + "px";
    netuno.style.left = (netuno.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

let zoom = 1;
const ZOOM_SPEED = 0.3;
let ltm = 10;
let ltv = 40;
let ltt = 80;
let ltma = 100;
let ltj = 150;
let lts = 200;
let ltu = 230;
let ltn = 250;
let ltp = 10;

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoom -= ZOOM_SPEED;
        if(zoom < 1) {
            ltm = 10;
            zoom = 1;
            mercurio.style.transform = `translateX(-${(ltm += 3)}vh)`;
            venus.style.transform = `translateX(-${(ltv += ltp)}vh)`;
            terra.style.transform = `translateX(-${(ltt += ltp)}vh)`;
            marte.style.transform = `translateX(-${(ltma += ltp)}vh)`;
            jupiter.style.transform = `translateX(-${(ltj += ltp)}vh)`;
            saturno.style.transform = `translateX(-${(lts += ltp)}vh)`;
            urano.style.transform = `translateX(-${(ltu += ltp)}vh)`;
            netuno.style.transform = `translateX(-${(ltn += ltp)}vh)`;
        }
        sol.style.transform = `scale(${(zoom)})`;
        mercurio.style.transform = `translateX(-${(ltm -= 3)}vh)`;
        venus.style.transform = `translateX(-${(ltv -= ltp)}vh)`;
        terra.style.transform = `translateX(-${(ltt -= ltp)}vh)`;
        marte.style.transform = `translateX(-${(ltma -= ltp)}vh)`;
        jupiter.style.transform = `translateX(-${(ltj -= ltp)}vh)`;
        saturno.style.transform = `translateX(-${(lts -= ltp)}vh)`;
        urano.style.transform = `translateX(-${(ltu -= ltp)}vh)`;
        netuno.style.transform = `translateX(-${(ltn -= ltp)}vh)`;
    } 
    else if(zoom < 8){
        sol.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
        mercurio.style.transform = `translateX(-${(ltm += 3)}vh)`;
        venus.style.transform = `translateX(-${(ltv += ltp)}vh)`;
        terra.style.transform = `translateX(-${(ltt += ltp)}vh)`;
        marte.style.transform = `translateX(-${(ltma += ltp)}vh)`;
        jupiter.style.transform = `translateX(-${(ltj += ltp)}vh)`;
        saturno.style.transform = `translateX(-${(lts += ltp)}vh)`;
        urano.style.transform = `translateX(-${(ltu += ltp)}vh)`;
        netuno.style.transform = `translateX(-${(ltn += ltp)}vh)`;
    }
});