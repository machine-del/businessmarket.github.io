// Header - меняется текст
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Marketer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Startup";
    }, 4000); // 4000ms = 4s
}

    textLoad();
    setInterval(textLoad, 8000);    

VANTA.CLOUDS({
  el: "#div1",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 600.00,
  minWidth: 300.00
})