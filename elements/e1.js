class E1 {
	constructor(can, list, pos, vel, radius, rot, repulse) {
		this.list = list;
		this.list.push(this)
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.rot = rot;
		this.repulse = repulse

	}
	b1() {

		this.pos = this.pos.add(this.vel.mult(timestep))
		// this.pos.x = this.pos.x + this.vel.x * timestep;
		// this.pos.y = this.pos.y + this.vel.y * timestep;

	}
	b2() {
		if (this.pos.x > canvas.width) {
			this.vel.x *= -1;
			this.pos.x = canvas.width;
		} if (this.pos.x < 0) {
			this.vel.x *= -1;
			this.pos.x = 0;
		} if (this.pos.y > canvas.height) {
			this.vel.y *= -1;
			this.pos.y = canvas.height
		} if (this.pos.y < 0) {
			this.vel.y *= -1;
			this.pos.y = 0;
		}
	}
	b3() {
		for (let circ of this.list) {
			if (circ !== this) {
				this.posdiff1 = this.pos.sub(circ.pos);
				if (this.posdiff1.magsqr() <= (this.radius + circ.radius) * (this.radius + circ.radius)) {
					let theta = this.rot * timestep
					let ct = Math.cos(theta);
					let st = Math.sin(theta);
					let x = this.vel.x * ct - this.vel.y * st
					let y = this.vel.x * st + this.vel.y * ct
					this.vel.x = x;
					this.vel.y = y;

					theta = circ.rot * timestep
					ct = Math.cos(theta);
					st = Math.sin(theta);
					x = circ.vel.x * ct - circ.vel.y * st
					y = circ.vel.x * st + circ.vel.y * ct
					circ.vel.x = x;
					circ.vel.y = y;
				}
			}
		}
	}
	b4() {
		for (let circ of this.list) {
			if (circ != this) {
				this.posdiff1 = this.pos.sub(circ.pos);
				if (this.posdiff1.magsqr() <= (this.radius + circ.radius) * (this.radius + circ.radius)) {
					// let pdu = this.posdiff1.normalize();
					// let r = pdu.mult(this.repulse);

					let r = this.posdiff1.resize(this.repulse * timestep);

					this.pos = this.pos.add(r);
					circ.pos = circ.pos.sub(r);
					// this.vel = this.vel.add(r.mult(timestep));
					// circ.vel = circ.vel.sub(r.mult(timestep));
					
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
		this.b4();

		//this.draw();

	}
}