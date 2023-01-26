class verticalmenu extends HTMLElement {
  constructor() {
    super();
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
        <img
          src="Doucovani-Matika-Statistika-Ekonomicke-metody-IKONA.png"
          alt="Logo" />
      </a>
    </div>
    <h1>Doučování</h1>
    <div class="menu">
      <div class="item">
        <a class="sub-btn" data-link>
          Matice
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a
            href="/matice/zakladni-operace"
            id="matice/zakladni-operace"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Základní operace
          </a>
          <a
            href="/matice/hodnosti"
            id="matice/hodnosti"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Hodnost
          </a>
          <a
            href="/matice/determinanty"
            id="matice/determinanty"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Determinanty
          </a>
          <a
            href="/matice/inverzni-matice"
            id="matice/inverzni-matice"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Inverzní matice
          </a>
          <a
            href="/matice/maticove-rovnice"
            id="matice/maticove-rovnice"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Maticové rovnice
          </a>
          <a
            href="/matice/vlastni-cisla-a-vektory"
            id="matice/vlastni-cisla-a-vektory"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Vlastní čísla a vektory
          </a>
        </div>
      </div>
      <div class="item">
        <a class="sub-btn" data-link>
          Soustavy lineárních rovnic
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a
            href="/soustavy-linearnich-rovnic/homogenni"
            id="soustavy-linearnich-rovnic/homogenni"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Homogenní
          </a>
          <a
            href="/soustavy-linearnich-rovnic/nehomogenni"
            id="soustavy-linearnich-rovnic/nehomogenni"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Nehomogenní
          </a>
          <a
            href="/soustavy-linearnich-rovnic/cramerovo-pravidlo"
            id="soustavy-linearnich-rovnic/cramerovo-pravidlo"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Cramerovo pravidlo
          </a>
        </div>
      </div>
      <div class="item">
        <a class="sub-btn" data-link>
          Funkce
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a
            href="/funkce/linearni"
            id="funkce/linearni"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Lineární
          </a>
          <a
            href="/funkce/kvadraticke"
            id="funkce/kvadraticke"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Kvadratické
          </a>
          <a
            href="/funkce/mocninne"
            id="funkce/mocninne"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Mocninné
          </a>
          <a
            href="/funkce/n-ta-odmocnina"
            id="funkce/n-ta-odmocnina"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            N-tá odmocnina
          </a>
          <a
            href="/funkce/linearne-lomena"
            id="funkce/linearne-lomena"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Lineárně lomená
          </a>
          <a
            href="/funkce/exponencionalni"
            id="funkce/exponencionalni"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Exponenciální
          </a>
          <a
            href="/funkce/logaritmicka"
            id="funkce/logaritmicka"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Logaritmická
          </a>
          <a
            href="/funkce/goniometricka"
            id="funkce/goniometricka"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Goniometrická
          </a>
          <a
            href="/funkce/cyklometricka"
            id="funkce/cyklometricka"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Cyklometrická
          </a>
        </div>
      </div>
      <div class="item">
        <a
          href="/definicni-obor"
          onClick="reply_click(this.id)"
          data-link>
          Definiční obor
        </a>
      </div>
      <div class="item">
        <a class="sub-btn" data-link>
          Limity funkcí
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a
            href="/limity-funkci/zakladni"
            id="limity-funkci/zakladni"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Základní
          </a>
          <a
            href="/limity-funkci/deleni-nulou"
            id="limity-funkci/deleni-nulou"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Dělení nulou
          </a>
          <a
            href="/limity-funkci/pouziti-vzorcu"
            id="limity-funkci/pouziti-vzorcu"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Použití vzorců
          </a>
          <a
            href="/limity-funkci/v-nevlastnim-bode"
            id="limity-funkci/v-nevlastnim-bode"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            V nevlastním bodě
          </a>
          <a
            href="/limity-funkci/l-hospitalovo-pravidlo"
            id="limity-funkci/l-hospitalovo-pravidlo"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            L'Hospitalovo pravidlo
          </a>
        </div>
      </div>
      <div class="item">
        <a
          href="/body-nespojitosti"
          id="body-nespojitosti"
          onClick="reply_click(this.id)"
          data-link>
          Body nespojitosti
        </a>
      </div>
      <div class="item">
        <a
          href="/asymptoty-funkce"
          id="asymptoty-funkce"
          onClick="reply_click(this.id)"
          data-link>
          Asymptoty funkce
        </a>
      </div>
      <div class="item">
        <a class="sub-btn" data-link>
          Derivace
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a
            href="/derivace/soucet-a-rozdil"
            id="derivace/soucet-a-rozdil"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Součet a rozdíl
          </a>
          <a
            href="/derivace/soucin"
            id="derivace/soucin"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Součin
          </a>
          <a
            href="/derivace/podil"
            id="derivace/podil"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Podíl
          </a>
          <a
            href="/derivace/slozena-funkce"
            id="derivace/slozena-funkce"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Složená funkce
          </a>
        </div>
      </div>
      <div class="item">
        <a
          href="/tecny-a-normaly"
          id="tecmy-a-normaly"
          onClick="reply_click(this.id)"
          data-link>
          Tečny a normály
        </a>
      </div>
      <div class="item">
        <a
          href="/tayloruv-polynom"
          id="tayloruv-polynom"
          onClick="reply_click(this.id)"
          data-link>
          Taylorův polynom
        </a>
      </div>
      <div class="item">
        <a
          href="/monotonie"
          id="monotonie"
          onClick="reply_click(this.id)"
          data-link>
          Monotonie
        </a>
      </div>
      <div class="item">
        <a
          href="/extremy"
          id="extremy"
          onClick="reply_click(this.id)"
          data-link>
          Extrémy
        </a>
      </div>
      <div class="item">
        <a
          href="/zakrivenost-a-inflexni-body"
          id="zakrivenost-a-inflexní-body"
          onClick="reply_click(this.id)"
          data-link>
          Zakřivenost a inflexní body
        </a>
      </div>
      <div class="item">
        <a href="/prubeh-funkce">Průběh funkce</a>
      </div>
      <div class="item">
        <a class="sub-btn" data-link>
          Integrály
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a
            href="/integraly/neurcite"
            id="integraly/neurcite"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Neurčité
          </a>
          <a
            href="/integraly/urcite"
            id="integraly/urcite"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Určité
          </a>
          <a
            href="/integraly/obsahy-ploch"
            id="integraly/obsahy-ploch"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            Obsahy ploch
          </a>
        </div>
      </div>
      <div class="item">
        <a class="sub-btn" data-link>
          Diferenciální rovnice
          <i class="fas fa-angle-right dropdown"></i>
        </a>
        <div class="sub-menu">
          <a
            href="/diferencialni-rovnice/prvniho-radu"
            id="diferencialni-rovnice/prvniho-radu"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            1. řádu
          </a>
          <a
            href="/diferencialni-rovnice/druheho-radu"
            id="diferencialni-rovnice/druheho-radu"
            onClick="reply_click(this.id)"
            class="sub-item"
            data-link>
            2. řádu
          </a>
        </div>
      </div>
    </div>
  </div>
  `;
  }
}

window.customElements.define('vertical-menu', verticalmenu);

$(document).ready(function () {
  //jquery for toggle sub menus
  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  //jquery for expand and collapse the sidebar

  if (window.innerWidth > 850) {
    $('.close-btn').click(function () {
      $('.side-bar').addClass('non-active');
      $('.menu-btn').css('visibility', 'visible');
    });

    $('.menu-btn').click(function () {
      $('.side-bar').removeClass('non-active');
      $('.menu-btn').css('visibility', 'hidden');
    });
  } else {
    $('.side-bar').addClass('non-active');
    $('.menu-btn').click(function () {
      $('.side-bar').removeClass('non-active');
      $('.menu-btn').css('visibility', 'hidden');
    });
    $('.close-btn').click(function () {
      $('.side-bar').addClass('non-active');
      $('.menu-btn').css('visibility', 'visible');
    });
  }
});

function reply_click(clicked_id) {
  localStorage.setItem('page-value', clicked_id);
}