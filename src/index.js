// // var val1 = "var変数";
// // console.log(val1);

// // val1 = "上書き";
// // console.log(val1);

// // var val1 = "再宣言";
// // console.log(val1);

// // let val2 = "let変数";
// // console.log(val2);
// // val2 = "let上書き";
// // console.log(val2);

// // let val2 = "再宣言";

// // const val3 = "const変数";
// // console.log(val3);

// // // val3 = "上書き";

// // const val3 = "歳宣言";

// // const val4 = {
// //   name: "Kimoto",
// //   age: 45
// // };

// // val4.name = "akiko";
// // val4.address = "tokyo";
// // console.log(val4);

// // const val5 = ["dog", "cat"];
// // val5[0] = "human";
// // val5.push("cow");
// // console.log(val5);
// // const name = "Kimoto";
// // const age = 45;

// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(message1);

// // const message2 = `私の名前は${name}です。年齢は${age}歳です`;
// // console.log(message2);

// // function func1(str) {
// //   return str;
// // }
// // const func1 = function (str) {
// //   return str;
// // };
// // console.log(func1("func111"));

// // const func2 = (str) => str;

// // console.log(func2("strr"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };

// // console.log(func3(10, 20));

// // const myProfile = {
// //   name: "kimoto",
// //   age: 45
// // };

// // const message1 = `名前は${myProfile.name}、年齢は${myProfile.age}だよ`;
// // console.log(message1);

// // const { name, age } = myProfile;
// // const message2 = `名前は${name}、年齢は${age}だよ`;
// // console.log(message2);

// const myProfile = ["kimoto", 45];

// const message3 = `My name is ${myProfile[0]} and I am ${myProfile[1]} years old.`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `My name is ${name} and I am ${age} years old !!.`;
// console.log(message4);

const sayHello = (name = "Kimoto") => console.log(`Hello, ${name}!!`);
sayHello("Akiko");
