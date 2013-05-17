var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 500;


drawRect(20, 20, 50, 50, "red");
drawRect(0, 20, 50, 50, "blue");
drawImage("clay-thumbs-up.jpg", 200, 200);

function drawRect(x, y, width, height, color){
	ctx.save();
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
	ctx.restore();
}

function drawImage(src, x, y){
	var img = new Image();

	img.src = src;

	img.onload = function(){
		ctx.drawImage(img, x, y);
	}
}

