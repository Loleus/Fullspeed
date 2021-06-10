import Driver from './drivers.js';
export default class Other extends Driver {
  constructor(args) {
    super(args);
    this.car = document.getElementById(`op${this.id}`);
    this.speed = 0;
    this.y = 0;
    this.x = 0;
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
  update(time, player, fps) {
    if (time >= 3) {
      if (this.gety() < this.loop || Math.abs(this.gety()) > Math.abs(this.loop)) {
        this.init(this.rnd)
      } else {
        let newPos = (this.gety() + (player.spd() - this.speed) / fps);
        this.sety(newPos);
      }
    }
  }
  render() {
    this.car.style.transform = `translate(${this.getx()}px, ${this.gety()}px) scale(${this.id != 0 ? 1 : -1})`;
  }
}
