 const setFscreen = () => {
   if (!Element.prototype.requestFullscreen) {
     Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen;
   };
   if (!document.exitFullscreen) {
     document.exitFullscreen = document.mozExitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
   };
   if (!document.fullscreenElement) {
     Object.defineProperty(document, "fullscreenElement", {
       get: function () {
         return (
           document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement
         );
       },
     });
     Object.defineProperty(document, "fullscreenEnabled", {
       get: function () {
         return (
           document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
         );
       },
     });
   };
 };
 export default setFscreen