import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcuts } from "./dom/teclado.js";
import { darkTheme } from "./dom/tema_oscuro.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "June 16, 2022 07:45:00", "Feliz Cumple Gus");
  scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  //moveBall(e, ".ball", ".stage");
});
//"keyup": cuando suelta la tecla.
//"keypress": mientras mantega presionada la tecla.
darkTheme(".dark-theme-btn", "dark-mode");
