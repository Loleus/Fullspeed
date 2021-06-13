import Rnd from './rand.js';
export default class Driver {

  constructor(id) {
    this.speed = 0;
    this.y = 0;
    this.x = 0;
    this.w = 35;
    this.h = 89;
    this.id = id;
    this.RNG = new Rnd(10);
  };
  x0() {
    return this.x - (this.w / 2);
  };
  y0() {
    return this.y - (this.h / 2);
  };
  setx(value) {
    this.x = value;
  };
  sety(value) {
    this.y = value;
  };
  getx() {
    return this.x;
  }
  gety() {
    return this.y;
  }
  
};