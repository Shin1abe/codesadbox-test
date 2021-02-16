/**
 * テンプレート文字列
 */
const name = "abe";
const age = 11;
// 「私の名前はabeです。年齢は11歳です。」
// 従来
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です。"));
// 変数に関数を格納して利用もできる
const func2 = function (str) {
  return str;
};
console.log(func2("func2です。"));

// アロー関数
// ()を省略できる
// {},returnを省略して１行でかける
const func3 = (str) => {
  return str;
};
console.log(func3("func3です。"));

const func4 = (num1, num2) => {
  return num1 + num2;
};
//const func4 = (num1, num2)　=> num1+num2
console.log(func4(2.5, 3));
