const palPerm = (string) => {
    let obj= {};
    let count = 0;//checking for the odd character condition
    let check = true;

    string.toLowerCase().split('').forEach(str=>{
        if(str!==' '){
            if(obj[str]===undefined)
                obj[str] = 0;
            obj[str]++;
        }
    }) 
    Object.keys(obj).forEach(key=>{
        if(obj[key]%2!==0){
            if(count>1){
                check = false;
                return;
            }
            count++;
        }
    })
    return check;
};

console.log(palPerm('Tact Coa'));//true
console.log(palPerm('baiab ibaba cosco'))//true
console.log(palPerm('Tact boa'));//false
console.log(palPerm('aabbcadad'));//true