'use strict';
window.renderStatistics = function(ctx, names, times) {
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

    function getRandomOpacity() {
        return Math.round(Math.random());
    }
    var histogramWidth = 150;
    var step = histogramWidth / (-max - 0);
    var listCoordinate = [120, 170, 220, 270];


    for (var i = 0; i < times.length; i++) {
        ctx.fillText(Math.round(times[i]), listCoordinate[i], 240 + times[i] * step);
    }


    for (var i = 0; i < names.length; i++) {
        ctx.fillText(names[i], listCoordinate[i], 280);
    }

    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(120, 260, 40, times[0] * step);
    ctx.fillStyle = 'rgba(0, 21, 255, getRandomOpacity())';
    ctx.fillRect(170, 260, 40, times[1] * step);
    ctx.fillRect(220, 260, 40, times[2] * step);
    ctx.fillRect(270, 260, 40, times[3] * step);
};