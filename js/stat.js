'use strict';
window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeRect(110, 20, 270, 420);
    ctx.fillRect(110, 20, 270, 420);
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.strokeRect(100, 10, 270, 420);
    ctx.fillRect(100, 10, 270, 420);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
    var max = -1;
    var maxIndex = -1;
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        if (time > max) {
            max = time;
            maxIndex = i;
        }
    }

    function getRandomOpacity(min, max) {
        return Math.random() * (max - min) + min;
    }
    var histogramWidth = 150;
    var step = histogramWidth / (-max - 0);
    var stepCoordinate = 120;

    for (var i = 0; i < times.length; i++) {
        names[i] === "Вы" ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(0, 21, 255,' + getRandomOpacity(0.1, 1); + '';
        ctx.fillText(Math.round(times[i]), stepCoordinate, 240 + times[i] * step);
        ctx.fillText(names[i], stepCoordinate, 280);
        ctx.fillRect(stepCoordinate, 260, 40, times[i] * step);
        stepCoordinate += 50;
    }

};
