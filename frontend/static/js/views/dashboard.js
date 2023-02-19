import abstractview from './abstractview.js'

export default class extends abstractview {
  constructor() {
    super()
    this.setTitle('Dashboard')
  }

  async getHtml() {
    return `
    <h1> Welcome back</h1>
    <p>
        <a href="/posts" data-link>View recent posts</a>
        <img src="Doucovani-Matika-Statistika-Ekonomicke-metody-IKONA.png">
    </p>
    `
  }
}
