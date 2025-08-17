function sumTo(n) {
  let s = 0;
  for (let i = 1; i < n; i++) {
    s += i;
  }
  return s;
}

let sum = sumTo(3);
console.log(sum);
