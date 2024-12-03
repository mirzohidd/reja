console.log("TRAIN Area !");

// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// =============

// let count = 0;
// function countLetter(letter, word) {
//   if (letter) {
//     for (char of word) {
//       if (char == letter) {
//         count++;
//       }
//     }
//     console.log(count);
//     return count;
//   } else {
//     console.log("Put a letter");
//   }
// }

// countLetter("g", "engineer");

// =============

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// CallBack function

// function maslahatBering(a,callBack){
//     if(typeof a!=='number') callBack("Insert a number",null);
//     else if(a <= 20) callBack(null,list[0]);
//     else if(a > 20 && a <= 30) callBack(null,list[1]);
//     else if(a > 30 && a <= 40) callBack(null,list[2]);
//     else if(a > 40 && a <= 50) callBack(null,list[3]);
//     else if(a > 50 && a <= 60) callBack(null,list[4]);
//     else{
//         setTimeout(function(){
//             callBack(null,list[5]);

//         },5000)
//     }

// }
// console.log("passed here 0");
// maslahatBering(65,(err,data)=>{
//     if(err) console.log("ERROR",err);
//     console.log('javob:',data)
// })
// console.log("passed here 1");

// Async function

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve,reject) => {
//         // setInterval(() => {
//         // resolve(list[5])
//         // }, 1000);
//         setTimeout(() => {
//         resolve(list[5])
//         }, 5000);

//     });

//   }

// }

// then/catch

// console.log("passed here 0");

// maslahatBering(25)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// async/await

// async function run(){
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     //  javob = await maslahatBering(65);
//     // console.log(javob);
//     //  javob = await maslahatBering(35);
//     // console.log(javob);
// }
// run()

// // DEFINE
// function qoldiqBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng bolmasin!", null);
//   } else if (a === 0){
//     callback("Surat nolga teng bolmasin!", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// qoldiqBolish(10, 3, (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("data:", data);
//     console.log("ANY LOGIC");
//   }
// });

// B TASK

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// let counterNumber = 0;
// function numberReturner(word) {
//   let newArr = [...word]
//   newArr.filter((item) => {
//     if(!isNaN(item)){
//       counterNumber ++;

//     }

//   })
//   console.log(counterNumber)
// }
// numberReturner("111dddenjsdjnasjnda5757676");

// C TASK

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(word1, word2) {
//   let newWord1 = [...word1];
//   let newWord2 = [...word2];

//   if (newWord1.length == newWord2.length) {
//     let newArr = word1.concat(word2);
//     // console.log(newArr)

//     if (newWord1.some((char) => newWord2.includes(char))) {
//       console.log("true")
//       return true
//     } else {
//       console.log("false")
//       return false
//     }
//     // for (let index = 0; index < newArr.length; index++) {
//     //   const element = newArr[index];
//     //   if (element == element) {
//     //     return true;
//     //   } else {
//     //     return false;
//     //   }
//     // }
//   }
// }

// checkContent("mitgroup", "gmtiprou");

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non: non,
//       lagmon: lagmon,
//       cola: cola,
//     };
//   }

//   qoldiq() {
//     const currentTime = new Date().toLocaleTimeString();
//     const { non, lagmon, cola } = this.products;
//     console.log(
//       `Hozir ${currentTime}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`
//     );
//     return this.products;
//   }

//   sotish(mahsulot, miqdor) {
//     const currentTime = new Date().toLocaleTimeString();

//     if (this.products[mahsulot] === undefined) {
//       console.log(`Bunday mahsulot mavjud emas: ${mahsulot}`);
//       return;
//     }

//     if (this.products[mahsulot] < miqdor) {
//       console.log(
//         `Hozir ${currentTime}da ${mahsulot} yetarli emas, bor-yo‘g‘i ${this.products[mahsulot]}ta mavjud.`
//       );
//       return;
//     }

//     this.products[mahsulot] -= miqdor;
//     console.log(
//       `Hozir ${currentTime}da ${miqdor}ta ${mahsulot} sotildi. Hozirda ${this.products[mahsulot]}ta qoldi.`
//     );
//   }

//   qabul(mahsulot, miqdor) {
//     const currentTime = new Date().toLocaleTimeString();

//     if (this.products[mahsulot] === undefined) {
//       console.log(`Bunday mahsulot mavjud emas: ${mahsulot}`);
//       return;
//     }

//     this.products[mahsulot] += miqdor;
//     console.log(
//       `Hozir ${currentTime}da ${miqdor}ta ${mahsulot} qabul qilindi. Hozirda ${this.products[mahsulot]}ta mavjud.`
//     );
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();

// E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(word) {
  let reversedWord = "";
  for (let i = 0; i < word.length; i++) {
    reversedWord = word[i] + reversedWord;
  }
  console.log(reversedWord);
}

getReverse("ssdd");
