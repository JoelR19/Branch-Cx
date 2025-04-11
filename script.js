const msjBanner = ["Envios gratis por compras superiores a $299.900", "¡Devoluciones gratis!"];
let index = 0;

const contenedor = document.getElementById("bannerHead");

const intervalo = setInterval(() => {
    contenedor.textContent = msjBanner[index];
    index = (index + 1)% msjBanner.length;  
},2000);