const fs = require('fs');
const path = require('path');


fs.readdir(__dirname, (err, files) => {
  if (err) {
    if (err.code === "ENOENT") {
        console.error("File not found:", err.path);
    } else {
        console.error("Error reading file:", err);
    }
    return;
}
  else {
    console.log("Filenames with the .txt extension:");
    files.forEach(file => {
      if (path.extname(file) == ".txt")
        console.log(file);
    })
  }
})
