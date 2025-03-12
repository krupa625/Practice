const fs = require('fs');
const path = require('path')


fs.readdir(__dirname, (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("Filenames with the .txt extension:");

    let newfiles = files.filter(file => {
      if (path.extname(file) == ".txt")
       return true;
    })
    console.log(newfiles);
    
    try{
        for(let i=0; i<newfiles.length; i++){
            fs.unlinkSync(newfiles[i])
        }
        console.log("Sucessfully Deleted!");
        
        
    }catch(err){
        
        console.log("Error in Deleting file");
    }
   
    
    // fs.unlinkSync(newfiles.splice(0));
    
    
    
}
})