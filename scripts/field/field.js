"use strict";

export default class Field {
  constructor({ element }) {
    this._element = element;

    this._render();

  }

  _render() {
    this._element.innerHTML = `bla-bla`;
  }
}
