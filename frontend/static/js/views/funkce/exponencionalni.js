import abstractview from '../abstractview.js'
import initMath from '../../logic.js'

export default class extends abstractview {
  constructor() {
    super()
    this.setTitle('Funkce - Exponencionální')
    initMath()
  }

  async getHtml() {
    return `
    <script
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
     <h2>Funkce - Exponencionální</h2>
     <p>Videa k tématu najdete ve videokurzu <a href="https://www.doucovanispetrem.cz/matematika-obecne/funkce/">ZDE</a></p>


    <div id="examples-container"></div>

    <script src="../../logic.js" type="module"></script>
    `
  }
}
