console.log(
  "Hello Davood bhai How are you its been long ...You have forgot me😒 ",
);

// a = 10;
// console.log(a);
// a=20;
// console.log(a);
// a="Hello davood";
// console.log(a)

// let arr = [1,2,3,4,5]
// function sqr(arr){
//   let nearr = arr.map((item,index)=>item*2);
//   return nearr
// }
// console.log(sqr(arr))

// function a(){
//     var br=10;
//     function b(){
//         console.log(br);
//         const c = 45;
//         function one(){
//             console.log(c);
//             let d = 55;
//             function ver(){
//                 console.log(d);
//             }
//             ver()
//         }
//         one();
//     }
//     b();
// }
// a();

// function a(v){
//     v();
// }

// function vb(){
//     console.log("I am a callback function");
// }
// a(vb)

// setTimeout(function(){
//     console.log("Hello I am printing after the 4 seconds");
// },4000)

// console.log(a);
// console.log(b);
// console.log(c);
// var a = 23;
// let b = 23;
// const c = 45;

// one();
// console.log(newone)

// function one(){
//     console.log("Hello davood bhai");
// }
// const newone = ()=>{
//     console.log('Hello bro how are your..')
// }

// let arr = [1,2,3,4,5]
// let newarr = arr.map((item,index)=> item * 2)
// console.log(newarr);
// let fil = arr.filter((item,index)=> item%2==0);
// console.log(fil);
// let sum = arr.reduce((s,v)=>s+v);
// console.log(sum)

// callback hell

// setTimeout(function(){
//     console.log("Task one");
//     setTimeout(function(){
//         console.log('Task Two');
//         setTimeout(function(){
//             console.log("Task Three");
//             setTimeout(function(){
//                 console.log('Task Four');
//             },4000)
//         },3000)
//     },2000)
// },1000)

// const a = 10;
// console.log(typeof a)

// destructuring
// const user ={
//     name1:'name',
//     age:23
// }

// console.log(user.name1)
// console.log(user.age)
// const {name1,age} = user;
// console.log(name1);
// console.log(age);

// const arr = [1,2,3]
// const [a,b,c]= arr;
// console.log(a);
// console.log(b);
// console.log(c);

// const arr=[1,2,3,4,5,5,6,75,6]
// const [a,b,...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);4

// console.log("4" + 2); //42
// console.log(true + 1); //2
// console.log(1 + 2); //3
// console.log("6" - 2) // 4

// let a = [1,2,'a']
// console.log(a)

// const data = {
//     a:'one',
//     b:'two',
//     c:'three'
// }
// console.log(data)

// const a = 9;
// console.log(`this is a value ${a}`);

// const pdata = new Promise((res, rej) => {
//   setTimeout(() => {
//     const apiData = {
//       name1: "davood",
//       age: 23,
//       addess: "Sullurpeta",
//     };
//     let success = 1;
//     if (success) {
//       res(apiData);
//     } else {
//       rej("Error in loading data");
//     }
//   },5000);
// });

// pdata.then((res) => console.log(res)).catch((rej) => console.log(rej));

// document.getElementById('one').addEventListener("click",()=>{
//     console.log('Button clicked')

// })

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res=>console.log(res.json()))
// .then(res=>console.log(res))
// .catch((rej)=>console.error(rej)
// );

// const p1 = new Promise((resovle,reject)=>{
//     if(0){
//         resovle("Data is fetched successfully");
//     }
//     else{
//         reject("Failed to load data")
//     }
// })
// console.log(p1)
// p1.then(res=>console.log(res)).catch(res=>console.log(res));


// const data = ["apple", "banana"];
// function createOder(data) {
//   const p1 = new Promise((res, rej) => {
//     const oderID = 143;
//     setTimeout(() => {
//       if (data) {
//         res(oderID);
//       } else {
//         rej("Failed to load data ");
//       }
//     }, 5000);
//   });
//   return p1;
// }

// function addtocart(oderID) {
//   return new Promise((res, rej) => {
//     res(`Payment Sucessfullt ${oderID}`);
//   });
// }

// createOder(data)
// .then(function(oderID){
//     console.log(oderID)
//     return addtocart(oderID);
// })
// .then(function(message){
//     console.log(message)
// })
// .catch((rej)=>{console.log('Hello')}

const p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Task one")
    },2000)
})
const p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Task Two")
    },3000)
})
const p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Task Three")
    },4000)
})

async function one() {
     const ad1 = await p1;
     console.log(ad1)
     const ad2 = await p2;
     console.log(ad2)
     const ad3 = await p3;
     console.log(ad3)
    
}
one()