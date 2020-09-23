const isPerm = (string1, string2) => {
	string1 = string1.trim();
	string2 = string2.trim();

	if (string1.length !== string2.length) {
		return false;
	}
	let result1 = string1.toLowerCase().split("").sort().join("");
	let result2 = string2.toLowerCase().split("").sort().join("");

	return result1 === result2;
};

console.log(isPerm("aba", "      baa                ")); //true
console.log(isPerm("aba", "abaa")); //false
console.log(isPerm("aba", "Alj")); //false
console.log(isPerm("123", "312")); //true
console.log(isPerm("298", "982")); //true
