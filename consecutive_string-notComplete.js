function longestConsec(strarr, k) {
    var str = '';
    var array = [];
    if(k < 0 || k > strarr.length) return str;

    for(let j = 0; j < k; j++) {
        if(strarr[j] > strarr[j+1]) {
            array[j] = strarr[j];
        } else {
            array[j] = strarr[j+1]
        }
    }
    // console.log(array);
    for(let i = 0; i < strarr.length; i++) {
        for(let j = 0; j < k; j++) {
            if(strarr[i].length > array[j].length) {
                array[j] = strarr[i];
                break;
                // i--;
                // console.log(array);
            }

        }
    }
    for(let i = 0; i < k; i++) {
        str += array[i];
    }
    return str;
}

x = longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3);
console.log(x);