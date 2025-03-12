const fs = require('fs')

fs.rmdir("fs1", (err)=>{
    if (err) {
        if (err.code === "ENOENT") {
            console.error("File not found:", err.path);
        } else {
            console.error("Error finding file:", err);
        }
        return;
    }
    console.log("removed directory!");
    
})

// fs.mkdir("fs1", (err)=>{
//     if(err)throw err;
//     console.log("created!");
    
// })
