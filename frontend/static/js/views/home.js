import abstractview from './abstractview.js'

export default class extends abstractview {
  constructor() {
    super()
    this.setTitle('Úvod')
  }

  async getHtml() {
    return `
    <h1>Úvod</h1>
    <p>
      Ahoj. Na této stránce najdeš spoustu příkladů na procvičení z
      matematiky pro VŠ. V menu si stačí vybrat dané téma. U příkladů jsou
      výsledky a občas také postup výpočtu. Pokud budete chtít s něčím
      poradit, kontakt na mě najdeš na <a href="https://www.doucovanispetrem.cz/">www.doucovanispetrem.cz</a>, nebo každé stránce úplně dole.
    </p>
    `
  }
}
