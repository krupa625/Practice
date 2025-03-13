const fs = require('fs');

const startTime = Date.now();
try{
    let data = fs.readFileSync("./1.txt")
    
    console.log(data.toString());
    console.log(data.toString());
    const totalReadingTime = Date.now() - startTime;
    console.log(`Reading the file took ${totalReadingTime}ms`);

}catch(err){
    console.log("error reading content");
    
}


// fs.readFile("./1.txt", (err,data)=>{
//     if (err) {
//         if (err.code === "ENOENT") {
//             console.error("File not found:", err.path);
//         } else {
//             console.error("Error reading file:", err);
//         }
//         return;
//     }
    // console.log(data.toString());
    // const totalReadingTime = Date.now() - startTime;

    // console.log(`Reading the file took ${totalReadingTime}ms`);

    
    
// })