// ==UserScript==
// @name           origem-woot
// @namespace      net.cletus.origem-woot
// @description    Autorun origem-woot.com plugin on plug.dj
// @author         jgm106
// @include        https://plug.dj/*
// @version        0.2
// @grant          none
// ==/UserScript==


var a = function() {
  var a = {
    b: function() {
         if (typeof API !== 'undefined' && API.enabled)
           this.c();
         else
           setTimeout(function() { a.b(); }, 100);
       },
    c: function() {
         console.log('origem-eoot enabled!');
         $.getScript('https://dl.dropboxusercontent.com/s/27y8jr4skqwb5p7/OrigemScript.js');
       }
  };
  a.b();
};
var b = document.createElement('script');
b.textContent = '(' + a.toString() + ')();';
document.head.appendChild(b);


/* FROM: http://origem-woot.com/Instalation/ */
/* javascript:(function(){$.getScript('https://dl.dropboxusercontent.com/s/27y8jr4skqwb5p7/OrigemScript.js');}()); */
