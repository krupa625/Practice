const fs = require("fs");

// fs.stat('./test.txt', (err, stats) => {
//     if (err) {
//       console.log('Path does not exist');
//       return;
//     }
    
//     if (stats.isDirectory()) {
//       console.log('It is a directory');
//     } else if (stats.isFile()) {
//       console.log('It is a file');
//     }
    
//     console.log('File size:', stats.size, 'bytes');
//     console.log('Last modified:', stats.mtime);
//   });


fs.stat('./test.txt', (err, stats) => {
    if(err){
        console.error("Error reading file:", err);
        return;     
    }
    console.log(stats);
    console.log('File size:', stats.size, 'bytes');     
});