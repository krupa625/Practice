const fs = require('fs');

// try{
//     fs.renameSync("./t.txt", "task.txt")
//     console.log("renamed!");
    
// }catch(err){
//     console.log("error !");
    
// }

fs.rename("./t6.js", "../Fs/t6.js", (err)=>{
    if (err) {
        if (err.code === "ENOENT") {
            console.error("File not found:", err.path);
        } else {
            console.error("Error renaming file:", err);
        }
        return;
    }
    console.log("renamed!");
    
})

