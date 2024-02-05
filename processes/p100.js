print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = 800;
const height = 800;
canvas.width = width;
canvas.height = height;
const timestep = 0.01;

var e5 = []


for (i = 0; i < 60; i++) {
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;


	new E5(canvas, e5, new Vector2D(Math.random() * (width - 50), Math.random() * (height - 50)), new Vector2D(Math.random() * 3 * sign, Math.random() * 3 * sign2), 100, 0.01 * sign, 0.1)
}

var maxlength = 50 * 50;


c.lineWidth = 2;
c.fillStyle = 'rgba(0, 0, 0, 1)';
function animate() {
	//c.clearRect(0, 0, canvas.width, canvas.height);
	//c.fillRect(0, 0, width, height);

	for(line of e5){
		for(ee of e5){
			if(ee != line){
				//this.findPoints();
				line.findPoints();
				let t = ((ee.end1.x - line.end1.x) * (line.end1.y - line.end2.y) - (ee.end1.y - line.end1.y) * (line.end1.x - line.end2.x)) / ((ee.end1.x - ee.end2.x) * (line.end1.y - line.end2.y) - (ee.end1.y - ee.end2.y) * (line.end1.x - line.end2.x));
				let u = ((ee.end2.x - ee.end1.x) * (ee.end1.y - line.end1.y) - (ee.end2.y - ee.end1.y) * (ee.end1.x - line.end1.x)) / ((ee.end1.x - ee.end2.x) * (line.end1.y - line.end2.y) - (ee.end1.y - ee.end2.y) * (line.end1.x - line.end2.x))
				if (t < 1 && t > 0 && u < 1 && u > 0) {
					let angle = ee.vel.findAngle(line.vel)
					let theta = angle * 0.5 * ee.attract * timestep

					let ct = Math.cos(theta);
					let st = Math.sin(theta);
					let x = ee.vel.x * ct - ee.vel.y * st
					let y = ee.vel.x * st + ee.vel.y * ct
					ee.vel.x = x;
					ee.vel.y = y;

					x = line.vel.x * ct + line.vel.y * st
					y = line.vel.y * ct - line.vel.x * st
					line.vel.x = x;
					line.vel.y = y;
					//draw something it collides
					c.strokeStyle = "white";

				
				}else{
					c.strokeStyle = "black";
				}		


			}

		}
		c.beginPath();
		line.update();
		line.draw();
		ee.update();
		ee.draw();	
		c.stroke();

	}

		// c.beginPath();
		// for (e of e5) {
		// 	e.update();
		// 	e.draw();
		// }
		// c.stroke();

}

setInterval(function () {
	animate();

}, 1);
