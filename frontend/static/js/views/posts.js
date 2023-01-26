import abstractview from './abstractview.js';

export default class extends abstractview {
  constructor() {
    super();
    this.setTitle('Post');
  }

  async getHtml() {
    return `
    <h1> Welcome Post</h1>
    <p>
        <a href="/settings" data-link>View recent settings</a>
    </p>
    `;
  }
}
