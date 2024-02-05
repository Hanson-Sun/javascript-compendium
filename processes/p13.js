print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = 1000;
canvas.height = 600;
const timestep = 2;

var e1 = []

var max = 50;
var min = 20;
var maxlength = 2*(max - min);
var line = canvas.height/2;



for (i = 0; i < 200; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;

	origin = new Vector2D(Math.random() * (canvas.width), line)
	bruh = new E1(canvas, e1, origin, new Vector2D(Math.random() * 2 * sign, Math.random() * 2 * sign2), Math.random() * max + min, 0.08, 0.06)
	bruh.start = origin;
}
c.lineWidth = 0.1;
function animate() {
	//c.clearRect(0, 0, canvas.width, canvas.height);


	for (e of e1) {
		e.update();

		if(e.pos.y > canvas.height - min){
			e.pos = e.start;
		}else if(e.pos.y < min){
			e.pos = e.start;
		}
		//e.draw();
	}

	maxlength = 2*(max) - 2*min;
	for (e of e1) {
		for (e2 of e1) {
			if (e != e2) {
				length = (e2.pos.sub(e.pos)).mag();
				if (length <= (e2.radius + e.radius)) {
					col = ((length - 2*min) / maxlength) * 150;
					color = `rgba(${col},${col},${col},1)`;
					c.strokeStyle = color;
					//c.lineWidth = (maxlength - length) / maxlength;
					
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

