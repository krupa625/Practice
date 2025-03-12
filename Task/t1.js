const fs = require('fs');



fs.readdir(__dirname, (err, files)=>{
    if (err) {
        if (err.code === "ENOENT") {
            console.error("File not found:", err.path);
        } else {
            console.error("Error reading file:", err);
        }
        return;
    }
    try{
        let newfiles = files.filter((file =>{
            return fs.statSync(`${__dirname}/${file}`).isFile()
            
        }))
        console.log(newfiles);
    }catch(err){
        console.log("No file directory!");
        
    }
    
})