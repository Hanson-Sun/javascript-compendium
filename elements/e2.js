class E2 {
	constructor(can, list, pos, vel, radius) {
		this.list = list;
		this.list.push(this)
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;


	}
	b1() {

		this.pos = this.pos.add(this.vel.mult(timestep))

	}
	b2() {
		if (this.pos.x > canvas.width + this.radius) {
			this.pos.x = -this.radius;
		} if (this.pos.x < -this.radius) {
			this.pos.x = canvas.width + this.radius;
		} if (this.pos.y > canvas.height + this.radius) {
			this.pos.y = -this.radius;
		} if (this.pos.y < -this.radius) {
			this.pos.y = canvas.height + this.radius;
		}
	}
	
	draw() {
		c.beginPath();
		c.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
		c.stroke();
	}
	update() {
		this.b2();
		this.b1();

		this.draw();

	}
}