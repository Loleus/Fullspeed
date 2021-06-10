import content from "./js/htmlTree.js"
import Adapter from "./js/Adapter.js";

const root = document.querySelector('.root');
root.innerHTML = content;

const A = new Adapter();

document.addEventListener("DOMContentLoaded", () => {
  A.init();
});
