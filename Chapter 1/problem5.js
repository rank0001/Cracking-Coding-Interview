const oneAway = (string1, string2) => {
    let count = 0; //if count greater than 1 we will return false
	if (string1 === string2) return true;
	if (Math.abs(string2.length - string1.length) >= 2) return false;

	if (string1.length !== string2.length) {
		string1.length > string2.length ? (string1 = string1) : (string1 = string2);

        string1.length < string2.length ? (string2 = string1) : (string2 = string2);
        count = 1; 
	}

	let obj = {};
	string1.split("").forEach((str) => {
		obj[str] = 0;
		obj[str]++;
	});

    
	string2.split("").forEach((str) => {
		if (obj[str] === undefined) {
			count++;
		}
	});

	if (count > 1) return false;
	else return true;
};

console.log(oneAway("pale", "ple")); //true
console.log(oneAway("pales", "pale")); //true
console.log(oneAway("pale", "bale")); //true
console.log(oneAway("pale", "bake")); //false 
console.log(oneAway("pale", "bal")); //false
console.log(oneAway("bale", "pall")); //false
console.log(oneAway("bale", "aaaa")); //false
