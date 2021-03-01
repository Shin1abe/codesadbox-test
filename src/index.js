/**
 * テンプレート文字列
 */
// const name = "abe";
// const age = 11;
// 「私の名前はabeです。年齢は11歳です。」
// 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
//console.log(func1("func1です。"));
// 変数に関数を格納して利用もできる
// const func2 = function (str) {
//   return str;
// };
// console.log(func2("func2です。"));

// アロー関数
// ()を省略できる
// {},returnを省略して１行でかける
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("func3です。"));
// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
//const func4 = (num1, num2)　=> num1+num2
//console.log(func4(2.5, 3));


/**
 * 分割代入
 */
// const myProfile = {
//   namex:"Shin",
//   agex:56
// }
// console.log(`私の名前は${myProfile.namex}です。年齢は${myProfile.agex}歳です。`);

// const {namex, agex} = myProfile;
// console.log(`私の名前は${namex}です。年齢は${agex}歳です。`);

// const myProfile = ['Shin1', 51];
// console.log(`私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`);
// const [namex, agex] = myProfile;
// console.log(`私の名前は${namex}です。年齢は${agex}歳です。`);

/**
 * デフォルト値
 */
// const sayHello = (name="？") => console.log(`こんにちは${name}さん`);
// sayHello("Shin");
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => num1+num2;
// console.log(sumFunc(arr1[0],arr1[1]));
// console.log(sumFunc(...arr1));

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; //コピー（別物）
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];  //結合
// console.log(arr7);

// const arr8 = arr4;  //参照渡し（アドレスコピー）のため危険！
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
//const nameArr = ["tanaka", "yamada", "jakee"];
// 従来
// for (let index = 0; index < nameArr.length; index++){
//    console.log(`${index+1}番目は${nameArr[index]}です。`);
//  }
// map
//  nameArr.map((name,index)=> console.log(`${index+1}番目は${name}です。`));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1
// });
// console.log(newNumArr);

// (numArr.filter((num) => num % 2 === 1)).map((pnum) => console.log(pnum));

//少しだけ実践的
// nameArr.map((name) => {
//   if (name === "jakee") console.log(`${name}`)
//   else console.log(`${name}さんです。`);
// });

/**
 *  三項演算子 
 */
// ある条件? 条件がtrueの時: 条件がfalseの時
// const val1 = 1>0 ? "trueです": "falseです";
// console.log(val1);

// const num = "1300";
// console.log(typeof num === 'number' ? num.toLocaleString() : "数値を入力してください");

