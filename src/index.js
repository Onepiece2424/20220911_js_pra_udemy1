// const name = "じゃけえ";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;

// console.log(message2);

// // 従来の関数
// // function func1(str) {
// //   return str;
// // }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// // 処理が１行の時はreturnと{}ブラケットを省略することができる。
// const func3 = (num1, num2, num3) => num1 + num2 + num3;
// console.log(func3(10, 20, 30));

// 分割代入
// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

const myProfile = ["じゃけえ", 28];

// const messgae5 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(messgae5);

const [name, age] = myProfile;

const messgae6 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(messgae6);
