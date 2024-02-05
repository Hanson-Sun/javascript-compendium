print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = 900;
const height = 900;
canvas.width = width;
canvas.height = height;
const timestep = 0.2;

var e3 = []

c.strokeStyle = "white";


for (i = 0; i < 300; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;


	new E3(canvas, e3, new Vector2D(Math.random() * (width - 50), Math.random() * (height - 50)), new Vector2D(Math.random() * 3 * sign, Math.random() * 3 * sign2), Math.random() * 20 + 20, 0.004)
}
function animate() {
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.beginPath();
	for (e of e3) {
		e.update();
		e.draw();
	}
	c.stroke();
}

setInterval(function () {
	animate();

}, 1);

