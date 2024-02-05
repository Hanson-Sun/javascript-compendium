print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = 0.9 * width;
canvas.height = 0.9 * height;
const timestep = 0.2;

var e1 = []

c.strokeStyle = "white";

for(i = 0; i < 120;i++){

	new E4(canvas, e1, new Vector2D(Math.random()*width,Math.random()*height),new Vector2D(Math.random()*3,Math.random()*3), Math.random()*40,0.2)
}
function animate(){
	c.clearRect(0, 0, canvas.width, canvas.height);

	for(e of e1){
		e.update();
	}

}

setInterval(function () {
	animate();

}, 1);

