const fs = require('fs');

fs.readdir(__dirname, (err,files)=>{
    if (err) {
        if (err.code === "ENOENT") {
            console.error("File not found:", err.path);
        } else {
            console.error("Error reading file:", err);
        }
        return;
    }
    // files.forEach((file =>{
    //     console.log(file);
    // }))

    for(let file of files){
        fs.unlink(file, (err)=>{
            if (err) {
                if (err.code === "ENOENT") {
                    console.error("File not found:", err.path);
                } else {
                    console.error("Error reading file:", err);
                }
                return;
            }
            console.log("delete");
            
        })
    }
})

