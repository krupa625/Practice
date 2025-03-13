// const fs = require('fs');
//**********************readfile***********
// 

// let readDataBuffer = fs.readFileSync('./1.txt')
// console.log(readDataBuffer)

// let readDataUtfEncoding = fs.readFileSync('./1.txt','utf-8')
// console.log(readDataUtfEncoding)

// console.log("ye third hai")



//***********************************watchfile*/


// function watchAFile(file) {
//   fs.watch(file, (event, filename) => {
//     console.log(`${filename} file Changed`);
//   });
// }
// watchAFile('./1.txt')

// import { watchFile } from 'node:fs';

// watchFile('1.txt', (curr, prev) => {
//   console.log(`the current mtime is: ${curr.mtime}`);
//   console.log(`the previous mtime was: ${prev.mtime}`);
// }); 

// import { watch } from 'node:fs';
// watch('', (eventType, filename) => {
//   console.log(`event type is: ${eventType}`);
//   if (filename) {
//     console.log(`filename provided: ${filename}`);
//   } else {
//     console.log('filename not provided');
//   }
// }); 

const fs=require('fs');
try {
const readStream=fs.createReadStream('./1.txt');
readStream.on("data",chunk=>{
    console.log("New data fetched******************************************************************************");
    console.log(chunk);
});   
} catch (error) {
    console.log(error);
}