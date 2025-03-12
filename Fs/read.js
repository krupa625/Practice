const fs = require("fs");

// let file = "./test.txt";

// let promise = new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//         if (err) {
//             reject(err);
//             return;
//         }
//         resolve(data);
//     });
// });

// promise.then((data) => {
//     console.log(data.toString());
// }).catch((err) => {
//     console.error("Error reading file:", err);
// });




// fs.readFile("./test.txt", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log(data.toString());
// });



// try{
//     let data = fs.readFileSync("./test.txt");
//     console.log(data.toString());
// }catch(err){
//     console.error("Error reading file:", err);
// }
// let data = fs.readFileSync("./test.txt");
// console.log(data.toString());


// let data = fs.readFile("./test.txt", (err, data)=>{
//       if(err){
//         console.log("error");
        
//       }
//       console.log(data.toString());
      
// })

const fsPromises = require('fs').promises;
 
fs.promises.readFile("txt/test.txt")
    .then(function (result) {
        console.log(" " + result);
    })
    .catch(function (error) {
        console.log(error);
    })





