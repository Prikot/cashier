function fib(n) {
    if(n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

function allFib(n) {
    var array = [];
    for (let i = 1; i < n; i++) {
        array.push(fib(i));
    }
    return array;
}

console.log(allFib(10));