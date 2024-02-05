print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = 0.9 * width;
canvas.height = 0.9 * height;
const timestep = 0.2;

var e2 = []

c.strokeStyle = "white";

for(i = 0; i < 150;i++){
	sign = (Math.random() > 0.5) ? 1 : -1;
	sign2 = (Math.random() > 0.5) ? 1 : -1;
	new E2(canvas, e2, new Vector2D(Math.random()*width,Math.random()*height),new Vector2D(Math.random() * 3 * sign,Math.random() * 3 * sign2), Math.random()*30)
}
function animate(){
	c.clearRect(0, 0, canvas.width, canvas.height);

	for(e of e2){
		e.update();
	}

}

setInterval(function () {
	animate();

}, 1);

