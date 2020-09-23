const uRlify = (string) => {
	string = string.trim().split("");

	string.forEach((str, index) => {
		if (str === " ") string[index] = "%20";
	});

	return string.join("");
};

console.log(uRlify(" I love them      "));
console.log(uRlify(" I love he        r      "));
console.log(uRlify(" I curse     them"));
console.log(uRlify(" I obey    t h em "));
console.log(uRlify("   I    love he r s o u l  "));
