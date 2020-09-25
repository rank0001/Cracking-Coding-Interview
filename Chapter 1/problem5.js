const oneAway = (string1, string2) => {
	if (string1 === string2) return true;
	if (Math.abs(string2.length - string1.length) >= 2) return false;

	if (string1.length !== string2.length) {
		string1 = string1.length > string2.length ? string1 : string2;
		string2 = string1.length < string2.length ? string1 : string2;
	}

	string1 = string1.toLowerCase().split("");
	string2 = string2.toLowerCase().split("");
	//when the strings are equal
	if (string1.length === string2.length) {
		let count = 0; //if count more than 1 we return false
		string2.forEach((str, index) => {
			if (str !== string1[index]) count++;
		});

		if (count > 1) return false;
		else return true;
	} else {
		let count = 0; //if count more than 1 we return false
		let i = 0,j=0;
		while (string1[j] !== undefined) {
			if(string2[i]!==string1[j]){
				count++;
				j++;
				
			} 
			else{
				i++;
				j++;
			}
		} 
		if (count > 1) return false;
		else return true;
	}
};

console.log(oneAway("ple", "pale")); //true
console.log(oneAway("pales", "pale")); //true
console.log(oneAway("pale", "bale")); //true
console.log(oneAway("pale", "bake")); //false
console.log(oneAway("pale", "bal")); //false
console.log(oneAway("bale", "pall")); //false
console.log(oneAway("bjle", "bale")); //true

