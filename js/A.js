// a
let mang = prompt("Nhap mang ngan cach voi nhau bang dau ','");
let arrInt = mang.split(",");
for (const i in arrInt) {
  arrInt[i] = Number(arrInt[i]);
}

// b
console.log(arrInt);

// c
let sumChan = 0;
for (const value of arrInt) {
  if (value % 2 == 0) {
    sumChan += value;
  }
}
console.log("Tong cac so chan la: ", sumChan);

// d
let sumLe = 0;
for (const i in arrInt) {
  if (i % 2 != 0) {
    sumLe += arrInt[i];
  }
}
console.log("Tong cac phan tu le la: ", sumLe);

// e.In giá trị các phần tử trong mảng là số nguyên tố
function isNguyenTo(so) {
  for (i = 2; i <= Math.sqrt(so); i++) {
    if (so % i === 0) {
      return false;
    }
  }
  return true;
}

for (const value of arrInt) {
  if (isNguyenTo(value)) {
    console.log(value, " la so nguyen to");
  }
}

// f
let max = (min = arrInt[0]);
for (const i in arrInt) {
  if (arrInt[i] >= max) {
    max = arrInt[i];
  } else {
    min = arrInt[i];
  }
}
console.log(`Max: ${max}; Min: ${min}`);

// g
for (let i = 0; i < arrInt.length - 1; i++) {
  for (let j = i + 1; j < arrInt.length; j++) {
    if (arrInt[i] < arrInt[j]) {
      let temp = arrInt[i];
      arrInt[i] = arrInt[j];
      arrInt[j] = temp;
    }
  }
}
console.log("Mang sau khi sap xep: ", arrInt);
// console.log(arrInt.sort((a, b) => b - a));

// h
let n = Number(prompt("Nhap vao so nguyen"));
let count = 0;
for (const value of arrInt) {
  if (value == n) {
    count++;
  }
}
console.log(`${n} xuat hien ${count} lan`);


