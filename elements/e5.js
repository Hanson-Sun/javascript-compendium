class E5 {
	constructor(can, list, pos, vel, length, rot, attract, isColourChange = false, colour = "white") {
		this.list = list;
		this.list.push(this)
		this.pos = pos;
		this.vel = vel;
		this.length = length;
		this.rot = rot;
		this.attract = attract;
		this.collide = false;
		this.end1 = new Vector2D(this.pos.x - (this.length * this.vel.x / Math.sqrt(this.vel.magsqr())), this.pos.y - (this.length * this.vel.y / Math.sqrt(this.vel.magsqr())));
		this.end2 = new Vector2D(this.pos.x + (this.length * this.vel.x / Math.sqrt(this.vel.magsqr())), this.pos.y + (this.length * this.vel.y / Math.sqrt(this.vel.magsqr())));
		this.colour = colour;
		this.isColourChange = isColourChange;
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
				//this.findPoints();
				line.findPoints();
				let t = ((this.end1.x - line.end1.x) * (line.end1.y - line.end2.y) - (this.end1.y - line.end1.y) * (line.end1.x - line.end2.x)) / ((this.end1.x - this.end2.x) * (line.end1.y - line.end2.y) - (this.end1.y - this.end2.y) * (line.end1.x - line.end2.x));
				let u = ((this.end2.x - this.end1.x) * (this.end1.y - line.end1.y) - (this.end2.y - this.end1.y) * (this.end1.x - line.end1.x)) / ((this.end1.x - this.end2.x) * (line.end1.y - line.end2.y) - (this.end1.y - this.end2.y) * (line.end1.x - line.end2.x))
				if (t < 1 && t > 0 && u < 1 && u > 0) {
					let angle = this.vel.findAngle(line.vel)
					let theta = angle * 0.5 * this.attract * timestep

					let ct = Math.cos(theta);
					let st = Math.sin(theta);
					let x = this.vel.x * ct - this.vel.y * st
					let y = this.vel.x * st + this.vel.y * ct
					this.vel.x = x;
					this.vel.y = y;

					x = line.vel.x * ct + line.vel.y * st
					y = line.vel.y * ct - line.vel.x * st
					line.vel.x = x;
					line.vel.y = y;
					this.collide = true;
				}else{
					this.collide = false;
				}
			}
		}
	}
	b4() {

		if (!this.collide) {

			let theta = this.rot * timestep;
			let ct = Math.cos(theta);
			let st = Math.sin(theta);
			let x = this.vel.x * ct - this.vel.y * st;
			let y = this.vel.x * st + this.vel.y * ct;
			this.vel.x = x;
			this.vel.y = y;
		}

	}
	findPoints() {

		let velmag = Math.sqrt(this.vel.magsqr());
		let dx = this.length * this.vel.x / velmag;
		let dy = this.length * this.vel.y / velmag;
		//this.dir = this.vel.normalize();
		// this.halflen = this.dir.mult(this.length)
		// this.end1 = this.pos.sub(this.halflen);
		// this.end2 = this.pos.add(this.halflen);
		this.end1 = new Vector2D(this.pos.x - dx, this.pos.y - dy);
		this.end2 = new Vector2D(this.pos.x + dx, this.pos.y + dy);
	}
	draw() {
		//this.findPoints();
		if(this.isColourChange == true){
			c.strokeStyle = this.colour;
		}
		c.moveTo(this.end1.x, this.end1.y);
		c.lineTo(this.end2.x, this.end2.y);	
		
	}
	update() {
		this.findPoints();
		this.b2();
		this.b3();
		this.b1();
		this.b4();

		//this.draw();

	}
}