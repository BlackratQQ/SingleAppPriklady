import abstractview from '../abstractview.js';
import initMath from '../../logic.js';

export default class extends abstractview {
  constructor() {
    super();
    this.setTitle('Limity - V nevlastním bodě');
    initMath();
  }

  async getHtml() {
    return `
    <script
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <h2>Limity funcí - V nevlastním bodě</h2>

    <div id="examples-container"></div>

    <script src="../../logic.js" type="module"></script>
    `;
  }
}
