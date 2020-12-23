function findOppositeNumber(n, numbers) {
    let tb = n / 2;
    if (numbers < tb) {
        console.log(`${numbers}: ${ numbers + tb}`);
    } else {
        console.log(`${numbers}: ${ numbers - tb}`)
    }
}
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));
console.log(findOppositeNumber(10, 3));