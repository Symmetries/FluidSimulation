class Particle{
	//The particles I am making them to be a circle
	constructor(pos, vel, radius){
		this.pos = pos; //the current position of the particle
		this.pos_prev = []; //The previous position of the particle
		this.vel = vel;
		this.radius = radius;

	}
	addVect(vect1, vect2){

	}
	render(){
		push();
		translate(this.pos[0], this.pos[1]);
		circle(this.radius);
		pop();
	}
	areNeighBors(rangeDist, other){
		//TODO : change the use of the rangeDist -> the vel of the element
		let dist = this.getDist(other)
		return (rangeDist <= dist)
	}

	collisionWall(walls){
		//TODO
	}

	getDist(other){
		return Math.sqrt((this.pos[0] - other.pos[0])**2 + (this.pos[1] - other.pos[1])**2)//The distance between them
	}
	collisionTest(other){
		let dist = this.getDist(other)
		return (dist <= this.radius + other.radius)
	}

	applyExternalForces(gravity){
		this.vel += gravity;
		//add the forces from the input (TODO later)
	}
	applyViscosity(neighbor, timeStep, alpha, beta){
		let v = Vector.sub(neighbor.pos, this.pos);
		let vel_inward = Vector.scalarProduct(Vector.sub(this.vel, neighbor.vel), v);
		if(vel_inward > 0){
			let length = Vector.norm(v);
			vel_inward /= length;
			v /= length
			let q = length/this.radius;//make radius into a static variable
			let impulse = Vector.scale(v,0.5 * timeStep * (1-q) * (alpha*vel_inward + beta * vel_inward**2))
			this.vel = Vector.sub(this.vel, impulse);
		}	

	}



	advanceParticles(timeStep){
		this.pos_prev = this.pos.slice();
		this.pos = timeStep * this.vel;
	}
	resolveCollisions(){
		//TODO
	}

}