print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = 0.9 * width;
canvas.height = 0.9 * height;
const timestep = 0.6;

var e1 = []


for (i = 0; i < 290; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;


	new E1(canvas, e1, new Vector2D(Math.random() * (width - 50), Math.random() * (height - 50)), new Vector2D(Math.random() * 3 * sign, Math.random() * 3 * sign2), Math.random() * 50 + 30, 0.009, 1)
}

var maxlength = 50 * 50;


function animate() {
	//c.clearRect(0, 0, canvas.width, canvas.height);

	for (e of e1) {
		e.update();
		//e.draw();
	}

	// for (e of e1) {
	// 	for (e2 of e1) {
	// 		if (e != e2) {
	// 			length = (e2.pos.sub(e.pos)).magsqr();
	// 			if (length < maxlength) {


	// 				color = "rgba(255,255,255," + (maxlength - length) / maxlength * 0.01 + ")";
	// 				c.strokeStyle = color;
	// 				//c.lineWidth = (maxlength - length) / maxlength;
	// 				c.beginPath();
	// 				c.moveTo(e.pos.x, e.pos.y);
	// 				c.lineTo(e2.pos.x, e2.pos.y);
	// 				c.stroke();
	// 			}
	// 		}
	// 	}
	// }
	maxlength = 2*(50) - 60;
	for (e of e1) {
		for (e2 of e1) {
			if (e != e2) {
				length = (e2.pos.sub(e.pos)).mag();
				if (length <= (e2.radius + e.radius)) {
					col = ((length - 60) / maxlength) * 100
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

