class footer extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `            
    <footer>
      <h2>(.*)</h2>
<p>Videa k tématu najdete ve videokurzu ZDE</p>
      <p class="teacher">Ing. Petr Hadraba</p>
      <p class="phone">
        <i class="fa-solid fa-phone"></i><a href="tel:721755339">721 755 339</a>
      </p>
      <p class="mail">
        <i class="fa-solid fa-envelope"></i
        ><a href="mailto:phadraba@seznam.cz">PHadraba@seznam.cz</a>
      </p>
      <p class="mail">
        <i class="fa-solid fa-envelope"></i
        ><a href="mailto:info@doucovanispetrem.cz">info@doucovanispetrem.cz</a>
      </p>
    </footer>
      `
  }
}

window.customElements.define('footer-section', footer)
