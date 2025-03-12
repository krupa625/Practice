const fs = require('fs');

// fs.mkdir("test.txt", (err)=>{
//     if(err){
//         console.log("error");
        
//     }
//     console.log("created");
    
// })

fs.appendFile("./test.txt", "hello!", (err)=>{
    if(err){
        console.log("error creating");
        
    }
    console.log("created");
    
})