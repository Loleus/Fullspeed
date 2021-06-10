import I from './move.js';
import Driver from './drivers.js';
export default class Player extends Driver {
  constructor(id) {
    super(id);
    this.car = document.getElementById(`${this.id}`);
    this.r = 0;
    this.distance = 0;
    this.fullSpeed = 0;
    this.maxSpeed = 360;
    this.x = 250;
    this.startYpos = 130;
    this.y = 0;
    this.speed = 0;
    this.I = new I();
  }
  counters(fps) {
    this.distance += (this.speed * 0.278) / fps;
    this.fullSpeed += this.speed == this.maxSpeed ? 1 / fps : null;
  }
  newYpos() {
    return this.startYpos - (this.speed / this.maxSpeed) * 100;
  }
  spd() {
    return Math.floor(this.speed);
  }
  fSpd() {
    return Math.floor(this.fullSpeed);
  }
  dist() {
    return Math.floor(this.distance);
  }
  
  update(fps, flag) {
    this.counters(fps);
    let xRatio = 65;
    let rRatio = 25;
    let aRatio = 32;
    let bRatio = 60; 
    let self = this;
    let spd = self.speed;
    let msd = self.maxSpeed;
    let rot = self.r;
    let { l, r, b } = self.I
    let left = l && spd > 0;
    let right = r && spd > 0;
    let maxDrift = 10 * fps / spd;
    let leftDrift = (rot > -maxDrift)
    let rightDrift = (rot < maxDrift)

    if (flag) {
      if (left) {
        !leftDrift ? (this.r = maxDrift * (-1)) : (this.r -= (rRatio / fps));
        this.x > 0 ? (this.x -= Math.round(xRatio / fps)) : (this.I.l = false);
      } else if (right) {
        !rightDrift ? (this.r = maxDrift) : (this.r += rRatio / fps);
        this.x < 260 ? (this.x += Math.round(xRatio / fps)) : (this.I.r = false);
      } else {
        rot != 0 ? (rot > 0 ? (this.r -= rRatio / fps) : (this.r += rRatio / fps)) : this.r;
      }
      if (!b) {
        spd < msd ? (this.speed += aRatio / fps) : (this.speed = msd);
      } else {
        spd <= 0 ? (this.speed = 0) : (this.speed -= bRatio / fps);
      }
    } else {
      this.speed = 0;
    }
    this.render(flag);
  }

  render(playing) {
    playing ? this.sety(this.newYpos()) : this.sety(400);
    this.car.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.r}deg)`;
  }
}
