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

export function findObjectByValue(objArr, value) {
  //added a variable to get the resault
  let res = "";
  objArr.forEach((obj) => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        if (element === value) {
          res = obj;
          break;
        }
      }
    }
  });
  return res || "not found";
}

let res = findObjectByValue([{ name: "sss" }, { name: "bob" }], "alice");
console.log(res);
