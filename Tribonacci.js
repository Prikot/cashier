function tribonacci(signature, n){
    var array = [];
    if(n === 0) {
        return array;
    } else if(n < signature.length) {
        return array = signature.slice(0, n);
    } else {
        for(let i = 0; i < signature.length; i++) {
            array.push(signature[i]);
        }
        for(let j = signature.length; j < n; j++) {
            let next = array[j-1] + array[j-2] + array[j-3];
            array.push(next);
        }
    }
    return array;
}

x = tribonacci([1, 1, 1], 1);
console.log(x);
