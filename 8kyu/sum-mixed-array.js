function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i ++) {
        let char;
        char = Number (x[i]);
        sum = sum + char;
    }
    return sum
}

console.log(sumMix([1,2,3,'4',5]));


// const sumMix = [1, '2', 3, 4, 5];
// let sum = 0;
// for (let i = 0; sumMix.length > i; ++i) {
//     sum += Number (sumMix [i]);
// }
//
//
// let char = Number (sumMix[1]);
//
// console.log(char);