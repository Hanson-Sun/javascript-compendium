class E4 {
	constructor(can, list, pos, vel, radius, rot) {
		this.list = list;
		this.list.push(this)
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.rot = rot;


	}
	b1() {

		this.pos = this.pos.add(this.vel.mult(timestep))

	}
	b2() {
		if (this.pos.x > canvas.width - this.radius) {
			this.vel.x *= -1;
			this.pos.x = canvas.width - this.radius;
		} if (this.pos.x < this.radius) {
			this.vel.x *= -1;
			this.pos.x = this.radius;
		} if (this.pos.y > canvas.height - this.radius) {
			this.vel.y *= -1;
			this.pos.y = canvas.height - this.radius
		} if (this.pos.y < this.radius) {
			this.vel.y *= -1;
			this.pos.y = this.radius;
		}
	}
	b3() {
		for (let circ of this.list) {
			if (circ !== this) {
				this.posdiff1 = this.pos.sub(circ.pos);
				if (this.posdiff1.magsqr() <= (this.radius + circ.radius) * (this.radius + circ.radius)) {
					let theta = this.rot * timestep
					let x = this.vel.x * Math.cos(theta) - this.vel.y * Math.sin(theta)
					let y = this.vel.x * Math.sin(theta) + this.vel.y * Math.cos(theta)
					this.vel.x = x;
					this.vel.y = y;

					theta = circ.rot * timestep
					x = circ.vel.x * Math.cos(theta) - circ.vel.y * Math.sin(theta)
					y = circ.vel.x * Math.sin(theta) + circ.vel.y * Math.cos(theta)
					circ.vel.x = x;
					circ.vel.y = y;
				}
			}
		}
	}

	draw() {
		c.beginPath();
		c.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
		c.stroke();
	}
	update() {
		this.b2();
		this.b3();
		this.b1();

		this.draw();

	}
}