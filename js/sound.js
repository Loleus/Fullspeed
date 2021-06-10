export default class Sound {
  constructor() {
    this.music = document.getElementById("music1S");
    this.crash = document.getElementById("crash");
  }

  init() {
    this.music.preload;
    this.music.style.oneLine = "none"; //added to fix ios issue
    this.crash.preload;
    this.crash.style.oneLine = "none"; //added to fix ios issue
  }

  start() {
    this.music.play();
  }

  stop() {
    this.music.pause();
    this.music.currentTime = 0;
    this.crash.play();
  }

}