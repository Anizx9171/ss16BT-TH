// 2. Khai báo mảng 2 chiều số nguyên arrInt
// a. Nhập giá trị các phần tử của mảng từ bàn phím
// let arrInt = [];
// let x = +prompt("Nhap so phan tu cua mang");
// let y = +prompt("Nhap so phan tu cua cac mang con");
// for (let i = 0; i < x; i++) {
//     arrInt[i] = [];
//     for (let j = 0; j < y; j++) {
//         arrInt[i][j] = +prompt(`Nhap phan tu thu ${j + 1}/${y} cua mang con ${i + 1}/${x}`);
//     }
// }
// console.log(arrInt);
// // b. In giá trị các phần tử của mảng
// for (let i in arrInt) {
//     console.log("row " + i);
//     for (let j in arrInt) {
//         console.log(arrInt[i][j]);
//     }
// }
// // c. In giá trị các phần tử nằm trên đường biên (Coi mảng 2 chiều là ma
// // trận)
// for (let i = 0; i < x; i++) {
//     console.log(arrInt[0][i]);
//     console.log(arrInt[x - 1][i]);
// }
// for (let j = 0; j < y; j++) {
//     console.log(arrInt[j][0]);
//     console.log(arrInt[j][y - 1]);
// }
// d. In giá trị các phần tử nằm trên đường chéo chính và phụ
// function maTran(num) {
//     const n = num.length
//     console.log(`duong cheo chinh`);
//     for (let i = 0; i < n; i++) {
//         console.log(num[i][i]);
//     }
//     console.log(`duong cheo phu`);
//     for (let i = 0; i < n; i++) {
//         console.log(num[i][n - i - 1]);
//     }
// }
// const num = [
//     [4, 2, 3, 1],
//     [5, 8, 7, 6],
//     [11, 10, 9, 12],
//     [15, 14, 13, 16]
// ]
// maTran(num)


// // e. Sắp xếp mảng tăng dần theo dòng (không và có sử dụng hàm sort)
// function tangDan(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].sort((a, b) => a - b)
//     }
//     return arr
// }

// console.log(tangDan(num));
// // 4. Khai báo mảng một chiều 
// // a. Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt
// // và lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá
// // trị không phải là số, một chuỗi trống hoặc nhấn “Cancel”
// let arrInt = [];
// while (true) {
//     let n = Number(prompt("Nhap mot so"));
//     if (n || n == 0) {
//         arrInt.push(n);
//     } else {
//         break
//     }
// }
// // b. Tính tổng các giá trị của mảng, in ra phần tử có giá trị max - min (không và có sử dụng hàm Math.max và Math.min)
// let sum = 0;
// let max = min = arrInt[0];
// for (const value of arrInt) {
//     if (value > max) {
//         max = value
//     }
//     if (value < min) {
//         min = value
//     }
//     sum += value
// }
// console.log(`Mang da nhap: ${arrInt}`);
// console.log(`Min: ${min}; Max: ${max}; Sum: ${sum}`);
// // 1

// function inXinChao() {
//     console.log("Xin chao RA");
// }
// inXinChao()
// // 2
// function tinhBinhPhuong(number) {
//     return Math.pow(number, 2)
// }
// console.log(tinhBinhPhuong(4));
// console.log(tinhBinhPhuong(8));
// console.log(tinhBinhPhuong(0));
//   // 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ
// // thứ nhất tính từ năm 1 đến 100

// function timTheKi() {
// let nam = Number(prompt("Nhap nam"))

// if (nam % 100 === 0) {
//     console.log(`Nam ${nam} thuoc the ky ${nam / 100}`);
// } else {
//     console.log(`Nam ${nam} thuoc the ky ${Math.ceil(nam / 100)}`);
// }
// }

// // 4. Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu
// // tiên và thêm vào dấu “…” ở cuối chuỗi

// let chuoi = prompt("Nhap chuoi")

// function inChuoi(chuoi) {
//     if (chuoi.length < 15) {
//         console.log(chuoi);
//     } else {
//         chuoi = chuoi.slice(0, 15)
//         console.log(chuoi + "...");
//     }
// }
inChuoi(chuoi)
// 5. Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên. 
//Ví dụ:“rIkKEi” sau khi chuẩn hóa thành “Rikkei”
// xin chao cac ban => Xin Chao Cac Ban

let chuoi = prompt("Nhap chuoi can chuan hoa")
function chuanHoa(chuoi) {
    let chuoiRong = ""
    for (i = 0; i < chuoi.length; i++) {
        if (i == 0) {
            chuoiRong += chuoi[i].toUpperCase()
        } else if (chuoi[i] == " " && chuoi[i + 1] != " ") {
            chuoiRong += " "
            chuoiRong += chuoi[++i].toUpperCase()
            i++;
        } else {
            chuoiRong += chuoi[i].toLowerCase()
        }
    }
    return chuoiRong
}
const value = chuanHoa(chuoi)
console.log(value);
// 6. Viết function trả ra giá trị lớn nhất trong một mảng số

let arr = [3, 6, 9, 34, 67, 45]
console.log(Math.max(...arr));
