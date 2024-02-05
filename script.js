print = console.log;
canvas = document.getElementById("test");
const c = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = 0.9 * width;
canvas.height = 0.9 * height;
const timestep = 0.2;

var e1 = []


for(i = 0; i < 50;i++){

	new E1(canvas, e1, new Vector2D(Math.random()*width,Math.random()*height),new Vector2D(Math.random()*3,Math.random()*3), Math.random()*30,0.2,0.1)
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


