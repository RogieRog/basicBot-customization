// ==UserScript==
// @name           cletusLoader
// @namespace      net.cletus
// @description    Autorun cletus on plug.dj
// @author         jgm106
// @include        https://plug.dj/*
// @version        0.1
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
         console.log('cletusLoader enabled!');
         $.getScript('https://rawgit.com/RogieRog/basicBot-customization/master/extension.js');
       }
  };
  a.b();
};
var b = document.createElement('script');
b.textContent = '(' + a.toString() + ')();';
document.head.appendChild(b);


/* javascript:(function(){$.getScript('https://rawgit.com/RogieRog/basicBot-customization/master/extension.js');})(); */
