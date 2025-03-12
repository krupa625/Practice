const fs = require('fs');

// fs.unlink("./test.txt", (err)=> {
//     if(err){
//         console.log("error")
//     }
//     console.log("delete")
// })

// try{
//     fs.rmSync("./test.js")
//     console.log("deleted!");
    
// }catch(err){
//     console.log("error", err);
    
// }


fs.copyFile("./delete.js", "copy.js", (err)=>{
    if(err){
        console.log("error");
    }
    console.log("copying sucess ");
    
})