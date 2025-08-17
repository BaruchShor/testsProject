export function sumTo(n) {
  let s = 0;
  for (let i = 0; i <= n; i++) {
    //added 'n -' to s to sum to n
    s += n - i;
  }
  return s;
}

let sum = sumTo("4");
console.log(sum);
