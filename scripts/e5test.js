print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = 800;
const height = 800;
canvas.width = width;
canvas.height = height;
const timestep = 0.6;

var e5 = []

c.strokeStyle = "white";
c.fillStyle = 'rgba(0, 0, 0, 1)';

for (i = 0; i < 800; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;


	new E5(canvas, e5, new Vector2D(Math.random() * (width - 50), Math.random() * (height - 50)), new Vector2D(Math.random() * 3 * sign, Math.random() * 3 * sign2), Math.random() * 30 + 30, 0.005 * sign, 0.1)
}
function animate() {
	c.clearRect(0, 0, canvas.width, canvas.height);
	//c.fillRect(0, 0, width, height);

	c.beginPath();
	for (e of e5) {
		e.update();
		e.draw();
	}
	c.stroke();

}

setInterval(function () {
	animate();

}, 1);

