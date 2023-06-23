// bai1
// debugger;
// let ar = [];
// let state = true;
// while (state) {
//   let input = Number(prompt("nhap so bat ki (khac 0): "));
//   ar.push(input);
//   if (input == 0) {
//     state = false;
//   }
// }
// let sum_chan = 0;
// let sum_le = 0;
// for (let index = 0; index <= ar.length; index++) {
//   if (ar[index] % 2 == 0) {
//     sum_chan = sum_chan + ar[index];
//   } else if (ar[index] % 2 != 0) {
//     sum_le = sum_le + ar[index];
//   }
// }

// console.log(ar);
// console.log("tong cua so chan la: ", sum_chan);
// console.log("tong cua so le la: ", sum_le);

// bai2 ok
// let ar = [];
// let state = true;
// while (state) {
//   let input = Number(prompt("nhap so bat ki (khac 0): "));
//   ar.push(input);
//   if (input == 0) {
//     state = false;
//   }
// }
// let max = ar[0];
// let min = ar[0];
// for (let index = 0; index < ar.length; index++) {
//   if (ar[index] > max) {
//     max = ar[index];
//   } else if (ar[index] < min) {
//     min = ar[index];
//   }
// }
// console.log(ar);
// console.log("max = ", max);
// console.log("min = ", min);

// bai3
// let ar = [];
// let state = true;
// while (state) {
//   let input = Number(prompt("nhap so bat ki (khac 0): "));
//   ar.push(input);
//   if (input == 0) {
//     state = false;
//   }
// }
// console.log(ar);
// // c1
// // console.log(ar.sort());
// // c2
// for (let i = 0; i < ar.length; i++) {
//   let min_ar = i;
//   for (let j = i + 1; j < ar.length; i++) {
//     if (ar[j] < ar[min_ar]) {
//       min_ar == ar[j];
//     }
//   }
//   let temp = ar[i];
//   ar[i] = ar[min_ar];
//   ar[min_ar] = temp;
// }
// console.log("sau khi hoan doi la : ", ar);

// bai4 ok
// let ar = [2, 5, 8, 2, 1, 3, 1, 2];
// let num1 = 1;
// let num2 = 0;
// let iteam;
// for (let i = 0; i < ar.length; i++) {
//   for (let j = i; j < ar.length; j++) {
//     if (ar[i] == ar[j]) {
//       num2++;
//     }
//     if (num1 < num2) {
//       num1 = num2;
//       iteam = ar[i];
//     }
//   }
// }
// console.log("gia tri bi lap lai nhieu nhat la:", iteam);

// bai5
// let todoList = ["Go to school at 7 am", "Read book at 12 am"];
// input = prompt("nhap vao 5 chu cai C/R/U/D/E: ");
// let state = true;
// while (state) {
//   if (input == "C") {
//     input2 = prompt("nhập vào nội dung công việc mới");
//     todoList.unshift(input2);
//     console.log(todoList);
//   } else if (input == "R") {
//     for (let index = 0; index < todoList.length; index++) {
//       console.log(`${i + 1}.${todoList[i][0]} :${todoList[i][1]}`);
//     }
//   } else if (input == "U") {
//     input3 = Number(prompt("vị trị của công việc muốn cập nhật la:"));
//     input4 = prompt("nhập nội dung muốn update");
//     todoList.splice(input3, 0, input4);
//     console.log(todoList);
//   } else if (input == "D") {
//     input5 = Number(prompt("vị trị của công việc muốn xóa: "));
//     todoList.splice(input5, 1);
//     console.log(todoList);
//   } else if (input == "E") {
//     state = false;
//   }
// }

// bai6
// let store = ["Laptop", "Keyboard", " Mouse", "PC"];
// let cart = [
//   ["Laptop", 0],
//   ["Keyboard", 0],
//   ["Mouse", 0],
//   ["PC", 0],
// ];
// for (let index = 0; index < cart.length; index++) {
//   console.log("gio hang cua ban co: ", cart[index]);
// }
// input = prompt("nhap vao 5 chu cai C/R/U/D/E: ");
// let state = true;
// while (state) {
//   if (input == "C") {
//     let input2 = prompt("nhập vào đồ dùng muốn mua");
//     let checkstore = -1;
//     for (let i = 0; i < store.length; i++) {
//       if (input2 == store[i]) {
//         checkstore = i;
//       } else {
//         console.log("do muon mua khong co trong cua hang");
//       }
//       if (checkstore != -1) {
//         let checkcart = -1;
//         for (let i = 0; i < cart.length; i++) {
//           if (input2 == cart[i][0]) {
//             checkcart = i;
//           }
//         }
//       }
//       let checkcart = -1;

//       if (checkcart != -1) {
//         cart[checkcart][1]++;
//         console.log(cart);
//       }
//       console.log("gio hang hien tai la: ", cart);
//     }
//   } else if (input == "R") {
//     for (let index = 0; index < cart.length; index++) {
//       console.log(`${i + 1}.${cart[i][0]}:${cart[i][1]}`);
//     }
//   } else if (input == "U") {
//     let input3 = Number(prompt("vi tri muon update:"));
//     let input4 = Number(prompt("nhap vao so luong update "));
//     cart[input3 - 1][1] = input4;
//     console.log("gio hang hien tai la");
//     for (let index = 0; index < cart.length; index++) {
//       console.log(`${i + 1}.${cart[i][0]}:${cart[i][1]}`);
//     }
//   } else if (input == "D") {
//     input5 = Number(prompt("vị trị muốn xóa: "));
//     cart[input5 - 1] = 0;
//     for (let index = 0; index < cart.length; index++) {
//       console.log(`${i + 1}.${cart[i][0]}:${cart[i][1]}`);
//     }
//   } else if (input == "E") {
//     state = false;
//   }
// }
