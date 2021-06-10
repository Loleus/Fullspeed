import Game from './game.js';
export default class Adapter {
  constructor() {
    this.G = new Game();
    this.wrap = document.body.querySelectorAll('.button')
  }
  init() {
    this.G.init();
    this.wrap.forEach(elem => {
      elem.addEventListener("click", (e) => {
        this.menu(e);
      }, false);
    });
  };
  menu(e) {
    e.cancelable ? e.preventDefault() : null;
    e.stopPropagation();
    let e_name = !e.target.id ?
      "data-toggle-fullscreen" :
      e.target.id;
    if (e_name) {
      return this.G.conditioning(e_name, e);
    }
  }
};