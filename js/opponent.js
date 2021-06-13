import Driver from './drivers.js';
export default class Other extends Driver {
  constructor(args) {
    super(args);
    this.car = document.getElementById(`op${this.id}`);
    this.track = this.RNG.tracks[this.id];
  }
  init() {
    this.speed = this.RNG.getSpeed(this.id);
    this.loop = this.RNG.getNumb(this.id);
    this.sety(this.loop);
    this.setx(this.track);
  };
  intersect(e1, e2) {
    if (
      e1.x0() + e1.w > e2.x0() &&
      e1.x0() < e2.x0() + e2.w &&
      e1.y0() + (e1.h - 21) > e2.y0() &&
      e1.y0() < e2.y0() + (e2.h - 21)
    ) {
      return true;
    }
    return false;
  }
  update(time, p, fps) {
    let pSpd = p.spd();
    let {loop,speed, rnd} = this
    let y = this.gety();
    let x = this.getx();
    let {abs} = Math;
    if (time >= 3) {
      if (y < loop || abs(y) > abs(loop)) {
        this.init(rnd)
      } else {
        let newPos = (y + (pSpd - speed) / fps);
        this.sety(newPos);
      }
    }
    this.render(x,y)
  }
  render(x,y) {
    this.car.style.transform = `translate(${x}px, ${y}px) scale(${this.id != 0 ? 1 : -1})`;
  }
}
