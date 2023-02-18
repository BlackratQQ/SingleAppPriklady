import abstractview from './abstractview.js'

export default class extends abstractview {
  constructor() {
    super()
    this.setTitle('Dashboard')
  }

  async getHtml() {
    return `
    <h1> Welcome settings</h1>
    <p>
        <a href="/dashboard" data-link>View recent dashboard</a>
    </p>
    `
  }
}
