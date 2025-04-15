const msjBanner = [
    "Envios gratis por compras superiores a $299.900 🚚",
    "¡Devoluciones gratis!"
  ];

  const msjBanner2 = [
    "Términos y Condiciones",
    "Términos y Condiciones"
  ];

  let index = 0;
  
  const contenedor = document.getElementById("bannerHead");
  const contenedor2 = document.getElementById("bannerHead2");

  
  // Mostrar el primer mensaje apenas carga
  contenedor.textContent = msjBanner[index];
  index = (index + 1) % msjBanner.length;
  
  setInterval(() => {
    contenedor.classList.add("translate-x-4", "blur-sm", "opacity-0");
  
    setTimeout(() => {
      contenedor.textContent = msjBanner[index];
      index = (index + 1) % msjBanner.length;
      contenedor.classList.remove("translate-x-4", "blur-sm", "opacity-0");
    }, 250);
  }, 4000);
  
  