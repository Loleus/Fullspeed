export default class Info {
    constructor() {
      this.disp = [...document.querySelectorAll(".info span")];
    }
  
    render(dist, speed, time, fullSpeedTime) {
      this.disp[0].textContent = dist;
      this.disp[1].textContent = speed;
      this.disp[2].textContent = time;
      this.disp[3].textContent = fullSpeedTime;
    }
  }