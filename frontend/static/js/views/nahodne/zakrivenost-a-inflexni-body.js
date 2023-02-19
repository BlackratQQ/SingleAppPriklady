import abstractview from '../abstractview.js'
import initMath from '../../logic.js'

export default class extends abstractview {
  constructor() {
    super()
    this.setTitle('Zakřivenost a inflexní body')
    initMath()
  }

  async getHtml() {
    return `
    <script
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
     <h2>Zakřivenost a inflexní body</h2>
     <p>Videa k tématu najdete ve videokurzu ZDE</p>


    <div id="examples-container"></div>

    <script src="../../logic.js" type="module"></script>
    `
  }
}
