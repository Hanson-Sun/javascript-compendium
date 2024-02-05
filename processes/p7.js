print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = 800;
const height = 800;
canvas.width = width;
canvas.height = height;
const timestep = 0.2;

var e1 = []

var max = 50;
var min = 30;
var quantity = 300;
var maxlength = 2 * (max - min);


for (i = 0; i < quantity; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;


	new E1(canvas, e1, new Vector2D(Math.random() * (width - 50), Math.random() * (height - 50)), new Vector2D(Math.random() * 3 * sign, Math.random() * 3 * sign2), Math.random() * max + min, 0.009, 1)
}




function animate() {
	//c.clearRect(0, 0, canvas.width, canvas.height);

	for (e of e1) {
		e.update();
		c.strokeStyle = "black";
		c.fillStyle = "white";
		//e.draw();
		c.beginPath();
		c.arc(e.pos.x, e.pos.y, e.radius, 0, Math.PI * 2, false);
		c.stroke();

		c.beginPath();
		c.arc(e.pos.x, e.pos.y, 1, 0, Math.PI * 2, false);
		c.fill();
		for (e2 of e1) {
			if (e != e2) {
				length = (e2.pos.sub(e.pos)).mag();
				if (length <= (e2.radius + e.radius)) {
					col = (1-((length - 2 * min) / maxlength)) * 250;
					color = `rgba(${col},${col},${col},1)`;
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

}, 1);

