const fs = require('fs');

// try{
//     let data = fs.readFileSync("./t.txt")
    
//     console.log(data.toString());
    
// }catch(err){
//     console.log("error reading content");
    
// }


fs.readFile("./test.txt", (err,data)=>{
    if (err) {
        if (err.code === "ENOENT") {
            console.error("File not found:", err.path);
        } else {
            console.error("Error reading file:", err);
        }
        return;
    }
    console.log(data.toString());
    
})