function narcissistic(value) {
    let arr = value.toString().split('').map(res => +res);
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i] ** arr.length;
    }
    console.log(result === value);
    return (result === value);
}

narcissistic(7);