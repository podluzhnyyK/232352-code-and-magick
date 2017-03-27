'use strict';
window.renderStatistics = function (ctx, names, times) {
ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
ctx.strokeRect(100, 10, 270, 420);
ctx.fillRect(100, 10, 270, 420);
ctx.fillStyle = '#000';
ctx.font = '16px PT Mono';
ctx.fillText('Ура вы победили!', 120, 40);
ctx.fillText('Список результатов:', 120, 60);
var max = -1;
var maxIndex = -1;
for (var i = 0 ; i 
< times.length; i++) {
               var time = times[i];
               if (time > max) {
  max = time;
  maxIndex = i;
  }
  }
  function randomOpacity() {
  var opac = 0;
  opac = (Math.random());
  console.log(opac);
  }    
  var histogramWidth = 150;
  var step = histogramWidth / (-max - 0);
  ctx.fillText(Math.round(times[0]), 120, 240 + times[0] * step);
  ctx.fillText(Math.round(times[1]), 170, 240 + times[1] * step);
  ctx.fillText(Math.round(times[2]), 220, 240 + times[2] * step);
  ctx.fillText(Math.round(times[3]), 270, 240 + times[3] * step);
  ctx.fillText(names[0], 120, 280);
  ctx.fillText(names[1], 170, 280);
  ctx.fillText(names[2], 220, 280);
  ctx.fillText(names[3], 270, 280);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(120, 260, 40, times[0] * step);
  ctx.fillStyle = 'rgba(0, 21, 255, randomOpacity();)';
  ctx.fillRect(170, 260, 40, times[1] * step);
  ctx.fillRect(220, 260, 40, times[2] * step);
  ctx.fillRect(270, 260, 40, times[3] * step);
  };
