const name = "じゃけえ";
const age = 28;

const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

const message2 = `私の名前は${name}です。年齢は${age}歳です。`;

console.log(message2);

// 従来の関数
// function func1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};

console.log(func1("func1です。"));

// アロー関数
const func2 = (str) => {
  return str;
};

console.log(func2("func2です。"));
