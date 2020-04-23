const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");
ctx.fillRect(100, 100, 100, 100, 100);
ctx.fillRect(200, 400, 600, 100, 100);
