const FLUJO = document.getElementById("flu"); 
const FLUJO2 = document.getElementById("flu2"); 
const FLUJO3 = document.getElementById("flu3"); 
const BOTON = document.getElementById("Calcular")
const INPUT = document.getElementById("peso")
const ERROR = document.getElementById("error")

BOTON.addEventListener("click",()=>{
let peso = INPUT.value;
if (peso === ''){
    console.log("error")
} else if (peso <= 30){
    let holli= holliday(peso)
    FLUJO.innerHTML = holli[0] + " cc"
    FLUJO.style.display = "block"
    ERROR.style.display = "none";

    FLUJO2.innerHTML = holli[1] + " cc"
    FLUJO2.style.display = "block"
    ERROR.style.display = "none";

    FLUJO3.innerHTML = holli[2] + " cc"
    FLUJO3.style.display = "block"
    ERROR.style.display = "none";

} else {
    let sc= superficieCorporal(peso)
    FLUJO.innerHTML = sc[0] + " cc";
    FLUJO.style.display = "block"
    ERROR.style.display = "none";

    FLUJO2.innerHTML = sc[1] + " cc";
    FLUJO2.style.display = "block"
    ERROR.style.display = "none";
}
}); 

function holliday(peso){
    let resultado =0;
    let mantenimiento= 0;
if (peso <= 10){
    resultado = (peso*100)
} else if (peso<=20){
    resultado = ((peso-10)*50+1000)
} else if (peso>20){
    resultado = (1500+(peso-20)*20) 
} 
mantenimiento= resultado/24
return [resultado,mantenimiento.toFixed(2),(mantenimiento*1.5).toFixed(2)]
} 
 
function superficieCorporal(peso){
let superficieCorporal = ( (peso * 4) + 7) / (peso + 90);
return [(superficieCorporal*1500).toFixed(2),(superficieCorporal*2000).toFixed(2)]
}
