export default class Road {
  
  constructor() {
    this.start = -174;
    this.y = this.start;
    this.stripes = document.getElementById("t");
  }

    update(getPlayerSpeed, fps) {
      this.y >= 0
        ? (this.y = this.start)
        : (this.y += (getPlayerSpeed) * (fps/250) );
    }
  
    render() {
      this.stripes.style.transform = `translateY(${this.y}px)`;
    }
  
  }
