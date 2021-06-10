const htmlTree = `
<header class="header">
<div class="banner">
  <h1 class="title">F U L L</h1>
  <h1 class="title">SPEED</h1>
</div>
<section class="info">
  <p>Distance: <span>0</span> m</p>
  <p>Speed: <span>0</span> km/h</p>
  <p>Time: <span>0</span> s</p>
  <p>Full Speed: <span>0</span> s</p>
</section>
</header>
<section class="road">
<div class="opponent">
  <div id="op0" class="car"></div>
  <div id="op1" class="car"></div>
  <div id="op2" class="car"></div>
  <div id="op3" class="car"></div>
  <div id="op4" class="car"></div>
</div>
<div class="player">
  <div id="player" class="car"></div>
</div>
<div id='t' class="track"></div>
</section>
<section id='options' class="main">
<div class="select">
  <div id="main">
    <a id="start" class="button">Go on!</a>
    <a id="music" class="button">Music</a>
    <a id="credits" class="button">Credits</a>
    <a class="button" data-toggle-fullscreen>Screen</a>
  </div>
  <div id="result" class="hide">
    <a id="over" class="button">Game Over</a>
  </div>
</div>
</section>
<footer class="footer">
<div class="interface">
    <div class="interface__steer interface__steer--left"><span id="l" class="arrow"></span></div>
    <div class="interface__steer interface__steer--right"><span id="r" class="arrow"></span></div>
    <div class="interface__steer interface__steer--brake"><span id="b" class="arrow"></span></div>
</div>
</footer>
<audio src="./assets/audio/music.ogg" preload="metadata" id="music1S" loop=""></audio>
<audio src="./assets/audio/crash.mp3" preload="metadata" id="crash"></audio>
`;
export default htmlTree;
;
