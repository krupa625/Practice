const fs = require("fs");

try {
  fs.writeFileSync(
    "./test.txt",
    "Hello this is a practice of fs module methods🤩"
  );
  console.log("writing sucessfully!");
} catch (err) {
  console.log("Error in writing!");
}


// fs.writeFile("./t.txt","Hello this is a practice of fs module methods🤩" , (err)=>{
//     if(err)throw err;
//     console.log("writing content!");
    
// })