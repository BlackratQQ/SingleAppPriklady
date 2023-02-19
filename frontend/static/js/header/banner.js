class bannerimg extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `            
    <div class="banner">
      <div class="banner__text-box">
        <h2 class="heading-primary">
          <span class="heading-primary--main">PŘÍKLADY</span>
        </h2>
      </div>
    </div>
    `
  }
}

window.customElements.define('banner-img', bannerimg)
