!function e(t,r,n){function o(i,a){if(!r[i]){if(!t[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(u)return u(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=r[i]={exports:{}};t[i][0].call(s.exports,function(e){var r=t[i][1][e];return o(r||e)},s,s.exports,e,t,r,n)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){function n(e){this.skin=e}n.prototype.leapYear=function(e){return e%4==0&&e%100!=0||e%400==0},r.calendarModule=n},{}],2:[function(e,t,r){var n=e("./../js/scripts.js").calendarModule;$(document).ready(function(){$("form#leap-year").submit(function(e){e.preventDefault();var t=parseInt($("input#year").val()),r=new n("blue moon").leapYear(t);$(".year").text(t),r?$(".not").text(""):$(".not").text("not"),$("#result").show()})}),$(document).ready(function(){$("#time").text(moment())})},{"./../js/scripts.js":1}]},{},[2]);