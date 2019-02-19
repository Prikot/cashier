function towerBuilder(nFloors) {
    var array = ['*'];

    if(nFloors === 1) {
        return array;
    } else if (nFloors > 1){
        for (let i = 1; i < nFloors; i++) {
            array[i] = array[i-1] + '**';
            for(let j = 0; j < i; j++) {
                array[j] = ' ' + array[j] + ' ';
            }
        }
    }
    return array;
}
console.log(towerBuilder(4));

