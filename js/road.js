export default class Road {
  
  constructor() {
    this.start = -174;
    this.y = this.start;
    this.stripes = document.getElementById("t").style;
  }

    update(getPlayerSpeed, fps) {
      let newY = this.y;
      newY >= 0
        ? (newY = this.start)
        : (newY += (getPlayerSpeed) * (fps/250) );
        this.render(newY);
        this.y = newY;
    }
  
    render(y) {
      this.stripes.transform = `translateY(${y}px)`;
    }
  
  }
