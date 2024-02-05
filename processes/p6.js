print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = 1000;
canvas.height = 1000;
const timestep = 1;

var e1 = []

var max = 40;
var min = 35;
var quantity = 100;
var maxlength = 2 * (max - min);
var repulse = 0.08;
var spin = 0.001;
var center1 = new Vector2D(500, 400);
var center2 = new Vector2D(400, 600);
var center3 = new Vector2D(550, 550);

var v = 1;


for (i = 0; i < quantity; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;
	ok = new E1(canvas, e1, center1, new Vector2D(Math.random() * v * sign, Math.random() * v * sign2), Math.random() * max + min, spin, repulse)
	ok.start = center1;

}
for (i = 0; i < quantity; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;
	ok = new E1(canvas, e1, center2, new Vector2D(Math.random() * v * sign, Math.random() * v * sign2), Math.random() * max + min, spin, repulse)
	ok.start = center2;
}
for (i = 0; i < quantity; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;
	ok = new E1(canvas, e1, center3, new Vector2D(Math.random() * v * sign, Math.random() * v * sign2), Math.random() * max + min, spin, repulse)
	ok.start = center3;
}





print(center1, center2, center3)
var radius = 300;
var radsqr = radius * radius


function animate() {
	//c.clearRect(0, 0, canvas.width, canvas.height);


	for (e of e1) {
		e.update();
		let dp = (e.pos.sub(e.start)).magsqr();
		if (dp > radsqr) {
			e.pos = e.start;
		}
		//e.draw();		
		
		for (e2 of e1) {
			if (e != e2) {
				length = (e2.pos.sub(e.pos)).mag();
				if (length <= (e2.radius + e.radius)) {
					col = ((length - 2 * min) / maxlength) * 80;
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

