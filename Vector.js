class Vector{
	static add(v1, v2){
		//addition de vecteurs
		let ans = []
		for (var i = 0; i < v1.length; i++) {
			ans.push(v1[i] + v2[i]);
		}
		return ans;
	}
	static scalarProduct(v1, v2){
		//produit scalaire
		let sum = 0;
		for (var i = 0; i < v1.length; i++) {
			sum += v1[i] * v2[i];
		}
	}
	static scale(v, c){
		//v : vector
		//c : constant
		let ans = [];
		for (var i = 0; i < v.length; i++) {
			ans.push(v[i] * c);
		}
		return ans;

	}
	static norm(v){
		let length = 0;
		v.forEach(function(entry){
			length += entry**2
		});
		return Math.sqrt(length)
	}

	static neg(v){
		return Vector.scale(v, -1);
	}

	static sub(v1, v2){
		//soustraction : v1 - v2
		return Vector.add(v1, Vector.neg(v2));
	}
}