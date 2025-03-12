const fs = require("fs");
//fs.open(path, flags, [mode], callback)
//Flags:
//'r': Read (default)
//'w': Write (create/truncate)
//'a': Append (create if needed)
//'r+': Read and write
//'w+': Read and write (create/truncate)
//'a+': Read and append (create if needed)

// fs.open("./tes.txt", "w", (err, f) => {
//     if(err){
//         console.error("Error opening file:", err);
//         return;
//     }
//     console.log("File opened successfully!");
//     console.log(f);
//     fs.close(f, (err) => {
//         if(err){
//             console.error("Error closing file:", err);
//             return;
//         }
//         console.log("File closed successfully!");
//     });
// });

fs.open("./test.txt", "w", (err, f) => {
  if (err) {
    console.log("error reading");
    return;
  }
  fs.writeFile("./test.txt", "divya", (err) => {
    if (err) {
      console.log("error writing");
    }
    console.log("writing sucess!", f);
  });

  fs.close(f, (err) => {
    if (err) {
      console.log("error");
    }
    console.log("closed");
  });
});
