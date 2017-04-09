'use strict';
window.renderStatistics = function (ctx, names, times) {

  var histogramWidth = 150;
  var stepCoordinate = 120;
  var currentColor = '#000000';

  var drawRect = function (x1, y1, x2, y2, color) {
    ctx.fillStyle = color || '#000000';
    ctx.fillRect(x1, y1, x2, y2);
  };

  var drawText = function (text, x, y, color, font) {
    ctx.fillStyle = color || '#000';
    ctx.font = font || '16px PT Mono';
    ctx.fillText(text, x, y);
  };

  drawRect(110, 20, 270, 420, 'rgba(0, 0, 0, 0.7)');
  drawRect(100, 10, 270, 420, 'rgba(256, 256, 256, 1.0)');

  drawText('Ура вы победили!', 120, 40);
  drawText('Список результатов:', 120, 60);

  var max = -1;
  var i;
  for (i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var getRandomOpacity = function (min, max2) {
    return Math.random() * (max2 - min) + min;
  };

  var step = histogramWidth / (-max - 0);

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      currentColor = 'rgba(255, 0, 0, 1)';
    } else {
      currentColor = 'rgba(0, 21, 255,' + getRandomOpacity(0.1, 1) + ')';
    }

    drawText(Math.round(times[i]), stepCoordinate, 240 + times[i] * step);
    drawText(names[i], stepCoordinate, 280);

    drawRect(stepCoordinate, 260, 40, times[i] * step, currentColor);

    stepCoordinate += 50;
  }

};
