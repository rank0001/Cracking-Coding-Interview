//O(n^2) implementation
// const isUnique = (string) => {
// 	let check = false;
// 	for (let i = 0; i < string.length; i++) {
// 		for (let j = i + 1; j < string.length; j++) {
// 			if (string[i] === string[j]) {
// 				check = true;
// 				break;
// 			}
// 		}
// 	}
// 	check === false
// 		? console.log(`for ${string} it is unique`)
// 		: console.log(`for ${string} it is not unique`);
// };

//O(n) solution
const isUnique = (string)=>{
    let obj={};
    let check = false;
    for(let i=0;i<string.length;i++){
        if(obj[string[i]]!==undefined){
            check = true;
            break;
        }
        obj[string[i]] = i;
    }

    check === false
		? console.log(`for ${string} it is unique`)
 		: console.log(`for ${string} it is not unique`);
}

isUnique("44");
isUnique("132");
isUnique("131");
isUnique("117");
isUnique("4535");
isUnique("24689");
