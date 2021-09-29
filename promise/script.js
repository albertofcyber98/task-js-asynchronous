// // const janji = new Promise(function(resolve,reject){
// //     if(true){
// //         resolve('Promise berhasil');
// //     }else{
// //         reject('Promise gagal');
// //     }
// // });
// // janji.then(function (result){
// //     console.log(result);
// // }).catch(error => console.log(error))
// // .finally(() =>{
// //     console.log('Promise selesai di eksekusi')
// // })

// const getData = (kondisi) => {
//     return new Promise((resolve, reject)=>{
//         if(kondisi){
//             setTimeout(() => {
//                 resolve("Selamat datang di kelas MERN");
//             }, 3000);
//         }else{
//             // reject("Maaf permintaan kamu tidak dapat diproses");
//             reject(new Error("Maaf permintaan kamu tidak dapat diproses"));
//         }
//     });
// };
// // document.getElementById('btn').addEventListener('click', function(){
// //     this.innerHTML = 'Loading...';
// //     const p = document.querySelector('p');
// //     const data = getData(true);
// //     data.then((res) =>{
// //         p.innerHTML = res;
// //     })
// //     .catch(err => {
// //         p.innerHTML = err;
// //     }).finally(()=>{
// //     this.innerHTML = 'Hi! Click Me';
// //     }); 
// // });

// document.getElementById('btn').addEventListener('click', async function(){
//     this.innerHTML = 'Loading...';
//     const p = document.querySelector('p');
//     try{
//         const data = await getData(false);
//         p.innerHTML = data;
//     }catch(err){
//         // p.innerHTML = err;
//         // console.log(err);
//         console.log(err.message);
//     }finally{
//     this.innerHTML = 'Hi! Click Me';
//     }
//     // data.then((res) =>{
//     //     p.innerHTML = res;
//     // })
//     // .catch(err => {
//     //     p.innerHTML = err;
//     // }).finally(()=>{
//     // this.innerHTML = 'Hi! Click Me';
//     // });
// });

// document.getElementById('btn').addEventListener('click', async function(){
//     this.innerHTML = 'Loading...';
//     const p = document.querySelector('p');
//     try{
//         const data = await getData(false);
//         p.innerHTML = data;
//     }catch(err){
//         // p.innerHTML = err;
//         // console.log(err);
//         console.log(err.message);
//     }finally{
//     this.innerHTML = 'Hi! Click Me';
//     }
// });

const data = fetch('https://jsonplaceholder.typicode.com/users');
data   
    .then(function(res){return res.json()})
    .then(res => console.log(res));