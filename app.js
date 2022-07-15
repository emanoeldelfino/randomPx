var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
    for (var i = 0; i < imgData.data.length; i += 4) {
        // let num = randomInt(0, 1) * 255;
        // imgData.data[i] = num;
        // imgData.data[i + 1] = num;
        // imgData.data[i + 2] = num;

        imgData.data[i] = randomInt(0, 255);
        imgData.data[i + 1] = randomInt(0, 255);
        imgData.data[i + 2] = randomInt(0, 255);
        imgData.data[i + 3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
}, 1);
