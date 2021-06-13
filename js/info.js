export default class Info {
    constructor() {
      this.disp = [...document.querySelectorAll(".info span")];
    }
  
    render(dist, speed, time, fullSpeedTime) {
      let arr = (i, string) => {
        return this.disp[i].textContent = string;
      }
      arr(0,dist)
      arr(1,speed)
      arr(2,time)
      arr(3,fullSpeedTime)
  }
}