import Other from './opponent.js';
import Player from './player.js';
import Info from './info.js';
import Menu from './menu.js';
import Road from './road.js';
import Sound from './sound.js';
import setFscreen from "./fullScreen.js";
export default class Game {
  init() {
    this.FPS = 60;
    this.snd = false;
    setFscreen();
    this.reset();
  }
  reset() {
    this.deltaTime = 0,
      this.interval = 1000 / this.FPS;
    this.OPP = [];
    this.RNG = {};
    this.M = new Menu();
    this.S = new Sound();
    this.P = new Player('player');
    this.R = new Road();
    this.F = new Info();
    for (let i = 0; i < 5; i++) {
      const E = new Other(`${i}`);
      E.init();
      this.OPP.push(E);
    };
    this.S.init()
    this.P.I.init()
    this.play = false;
    this.time = 0;
    return this.startGame();
  }
  t() {
    return Math.floor(this.time);
  }

  conditioning(e_name, e) {
    let s = this.snd;
    switch (e_name) {
      case "start":
        this.play = true;
          this.M.playing();
          this.lastTime = Date.now();
          this.render();
          if (s) {
            this.S.start();
          }
        break;
      case "music":
        let sound = (e) => {
          if (!s) {
            s = true;
            e.target.classList.add("active");
          } else {
            s = false;
            e.target.classList.remove("active");
          }
          this.snd = s
        }
        return sound(e);
        break;
      case "credits":
        return window.alert("07zglossie@wp.pl");
        break;
      case "over":
        return this.reset(this.timeout);
        break;
      case "data-toggle-fullscreen":

        if (document.fullscreenElement) {
          e.target.textContent = "Screen";
          e.target.classList.remove("active");
          document.exitFullscreen();
        } else {
          e.target.textContent = "Window";
          e.target.classList.add("active");
          document.documentElement.requestFullscreen();
        }
        break;
      default:
        null;
    }
  }
  startGame() {
    this.M.startSeq();
    this.play = false;
    this.render()
  }
  setTimeoutLoop(delay) {
    this.timeout = setTimeout(() => {
      this.render();
    }, delay);
  }
  render() {
    let thisTime = Date.now();
    this.deltaTime = thisTime - this.lastTime;
    let delay = Math.max(this.interval - this.deltaTime, 0);
    this.lastTime = thisTime + delay;
    this.time += 1 / this.FPS;
    this.update()
    this.play ? this.setTimeoutLoop(delay) : null;
  }
  oppUpdate() {
    for (let i = 0; i < this.OPP.length; i++) {
      let elem = this.OPP[i];
      elem.update(this.t(), this.P, this.FPS);
      elem.intersect(elem, this.P) ? this.endGame() : null;
    }
  }
  update() {
    this.P.update(this.FPS, this.play);
    this.oppUpdate()
    this.R.update(this.P.spd(), this.interval);
    this.F.render(this.P.dist(), this.P.spd(), this.t(), this.P.fSpd());
  }
  endGame() {
    this.play = false;
    window.clearTimeout(this.timeout)
    this.snd ? this.S.stop() : null;
    this.M.endSeq();
  }
}