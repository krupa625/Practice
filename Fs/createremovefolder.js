
const fs = require('fs');

// try{
//     fs.mkdirSync("test")
// }catch(err){
//     console.log("erroe", err);
    
// }
// try{
//     fs.rmdirSync("test")
//     console.log("deleted folder succesfully");
    
// }catch(err){
//     console.log("error", err);
    
// }

//************************asynchronous */

// fs.mkdir("test", (err)=>{
//     if(err){
//         console.log("error");
        
//     }
//     console.log("created!");
    
// })

fs.rmdir("test", (err)=>{
    if(err){
        console.log("error deleting folder");
        
    }
    console.log("deleted!");
    
})