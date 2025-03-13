// const fs = require("fs")
// // const readStream = fs.createReadStream("t.txt");
// // console.log(readStream);
// reader = fs.createReadStream('t.txt', {
//     // flag: 'a+',
//     // encoding: 'UTF-8',
//     start: 5,
//     // end: 64,
//     // highWaterMark: 16
// });

// reader.on("data", (chunk) => {
//     console.log(chunk.toString());
// })

import { createReadStream } from 'node:fs';

let reader = createReadStream('1.txt', { start: 0, end: 99 });
reader.on("data", (chunk)=>{
    console.log(chunk.toString());
    
})