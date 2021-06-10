export default class Move {
  constructor() {
    this.wrap = document.body.querySelector('.interface')
    this.l = false;
    this.r = false;
    this.b = false;
    this.events = [["mousedown", "touchstart"],["mouseup","touchend"]]
  }

  init() {
    this.events[0].forEach(element => {
      this.wrap.addEventListener(element, (e) => {
        this.steering(e,true);
      }, false);
    });
    this.events[1].forEach(element => {
      this.wrap.addEventListener(element, (e) => {
        this.steering(e,false);
      }, false);
    });
    document.addEventListener("keydown", (e) => {
      this.steering(e,true);
    })
    document.addEventListener("keyup", (e) => {
      this.steering(e,false);
    })
  };

  steering(e, isKeyDown) {
    e.cancelable ? e.preventDefault() : null;
    e.stopPropagation();
    let e_name = !e.key ? e.target.id : e.key;
    if (e_name) {
      switch (e_name) {
        case "l": case "ArrowLeft":
          this.l = isKeyDown;
          break;
        case "r": case "ArrowRight":
          this.r = isKeyDown;
          break;
        case "b": case "ArrowDown":
          this.b = isKeyDown;
          break;
        default:
          null;
      }
    }
  }
}
