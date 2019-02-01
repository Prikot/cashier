function isTriangle(a,b,c){
    return (a < b + c) && (b < a + c) && (c < b + a);
}

console.log(isTriangle(1,2,2));
console.log(isTriangle(7,2,2));