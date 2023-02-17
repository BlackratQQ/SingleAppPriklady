import abstractview from '../abstractview.js';
import initMath from '../../logic.js';

export default class extends abstractview {
  constructor() {
    super();
    this.setTitle('Derivace - Součet a rozdíl');
    initMath();
  }

  async getHtml() {
    return `
    <script
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <h2>Derivace - Součet a rozdíl</h2>

    <div id="examples-container"></div>

    <script src="../../logic.js" type="module"></script>
    `;
  }
}
