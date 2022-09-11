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

// const arr1 = [10, 20];

// // const arr2 = arr1;
// // arr2[0] = 100;
// // console.log(arr2);

// // console.log(arr1); // arr2のみ変更したつもりが、参照元のarr1も変更されてしまっている。。。。

// //　配列のよくある間違い（修正後）
// const arr2 = [...arr1]; //(←先ほどのconst arr2 = arr1;部分をスプレッド構文に変更。)

// arr2[0] = 100;
// console.log(arr2);

// console.log(arr1);

/**
 * mapやfilterを使用した配列の処理
 */

// mapメソッド
const newArr = ["田中", "佐藤", "山田"];

//  const newArr2 = newArr.map((name) => {
//    return name
//  })
//  console.log(newArr2);

// newArr.map((name) => console.log(name));
// newArr.map((name, index) =>
//   console.log(`${index + 1}番目は、${name}さんです。`)
// );

//　filterメソッド
// const numArr = [1, 2, 3, 4, 5];
// const newArr = numArr.filter((num) => {
//   return num % 2 === 1;
//   // return num % 2 === 0;
// });

// console.log(newArr);

// mapメソッドを用いた少し複雑な処理
// const nameArr = newArr.map((name) => {
//   if (name === "田中") {
//     return `${name}だよ。`;
//   } else {
//     return `${name}さんです。`;
//   }
// });
// console.log(nameArr);

/**
 * 三項演算子
 */

// const val1 = 1 > 0 ? "trueです。" : "falseです。";
// console.log(val1);

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です。";
// };
// console.log(checkSum(10, 100));

/**
 * ||と&&の本当の意味
 */

// ||は、左側がfalseなら右側を返す。
const num = false;
const fee = num || "金額を設定してください。";
console.log(fee);

// &&は、左側がtrueなら、右側を返す。
const num2 = 100;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);
