const fs = require('fs');
const path = require("path")

function readfiles(){
    console.log("current files:")
    fs.readdir(__dirname, (err,files)=>{
        if (err) {
            if (err.code === "ENOENT") {
                console.error("File not found:", err.path);
            } else {
                console.error("Error reading file:", err);
            }
            return;
        }
        files.forEach(file => {
            console.log(file);
        })
    })

}

readfiles();
fs.readFile("./task.txt",(err,data)=>{
    if (err) {
        if (err.code === "ENOENT") {
            console.error("File not found:", err.path);
        } else {
            console.error("Error reading file:", err);
        }
        return;
    }
    
    console.log("File task.txt content is : " , data.toString());
    
})


fs.copyFile("./task.txt", "./task1.txt", (err)=>{
    if(err)throw err;
    readfiles();
    fs.readFile("./task1.txt", (err,data)=>{
        if(err)throw err;
        console.log("File task1.txt content is :", data.toString());
        
    })
})