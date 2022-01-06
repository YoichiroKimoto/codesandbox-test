// // // var val1 = "var変数";
// // // console.log(val1);

// // // val1 = "上書き";
// // // console.log(val1);

// // // var val1 = "再宣言";
// // // console.log(val1);

// // // let val2 = "let変数";
// // // console.log(val2);
// // // val2 = "let上書き";
// // // console.log(val2);

// // // let val2 = "再宣言";

// // // const val3 = "const変数";
// // // console.log(val3);

// // // // val3 = "上書き";

// // // const val3 = "歳宣言";

// // // const val4 = {
// // //   name: "Kimoto",
// // //   age: 45
// // // };

// // // val4.name = "akiko";
// // // val4.address = "tokyo";
// // // console.log(val4);

// // // const val5 = ["dog", "cat"];
// // // val5[0] = "human";
// // // val5.push("cow");
// // // console.log(val5);
// // // const name = "Kimoto";
// // // const age = 45;

// // // const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // // console.log(message1);

// // // const message2 = `私の名前は${name}です。年齢は${age}歳です`;
// // // console.log(message2);

// // // function func1(str) {
// // //   return str;
// // // }
// // // const func1 = function (str) {
// // //   return str;
// // // };
// // // console.log(func1("func111"));

// // // const func2 = (str) => str;

// // // console.log(func2("strr"));

// // // const func3 = (num1, num2) => {
// // //   return num1 + num2;
// // // };

// // // console.log(func3(10, 20));

// // // const myProfile = {
// // //   name: "kimoto",
// // //   age: 45
// // // };

// // // const message1 = `名前は${myProfile.name}、年齢は${myProfile.age}だよ`;
// // // console.log(message1);

// // // const { name, age } = myProfile;
// // // const message2 = `名前は${name}、年齢は${age}だよ`;
// // // console.log(message2);

// // const myProfile = ["kimoto", 45];

// // const message3 = `My name is ${myProfile[0]} and I am ${myProfile[1]} years old.`;
// // console.log(message3);

// // const [name, age] = myProfile;
// // const message4 = `My name is ${name} and I am ${age} years old !!.`;
// // console.log(message4);

// // const sayHello = (name = "Kimoto") => console.log(`Hello, ${name}!!`);
// // sayHello("Akiko");

// // const arr1 = [1, 2];
// // // console.log(arr1);
// // // console.log(...arr1);

// // const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// // sumFunc(...arr1);

// // const arr2 = [1, 2, 3, 4, 5];
// // const [num1, num2, ...arr3] = arr2;
// // console.log(num1);
// // console.log(num2);
// // console.log(arr3);

// // const arr4 = [10, 20];
// // const arr5 = [30, 40];
// // const arr6 = [...arr4];
// // arr6[0] = 100;
// // console.log(arr6);
// // console.log(arr4);
// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// // const arr8 = arr4;
// // console.log(arr4);
// // arr8[0] = 100;
// // console.log(arr8);
// const nameArr = ["Kimoto", "Yoh", "Akiko"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(`${index + 1}番目は${nameArr[index]}`);
// // }

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}は${name}`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 0;
// // });
// // console.log(newNumArr);

// const newNmaeArr = nameArr.map((name) => {
//   if (name === "Akiko") {
//     return name;
//   } else {
//     return `${name}くん`;
//   }
// });
// console.log(newNmaeArr);
