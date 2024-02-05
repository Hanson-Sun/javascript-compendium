print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = 1000;
canvas.height = 1000;
const timestep = 1;

var e1 = []
//1.5, 50, 10, 0.05, 0.08

var max = 50;
var min = 10;
var maxlength = 2*(max - min);
var center = new Vector2D(canvas.width/2,canvas.height/2);


for (i = 0; i < 300; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;


	new E1(canvas, e1, center, new Vector2D(Math.random() * 2 * sign, Math.random() * 2 * sign2), Math.random() * max + min, 0.05, 0.05)
}





print(center)
var radius = 600;
var radsqr = radius * radius


function animate() {
	//c.clearRect(0, 0, canvas.width, canvas.height);


	for (e of e1) {
		e.update();
		let dp = (e.pos.sub(center)).magsqr();
		if(dp > radsqr){
			e.pos = center;
		}
		//e.draw();
	}

	maxlength = 2*(max) - 2*min;
	for (e of e1) {
		for (e2 of e1) {
			if (e != e2) {
				length = (e2.pos.sub(e.pos)).mag();
				if (length <= (e2.radius + e.radius)) {
					col = ((length - 2*min) / maxlength) * 200;
					color = `rgba(${col},${col},${col},0.9)`;
					c.strokeStyle = color;
					//c.lineWidth = (maxlength - length) / maxlength;
					c.lineWidth = 0.1;
					c.beginPath();
					c.moveTo(e.pos.x, e.pos.y);
					c.lineTo(e2.pos.x, e2.pos.y);
					c.stroke();
				}
			}
		}
	}

}

setInterval(function () {
	animate();

}, 10);

