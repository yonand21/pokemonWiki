/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#pokemonName').value;
  }

  render() {
    this.innerHTML = `
    <div class="searchBox">
      <input
        id="pokemonName"
        type="Pokemon name"
        placeholder="Nama pokemon"
      />
      <button id="search"><i class="fa fa-search" style="font-size:20px"></i></button>
    </div>`;

    this.querySelector('#search').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);

