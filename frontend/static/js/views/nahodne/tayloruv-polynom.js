import abstractview from '../abstractview.js';

export default class extends abstractview {
  constructor() {
    super();
    this.setTitle('Taylorův polynom');
  }

  async getHtml() {
    return `
    <script
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <h2> Taylorův polynom</h2>

    <div id="examples-container"></div>

    <script src="../../logic.js" type="module"></script>
    `;
  }
}