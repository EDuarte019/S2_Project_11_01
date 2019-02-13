"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Evelyn Duarte
   Date: 2/9/19

*/
//the varibale thisTime is declared, then it is saved into the timeStr using the toLocaleString. To change the actual time string, you need to get the element which is defined in the "getElementById"
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;
//The varibale of thisHour and thisMonth are set so they can get the time as an interger, so the hour of the day or the month.
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
//To input an image without using HTML, you have to use the varibale imgStr and specify the type of picture. The last line of code calls the image in so it can be displayed.
var mapNum = ((2 * thisMonth + thisHour) % 24);
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);