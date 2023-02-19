import abstractview from '../abstractview.js'
import initMath from '../../logic.js'

export default class extends abstractview {
  constructor() {
    super()
    this.setTitle('Limity - L`Hospitalovo pravidlo')
    initMath()
  }

  async getHtml() {
    return `
    <script
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
     <h2>Limity funcí - L\`Hospitalovo pravidlo</h2>
     <p>Videa k tématu najdete ve videokurzu ZDE</p>


    <div id="examples-container"></div>

    <script src="../../logic.js" type="module"></script>
    `
  }
}
