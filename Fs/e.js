//111
const fs = require('fs');

fs.readdir(__dirname, (err, files)=>{
    if(err)throw err;
    files.forEach((file =>{
        console.log(file);
    }))
})

//2222
const fs = require('fs')

fs.rmdir("fs1", (err)=>{
    if(err)
        throw err;
    console.log("removed directory!");
    
})

// fs.mkdir("fs1", (err)=>{
//     if(err)throw err;
//     console.log("created!");
    
// })

//333

const fs = require('fs');
const path = require('path');


fs.readdir(__dirname, (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("Filenames with the .txt extension:");
    files.forEach(file => {
      if (path.extname(file) == ".txt")
        console.log(file);
    })
  }
})


//4444

const fs = require('fs');

// try{
//     let data = fs.readFileSync("./t.txt")
    
//     console.log(data.toString());
    
// }catch(err){
//     console.log("error reading content");
    
// }


fs.readFile("./t.txt", (err,data)=>{
    if(err)throw err;
    console.log(data.toString());
    
})


//5555
const fs = require("fs");

// try {
//   fs.writeFileSync(
//     "./t.txt",
//     "Hello this is a practice of fs module methods🤩"
//   );
//   console.log("writing sucessfully!");
// } catch (err) {
//   console.log("error writing!");
// }


fs.writeFile("./t.txt","Hello this is a practice of fs module methods🤩" , (err)=>{
    if(err)throw err;
    console.log("writing content!");
    
})


//6666


const fs = require('fs');

// try{
//     fs.renameSync("./t.txt", "task.txt")
//     console.log("renamed!");
    
// }catch(err){
//     console.log("error !");
    
// }

fs.rename("./t6.js", "T6.js", (err)=>{
    if(err)throw err;
    console.log("renamed!");
    
})



//7777


const fs = require('fs');
const path = require("path")

function readfiles(){
    console.log("current files:")
    fs.readdir(__dirname, (err,files)=>{
        if(err)throw err;
        files.forEach(file => {
            console.log(file);
        })
    })

}

readfiles();
fs.readFile("./task.txt",(err,data)=>{
    if(err)throw err;
    
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


///8888

const fs = require('fs');

fs.readdir(__dirname, (err,files)=>{
    if(err)throw err;
    // files.forEach((file =>{
    //     console.log(file);
    // }))

    for(let file of files){
        fs.unlink(file, (err)=>{
            if(err)throw err;
            console.log("delete");
            
        })
    }
})

