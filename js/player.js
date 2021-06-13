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
    this.startX = 250;
    this.startYpos = 130;
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
    const self = this;
    const spd = self.spd();
    const leftMax = self.x;
    const rightMax = self.x < 260;
    const msd = self.maxSpeed;
    const {l, r, b} = self.I
    const xDrift = 5;
    const rRatio = 25;
    const aRatio = 32;
    const bRatio = 60;
    const xRatio = 65;
    let {speed : S, r : R, x} = self;
    const left = l && spd;
    const right = r && spd;
    const rValue = (rRatio / fps)
    const leftDrift = (R > -xDrift)
    const rightDrift = (R < xDrift)
    const xValue = Math.round(xRatio / fps)
    if (isPlaying) {
      if (left) {
        !leftDrift ? (R = xDrift * (-1)) : (R -= (rValue)); //drift right
        leftMax ? (x -= xValue) : !this.I.l; // turn left
      } else if (right) {
        !rightDrift ? (R = xDrift) : (R += rValue); // drift left
        rightMax ? (x += xValue) : !this.I.r; //turn right
      } else {
        R != 0 ? (R > 0 ? (R -= rValue) : (R += rValue)) : R; // back to vertical position
      }
      if (!b) { 
        spd < msd ? (S += aRatio / fps) : (S = msd); //if not braking - accelerate
      } else {
        spd <= 0 ? (S = 0) : (S -= bRatio / fps); //else - braking
      }
      this.counters(fps);
      this.sety(this.newYpos())
      this.setx(x);
      this.r = R;
      this.speed = S;
    } else {
      this.speed = 0;
      this.sety(400);
      this.setx(this.startX);
    }
    this.car.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.r}deg)`;
  }
}
