function inArray(array1,array2){
    var array = [];
    var obj = {};
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array2[j].indexOf(array1[i]) >= 0) {
                obj[array1[i]] = i;
            }
        }
        console.log(obj);
    }
    for(let key in obj) {
        // key.replace(/['"«»]/g, '');
        console.log(key);
        array.push(key);
        // replace(/['"«»]/g, '');
    }

    return array;
}

x = inArray([ "live","arp", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]);

console.log(x);