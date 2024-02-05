class E3a {
	constructor(can, list, pos, vel, length, rot, repulse) {
		this.list = list;
		this.list.push(this)
		this.pos = pos;
		this.vel = vel;
		this.length = length;
		this.rot = rot;
		this.repulse = repulse

	}
	b1() {
		this.pos = this.pos.add(this.vel.mult(timestep))
	}
	b2() {
		if (this.pos.x > canvas.width + this.length) {
			this.pos.x = -this.length;
		} if (this.pos.x < -this.length) {
			this.pos.x = canvas.width + this.length;
		} if (this.pos.y > canvas.height + this.length) {
			this.pos.y = -this.length;
		} if (this.pos.y < -this.length) {
			this.pos.y = canvas.height + this.length;
		}
	}
	b3() {

		for (let line of this.list) {
			if (line !== this) {
				this.findPoints();
				line.findPoints();
				let t = ((this.end1.x - line.end1.x) * (line.end1.y - line.end2.y) - (this.end1.y - line.end1.y) * (line.end1.x - line.end2.x)) / ((this.end1.x - this.end2.x) * (line.end1.y - line.end2.y) - (this.end1.y - this.end2.y) * (line.end1.x - line.end2.x));
				let u = ((this.end2.x - this.end1.x) * (this.end1.y - line.end1.y) - (this.end2.y - this.end1.y) * (this.end1.x - line.end1.x)) / ((this.end1.x - this.end2.x) * (line.end1.y - line.end2.y) - (this.end1.y - this.end2.y) * (line.end1.x - line.end2.x))
				if (t <= 1 && t >= 0 && u <= 1 && u >= 0) {
					let theta = this.rot * timestep
					let x = this.vel.x * Math.cos(theta) - this.vel.y * Math.sin(theta)
					let y = this.vel.x * Math.sin(theta) + this.vel.y * Math.cos(theta)
					this.vel.x = x;
					this.vel.y = y;

					theta = line.rot * timestep
					x = line.vel.x * Math.cos(theta) - line.vel.y * Math.sin(theta)
					y = line.vel.x * Math.sin(theta) + line.vel.y * Math.cos(theta)
					line.vel.x = x;
					line.vel.y = y;
				}
			}
		}
	}
	b4() {

		for (let line of this.list) {
			if (line !== this) {
				this.findPoints();
				line.findPoints();
				let t = ((this.end1.x - line.end1.x) * (line.end1.y - line.end2.y) - (this.end1.y - line.end1.y) * (line.end1.x - line.end2.x)) / ((this.end1.x - this.end2.x) * (line.end1.y - line.end2.y) - (this.end1.y - this.end2.y) * (line.end1.x - line.end2.x));
				let u = ((this.end2.x - this.end1.x) * (this.end1.y - line.end1.y) - (this.end2.y - this.end1.y) * (this.end1.x - line.end1.x)) / ((this.end1.x - this.end2.x) * (line.end1.y - line.end2.y) - (this.end1.y - this.end2.y) * (line.end1.x - line.end2.x))
				if (t <= 1 && t >= 0 && u <= 1 && u >= 0) {
					this.posdiff1 = this.pos.sub(line.pos);
					let pdu = this.posdiff1.normalize();
					let r = pdu.mult(this.repulse);

					this.pos = this.pos.add(r.mult(timestep));
					line.pos = line.pos.sub(r.mult(timestep));
					// this.vel = this.vel.add(r.mult(timestep));
					// line.vel = line.vel.sub(r.mult(timestep));
				}
			}
		}

	}
	findPoints() {
		this.dir = this.vel.normalize();
		this.halflen = this.dir.mult(this.length)
		this.end1 = this.pos.sub(this.halflen);
		this.end2 = this.pos.add(this.halflen);
	}
	draw() {
		this.findPoints();

		c.beginPath();
		c.moveTo(this.end1.x, this.end1.y);
		c.lineTo(this.end2.x, this.end2.y);
		c.strokeStyle = "white";
		c.stroke();
	}
	update() {
		this.b2();
		this.b3();
		this.b1();
		this.b4();

		this.draw();

	}
}