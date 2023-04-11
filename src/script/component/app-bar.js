/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  } connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <h2>Pokemon Wiki</h2>`;
  }
}
customElements.define('app-bar', AppBar);
