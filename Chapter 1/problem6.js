const stringCompress = (string) => {
	const string2 = [];
	let count = 1;
	string
		.toLowerCase()
		.split("")
		.forEach((str, index) => {
			if (index !== 0) {
				if (index === string.length - 1) {
					if (string[index] !== string[index - 1]) {
						string2.push(string[index - 1]);
						string2.push(count);
						string2.push(string[index]);
						string2.push(1);
					} else {
						string2.push(string[index]);
						string2.push(count + 1);
					}
				} else if (string[index] !== string[index - 1]) {
					string2.push(string[index - 1]);
					string2.push(count);
					count = 0;
				}
				count++;
			}
		});
	if (string2.length < string.length) return string2.join("");
	else return string;
};

console.log(stringCompress("aabcccccaaa"));
console.log(stringCompress("aabcccccaaad"));
console.log(stringCompress("aabcccccaaabre"));
console.log(stringCompress("aabcccccaaazzz"));
console.log(stringCompress("aaaaaaa"));
