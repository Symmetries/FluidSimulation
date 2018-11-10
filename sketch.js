let numberParticles = 10;
let listParticles = [];
let listNeighBors = [];//List<List<int>> the ints will represent the index in the listPartices of the neightbor
let gravity = 9.8;//some constant that works with out units (so not 9.8)
let particlesRadius = 2;
let neighborDist = 10;

function setup() {
  createCanvas(400, 400);
  //initLists();
}

function initListParticles(){

	//random position over all of the window (init -> listParticles)
	for(let i = 0; i<numberParticles; i++){
		let done = false;
		let pos = []
		while(!done){//
			pos = pos[Math.floor(Math.random() * windowWidth), Math.floor(Math.random() * windowHeight)]
			temp_part = new Particle(pos, [], particlesRadius);

			done = true;
			//change this later to a foreach
			for(let j = 0; j<listParticles.length; j++){
				if (temp_part.collisionTest(listParticles[i])){
					done = false;
				}
			}
			if(done){
				listParticles.push(temp_part);
			}
		}
	}

	//init -> listNeighBors
	findNeighBors();
}
function findNeighBors(){
	for(let i = 0; i<numberParticles; i++){
		listNeighBors.push([])
		//If A is the neighbor of B, then we don't have to recompute if B is the neighbor of A
		for(let j = 0; j<i ;j++){
			if(listNeighBors[j].includes(i)){
				listNeighBors[i].push(j);
			}
		}
		//for those that we don't know we have to see if they are neighbors
		for(let j = i+1; j<numberParticles; j++){
			if(listParticles[i].areNeighBors(neighborDist, listParticles[j])){
				listNeighBors[i].push(j)
			}
		}
	}
}
function doubleDensityRelaxation(){
	//TODO
}


function draw() {
  background(220);
  listParticles.forEach(particle =>{
  	particle.applyExternalForces();
  	particle.applyViscosity(listNeighBors[listParticles.indexOf(particle)]);
  	particle.advanceParticles();
  });
  findNeighBors();
  doubleDensityRelaxation();
  //Resolve Collisions
  //Update Velocity()

}