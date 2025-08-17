export function sumTo(n) {
  let s = 0;
  for (let i = 0; i <= n; i++) {
    //added 'n -' to s to sum to n
    s += n - i;
  }
  return s;
}

export function maxOrNull(arr) {
  //changed the first index of max
  let max = arr[0];
  for (const x of arr) if (x > max) max = x;
  return arr.length ? max : null;
}

let sum = maxOrNull([-4, -2]);
console.log(sum);
