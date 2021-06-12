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
  update(fps, isPlaying) {
    this.counters(fps);
    this.sety(this.newYpos())

    const spd = this.spd();
    const leftMax = this.x;
    const rightMax = this.x < 260;
    const msd = this.maxSpeed;
    const {l, r, b} = this.I
    const xDrift = 5;
    const rRatio = 25;
    const aRatio = 32;
    const bRatio = 60;
    const xRatio = 65;
    const left = l && spd;
    const right = r && spd;
    const rValue = (rRatio / fps)
    const leftDrift = (this.r > -xDrift)
    const rightDrift = (this.r < xDrift)
    const xValue = Math.round(xRatio / fps)

    if (isPlaying) {
      if (left) {
        !leftDrift ? (this.r = xDrift * (-1)) : (this.r -= (rValue));
        leftMax ? (this.x -= xValue) : !this.I.l;
      } else if (right) {
        !rightDrift ? (this.r = xDrift) : (this.r += rValue);
        rightMax ? (this.x += xValue) : !this.I.r;
      } else {
        this.r != 0 ? (this.r > 0 ? (this.r -= rValue) : (this.r += rValue)) : this.r;
      }
      if (!b) {
        spd < msd ? (this.speed += aRatio / fps) : (this.speed = msd);
      } else {
        spd <= 0 ? (this.speed = 0) : (this.speed -= bRatio / fps);
      }
    } else {
      this.speed = 0;
      this.sety(400);
    }
    this.car.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.r}deg)`;
  }
}
