class Particle{
	//The particles I am making them to be a circle
	constructor(pos, vel, radius){
		this.pos = pos; //the current position of the particle
		this.pos_prev = [] //The previous position of the particle
		this.vel = vel;
		this.radius = radius;
	}
	render(){
		push();
		translate(this.pos[0], this.pos[1]);
		circle(this.radius);
		pop();
	}
	areNeighBors(rangeDist, other){
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

}