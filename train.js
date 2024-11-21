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

console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

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

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("Insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve,reject) => {
        // setInterval(() => {
        // resolve(list[5])
        // }, 1000);
        setTimeout(() => {
        resolve(list[5])
        }, 5000);
        
    });
   
  }

  
}

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

async function run(){
    let javob = await maslahatBering(65);
    console.log(javob);
    //  javob = await maslahatBering(65);
    // console.log(javob);
    //  javob = await maslahatBering(35);
    // console.log(javob);
}
run()
