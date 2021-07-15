export default function hamburgerMenu(panelBtn, panel) {
  const d = document;
  d.addEventListener("click", (e) => {
    //si el objeto que origina el evento o  coincide ---cualquier elemento hijo que pulses activa el intecambio de clases
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
  });
}
