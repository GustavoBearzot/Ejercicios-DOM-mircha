import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
//import resposiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
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

  /* resposiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://www.google.com/maps/d/viewer?ie=UTF8&t=h&oe=UTF8&msa=0&mid=1z77xl_T61NmL97hotC9ubs0f8Ss&ll=-34.60854799999998%2C-58.407537000000005&z=17" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/d/embed?mid=1z77xl_T61NmL97hotC9ubs0f8Ss" width="400" height="200"></iframe>`
  );
  resposiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=JE0pVXicJes&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90" rel="noopener">Ver Video</a>`,
    `<iframe width="400" height="220" src="https://www.youtube.com/embed/JE0pVXicJes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  */
  responsiveTester("responsive-tester");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  //moveBall(e, ".ball", ".stage");
});
//"keyup": cuando suelta la tecla.
//"keypress": mientras mantega presionada la tecla.
darkTheme(".dark-theme-btn", "dark-mode");
