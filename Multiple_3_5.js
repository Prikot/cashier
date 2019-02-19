function solution(number){
    var array = [];
    var sum = 0;
    for(let i = 2; i < number; i++) {
        if(i % 15 === 0 || i % 5 === 0 || i % 3 === 0) {
            array.push(i);
        }
    }

    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

x = solution(20);
console.log(x);
