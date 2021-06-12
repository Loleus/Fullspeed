(()=>{var U=`
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
`,w=U;var h=class{constructor(t){this.m=2147483648,this.a=1103515245,this.c=12345,this.state=t||Math.floor(Math.random()*(this.m-1)),this.tracks=[10,70,130,190,250],this.speedys=[[-520,-320],[160,260],[90,180],[80,120],[55,95]],this.loops=[[-1800,-400],[-600,-400],[-700,-500],[-400,-600],[-800,-350]]}getSpeed(t){return this.nextRange(this.speedys[t][0],this.speedys[t][1])}getNumb(t){return this.nextRange(this.loops[t][0],this.loops[t][1])}nextInt(){return this.state=(this.a*this.state+this.c)%this.m,this.state}nextFloat(){return this.nextInt()/(this.m-1)}nextRange(t,e){let s=e-t,r=this.nextInt()/this.m;return t+Math.floor(r*s)}choice(t){return t[this.nextRange(0,t.length)]}},S=h;var l=class{constructor(t){this.w=35,this.h=89,this.id=t,this.RNG=new S(10)}x0(){return this.x-this.w/2}y0(){return this.y-this.h/2}setx(t){this.x=t}sety(t){this.y=t}getx(){return this.x}gety(){return this.y}},o=l;var d=class extends o{constructor(t){super(t);this.car=document.getElementById(`op${this.id}`),this.speed=0,this.y=0,this.x=0,this.track=this.RNG.tracks[this.id]}init(){this.speed=this.RNG.getSpeed(this.id),this.loop=this.RNG.getNumb(this.id),this.sety(this.loop),this.setx(this.track)}intersect(t,e){return t.x0()+t.w>e.x0()&&t.x0()<e.x0()+e.w&&t.y0()+(t.h-21)>e.y0()&&t.y0()<e.y0()+(e.h-21)}update(t,e,s){if(t>=3)if(this.gety()<this.loop||Math.abs(this.gety())>Math.abs(this.loop))this.init(this.rnd);else{let r=this.gety()+(e.spd()-this.speed)/s;this.sety(r)}}render(){this.car.style.transform=`translate(${this.getx()}px, ${this.gety()}px) scale(${this.id!=0?1:-1})`}},E=d;var c=class{constructor(){this.wrap=document.body.querySelector(".interface"),this.l=!1,this.r=!1,this.b=!1,this.events=[["mousedown","touchstart"],["mouseup","touchend"]]}init(){this.events[0].forEach(t=>{this.wrap.addEventListener(t,e=>{this.steering(e,!0)},!1)}),this.events[1].forEach(t=>{this.wrap.addEventListener(t,e=>{this.steering(e,!1)},!1)}),document.addEventListener("keydown",t=>{this.steering(t,!0)}),document.addEventListener("keyup",t=>{this.steering(t,!1)})}steering(t,e){t.cancelable&&t.preventDefault(),t.stopPropagation();let s=t.key?t.key:t.target.id;if(s)switch(s){case"l":case"ArrowLeft":this.l=e;break;case"r":case"ArrowRight":this.r=e;break;case"b":case"ArrowDown":this.b=e;break;default:}}},F=c;var u=class extends o{constructor(t){super(t);this.car=document.getElementById(`${this.id}`),this.r=0,this.distance=0,this.fullSpeed=0,this.maxSpeed=360,this.x=250,this.startYpos=130,this.y=0,this.speed=0,this.I=new F}counters(t){this.distance+=this.speed*.278/t,this.fullSpeed+=this.speed==this.maxSpeed?1/t:null}newYpos(){return this.startYpos-this.speed/this.maxSpeed*100}spd(){return Math.floor(this.speed)}fSpd(){return Math.floor(this.fullSpeed)}dist(){return Math.floor(this.distance)}update(t,e){this.counters(t),this.sety(this.newYpos());let s=this.spd(),r=this.x,q=this.x<260,v=this.maxSpeed,{l:G,r:_,b:D}=this.I,n=5,$=25,B=32,C=60,O=65,A=G&&s,N=_&&s,a=$/t,z=this.r>-n,Y=this.r<n,b=Math.round(O/t);e?(A?(z?this.r-=a:this.r=n*-1,r?this.x-=b:this.I.l):N?(Y?this.r+=a:this.r=n,q?this.x+=b:this.I.r):this.r!=0?this.r>0?this.r-=a:this.r+=a:this.r,D?s<=0?this.speed=0:this.speed-=C/t:s<v?this.speed+=B/t:this.speed=v):(this.speed=0,this.sety(400)),this.car.style.transform=`translate(${this.x}px, ${this.y}px) rotate(${this.r}deg)`}},P=u;var p=class{constructor(){this.disp=[...document.querySelectorAll(".info span")]}render(t,e,s,r){this.disp[0].textContent=t,this.disp[1].textContent=e,this.disp[2].textContent=s,this.disp[3].textContent=r}},k=p;var m=class{constructor(){this.options=document.getElementById("options"),this.result=document.getElementById("result"),this.main=document.getElementById("main"),this.banner=document.querySelector(".banner")}endSeq(){this.options.classList.remove("hide"),this.result.classList.remove("hide"),this.main.classList.add("hide")}startSeq(){this.banner.style.opacity=1,this.options.classList.remove("hide"),this.result.classList.add("hide"),this.main.classList.remove("hide")}playing(){this.banner.style.opacity=.4,this.options.classList.add("hide")}},L=m;var f=class{constructor(){this.start=-174,this.y=this.start,this.stripes=document.getElementById("t")}update(t,e){this.y>=0?this.y=this.start:this.y+=t*(e/250)}render(){this.stripes.style.transform=`translateY(${this.y}px)`}},R=f;var y=class{constructor(){this.music=document.getElementById("music1S"),this.crash=document.getElementById("crash")}init(){this.music.preload,this.music.style.oneLine="none",this.crash.preload,this.crash.style.oneLine="none"}start(){this.music.play()}stop(){this.music.pause(),this.music.currentTime=0,this.crash.play()}},M=y;var V=()=>{Element.prototype.requestFullscreen||(Element.prototype.requestFullscreen=Element.prototype.mozRequestFullscreen||Element.prototype.webkitRequestFullscreen||Element.prototype.msRequestFullscreen),document.exitFullscreen||(document.exitFullscreen=document.mozExitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen),document.fullscreenElement||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}}),Object.defineProperty(document,"fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}}))},j=V;var x=class{init(){this.FPS=60,this.snd=!1,j(),this.reset()}reset(){this.deltaTime=0,this.interval=1e3/this.FPS,this.OPP=[],this.RNG={},this.M=new L,this.S=new M,this.P=new P("player"),this.R=new R,this.F=new k;for(let t=0;t<5;t++){let e=new E(`${t}`);e.init(),this.OPP.push(e)}return this.S.init(),this.P.I.init(),this.play=!1,this.time=0,this.startGame()}t(){return Math.floor(this.time)}conditioning(t,e){switch(t){case"start":if(this.play=!0,this.play)this.M.playing(),this.lastTime=Date.now(),this.render(),this.snd&&this.S.start();else{this.sound.music.pause;return}break;case"music":return(r=>{this.snd?(this.snd=!1,r.target.classList.remove("active")):(this.snd=!0,r.target.classList.add("active"))})(e);case"credits":return window.alert("07zglossie@wp.pl");case"over":return this.reset(this.timeout);case"data-toggle-fullscreen":document.fullscreenElement?(e.target.textContent="Screen",document.exitFullscreen()):(e.target.textContent="Window",document.documentElement.requestFullscreen());break;default:}}startGame(){this.M.startSeq(),this.play=!1,this.render()}setTimeoutLoop(t){this.timeout=setTimeout(()=>{this.render()},t)}render(){let t=Date.now();this.deltaTime=t-this.lastTime;let e=Math.max(this.interval-this.deltaTime,0);this.lastTime=t+e,this.time+=1/this.FPS,this.update(),this.play&&this.setTimeoutLoop(e)}update(){this.P.update(this.FPS,this.play);for(let t=0;t<this.OPP.length;t++){let e=this.OPP[t];if(e.update(this.t(),this.P,this.FPS),e.intersect(e,this.P))return this.endGame();e.render()}this.R.update(this.P.spd(),this.interval),this.R.render(),this.F.render(this.P.dist(),this.P.spd(),this.t(),this.P.fSpd())}endGame(){this.play=!1,window.clearTimeout(this.timeout),this.snd&&this.S.stop(),this.M.endSeq()}},I=x;var g=class{constructor(){this.G=new I,this.wrap=document.body.querySelectorAll(".button")}init(){this.G.init(),this.wrap.forEach(t=>{t.addEventListener("click",e=>{this.menu(e)},!1)})}menu(t){t.cancelable&&t.preventDefault(),t.stopPropagation();let e=t.target.id?t.target.id:"data-toggle-fullscreen";if(e)return this.G.conditioning(e,t)}},T=g;var H=document.querySelector(".root");H.innerHTML=w;var W=new T;document.addEventListener("DOMContentLoaded",()=>{W.init()});})();
