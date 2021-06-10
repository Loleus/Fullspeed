export default class Menu {

  constructor() {
    this.options = document.getElementById("options");
    this.result = document.getElementById("result");
    this.main = document.getElementById("main");
    this.banner = document.querySelector(".banner");
  }
  
  endSeq() {
    this.options.classList.remove("hide");
    this.result.classList.remove("hide");
    this.main.classList.add("hide");
  }

  startSeq() {
    this.banner.style.opacity = 1;
    this.options.classList.remove("hide");
    this.result.classList.add("hide");
    this.main.classList.remove("hide");
  }

  playing() {
    this.banner.style.opacity = 0.4;
    this.options.classList.add("hide");
  }

}
