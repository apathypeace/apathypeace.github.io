//load soundcloud js api if needed
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://w.soundcloud.com/player/api.js';
document.head.appendChild(script);

//get the id of the player iframe or inject it using chrome
var id = 'scplayer',
    widgetIframe = document.getElementById(id),
    fixWidget = SC.Widget(widgetIframe);
fixWidget.setVolume(50); //% between 1 and 100
