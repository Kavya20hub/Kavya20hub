
let arr = [32, 0, 63, 8];
let k = 1;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (Math.abs(arr[i] - arr[j]) === k) {
            count += 1;
        }
    }
}

console.log(count);
