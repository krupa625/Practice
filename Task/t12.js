const fs = require('fs');

fs.chmod('test.txt', 0o400, (err) => {
  if (err) {
    console.error('Oops! Something went wrong:', err);
  } else {
    console.log('Note is now private! 🔒');
  }
});
