class bannerimg extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `            
    <div class="banner">
    <div class="banner__text-box">
      <!-- <h1 class="heading-primary">
        <span class="heading-primary--main">Outdoors</span>
        <span class="heading-primary--sub">is where life happens</span>
      </h1> 
      <a href="#" class="header-btn btn--white btn--animated">
        Discover out tours
      </a>
      -->
    </div>
  </div>
    `
  }
}

window.customElements.define('banner-img', bannerimg)
