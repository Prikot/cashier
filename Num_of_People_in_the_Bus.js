var number = function(busStops){
    var counter = 0;
    for(let i = 0; i < busStops.length; i++) {
        let a = busStops[i];
        counter += a[0] - a[1];
    }
    return counter;
};

console.log(number([[10,0], [3,5]]));