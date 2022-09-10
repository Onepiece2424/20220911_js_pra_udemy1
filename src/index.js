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

// const myProfile = ["じゃけえ", 28];

// // const messgae5 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// // console.log(messgae5);

// const [name, age] = myProfile;

// const messgae6 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(messgae6);

// デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん。`);
// sayHello();

/**
 * スプレッド構文
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num3, num4, ...arr3] = arr2;

// console.log(num3);
// console.log(num4);
// console.log(...arr3);

// 配列のコピー、結合
// const arr5 = [10, 20];
// const arr6 = [30, 40];

// const arr7 = [...arr5];
// console.log(arr7);

// const arr8 = [...arr5, ...arr6];
// console.log(arr8);

// 配列のよくある間違い

const arr1 = [10, 20];

// const arr2 = arr1;
// arr2[0] = 100;
// console.log(arr2);

// console.log(arr1); // arr2のみ変更したつもりが、参照元のarr1も変更されてしまっている。。。。

//　配列のよくある間違い（修正後）
const arr2 = [...arr1]; //(←先ほどのconst arr2 = arr1;部分をスプレッド構文に変更。)

arr2[0] = 100;
console.log(arr2);

console.log(arr1);
