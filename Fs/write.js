const fs = require("fs");

// fs.writeFile("./test.txt", "Hello, World!", (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//         return;
//     }
//     console.log("File written successfully!");
// });

// try{
//     fs.writeFileSync("./test.txt", "Hello, World!");
//     console.log("File written successfully!");      
// }catch(err){
//     console.error("Error writing file:", err);
// }


// fs.appendFile("./test.txt", "Hello, krupa", (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//         return;
//     }
//     console.log("File written successfully!");
// });

// fs.writeFileSync("./test.txt", "krupa")
// console.log("written successfully");


fs.writeFile("./test.txt", "riddhi", (err)=>{
    if(err){
        console.log("errro writing");
    }
    console.log("writing success!");
    
})


