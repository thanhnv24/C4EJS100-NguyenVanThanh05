function merge2String(st1, st2) {
    long = Math.min(st1.length, st2.length);
    newSt = "";
    for (let i = 0; i < long; i++) {
        newSt += st1[i] + st2[i];
    }
    if (st1.length > st2.length) {
        newSt += st1.substring(long);
    } else if (st1.length < st2.length) {
        newSt += st2.substring(long);
    }
    return newSt;
}

console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));