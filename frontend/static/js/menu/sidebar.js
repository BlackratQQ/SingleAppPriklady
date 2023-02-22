class verticalmenu extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
  <div class="menu-btn">
    <i class="fas fa-bars vertical"></i>
  </div>
  <div class="side-bar">
    <div class="close-btn">
      <i class="fas fa-times vertical"></i>
    </div>
    <div class="logo">
      <a href="https://priklady.doucovanispetrem.cz/">
        <img src="/images/logo.png" alt="Logo" />
      </a>
    </div>
    <h1>Doučování </br> s Petrem</h1>
    <div class="menu">
      <div class="item">
        <a href="/" data-link> Home <i class="fas fa-home dropdown"></i></a>
      </div>
      <div class="item">
        <a class="sub-btn">
          Matice
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a href="/matice/zakladni-operace" class="sub-item" data-link>
            Základní operace
          </a>
          <a href="/matice/hodnosti" class="sub-item" data-link> Hodnost </a>
          <a href="/matice/determinanty" class="sub-item" data-link>
            Determinanty
          </a>
          <a href="/matice/inverzni-matice" class="sub-item" data-link>
            Inverzní matice
          </a>
          <a href="/matice/maticove-rovnice" class="sub-item" data-link>
            Maticové rovnice
          </a>
          <a
            href="/matice/vlastni-cisla-a-vektory"
            class="sub-item"
            data-link>
            Vlastní čísla a vektory
          </a>
        </div>
      </div>
      <div class="item">
        <a class="sub-btn">
          Soustavy lineárních rovnic
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a
            href="/soustavy-linearnich-rovnic/homogenni"
            class="sub-item"
            data-link>
            Homogenní
          </a>
          <a
            href="/soustavy-linearnich-rovnic/nehomogenni"
            class="sub-item"
            data-link>
            Nehomogenní
          </a>
          <a
            href="/soustavy-linearnich-rovnic/cramerovo-pravidlo"
            class="sub-item"
            data-link>
            Cramerovo pravidlo
          </a>
        </div>
      </div>
      <div class="item">
        <a class="sub-btn">
          Funkce
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a href="/funkce/linearni" class="sub-item" data-link> Lineární </a>
          <a href="/funkce/kvadraticke" class="sub-item" data-link>
            Kvadratické
          </a>
          <a href="/funkce/mocninne" class="sub-item" data-link> Mocninné </a>
          <a href="/funkce/n-ta-odmocnina" class="sub-item" data-link>
            N-tá odmocnina
          </a>
          <a href="/funkce/linearne-lomena" class="sub-item" data-link>
            Lineárně lomená
          </a>
          <a href="/funkce/exponencionalni" class="sub-item" data-link>
            Exponenciální
          </a>
          <a href="/funkce/logaritmicka" class="sub-item" data-link>
            Logaritmická
          </a>
          <a href="/funkce/goniometricka" class="sub-item" data-link>
            Goniometrická
          </a>
          <a href="/funkce/cyklometricka" class="sub-item" data-link>
            Cyklometrická
          </a>
        </div>
      </div>
      <div class="item">
        <a href="/definicni-obor" data-link> Definiční obor </a>
      </div>
      <div class="item">
        <a class="sub-btn">
          Limity funkcí
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a href="/limity-funkci/zakladni" class="sub-item" data-link>
            Základní
          </a>
          <a href="/limity-funkci/deleni-nulou" class="sub-item" data-link>
            Dělení nulou
          </a>
          <a href="/limity-funkci/pouziti-vzorcu" class="sub-item" data-link>
            Použití vzorců
          </a>
          <a
            href="/limity-funkci/v-nevlastnim-bode"
            class="sub-item"
            data-link>
            V nevlastním bodě
          </a>
          <a
            href="/limity-funkci/l-hospitalovo-pravidlo"
            class="sub-item"
            data-link>
            L'Hospitalovo pravidlo
          </a>
        </div>
      </div>
      <div class="item">
        <a href="/body-nespojitosti" id="body-nespojitosti" data-link>
          Body nespojitosti
        </a>
      </div>
      <div class="item">
        <a href="/asymptoty-funkce" id="asymptoty-funkce" data-link>
          Asymptoty funkce
        </a>
      </div>
      <div class="item">
        <a class="sub-btn">
          Derivace
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a href="/derivace/soucet-a-rozdil" class="sub-item" data-link>
            Součet a rozdíl
          </a>
          <a href="/derivace/soucin" class="sub-item" data-link> Součin </a>
          <a href="/derivace/podil" class="sub-item" data-link> Podíl </a>
          <a href="/derivace/slozena-funkce" class="sub-item" data-link>
            Složená funkce
          </a>
        </div>
      </div>
      <div class="item">
        <a href="/tecny-a-normaly" id="tecmy-a-normaly" data-link>
          Tečny a normály
        </a>
      </div>
      <div class="item">
        <a href="/tayloruv-polynom" id="tayloruv-polynom" data-link>
          Taylorův polynom
        </a>
      </div>
      <div class="item">
        <a href="/monotonie" id="monotonie" data-link> Monotonie </a>
      </div>
      <div class="item">
        <a href="/extremy" id="extremy" data-link> Extrémy </a>
      </div>
      <div class="item">
        <a
          href="/zakrivenost-a-inflexni-body"
          id="zakrivenost-a-inflexní-body"
          data-link>
          Zakřivenost a inflexní body
        </a>
      </div>
      <div class="item">
        <a href="/prubeh-funkce">Průběh funkce</a>
      </div>
      <div class="item">
        <a class="sub-btn">
          Integrály
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a href="/integraly/neurcite" class="sub-item" data-link>
            Neurčité
          </a>
          <a href="/integraly/urcite" class="sub-item" data-link> Určité </a>
          <a href="/integraly/obsahy-ploch" class="sub-item" data-link>
            Obsahy ploch
          </a>
        </div>
      </div>
      <div class="item">
        <a class="sub-btn">
          Diferenciální rovnice
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a
            href="/diferencialni-rovnice/prvniho-radu"
            class="sub-item"
            data-link>
            1. řádu
          </a>
          <a
            href="/diferencialni-rovnice/druheho-radu"
            class="sub-item"
            data-link>
            2. řádu
          </a>
        </div>
      </div>
    </div>
  </div>
  `
  }
}

window.customElements.define('vertical-menu', verticalmenu)

$(document).ready(function () {
  //jquery for toggle sub menus
  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle()
    $(this).find('.dropdown').toggleClass('rotate')
  })

  //jquery for expand and collapse the sidebar

  $('.close-btn').click(function () {
    $('.side-bar').addClass('non-active')
    $('.menu-btn').css('visibility', 'visible')
  })

  $('.menu-btn').click(function () {
    $('.side-bar').removeClass('non-active')
    $('.menu-btn').css('visibility', 'hidden')
  })
})

const resizeHandler = (function () {
  const isBig = () => window.innerWidth > 850
  let wasBig = isBig()
  return function handler(event) {
    //if (isBig() == wasBig) return; // no change
    if (window.innerWidth > 850) {
      $('.side-bar').removeClass('non-active')
      wasBig = true // future use
    } else {
      $('.side-bar').addClass('non-active')
      wasBig = false
    }
  }
})()
resizeHandler()
window.addEventListener('resize', resizeHandler)

document.querySelectorAll('a').forEach(item => {
  item.addEventListener('click', event => {
    document.querySelectorAll('a').forEach(i => {
      i.classList.remove('active')
    })
    item.classList.add('active')
  })
})
