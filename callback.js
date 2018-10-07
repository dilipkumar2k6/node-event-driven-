const fs = require('fs');

const readFileAsArray = (file, cb) => {

  fs.readFile(file, (err, data) => {
    if (err) {
      return (err);
    }
    const lines = data.toString().trim().split('\n');
    cb(null, lines);
  });
};

// example call
readFileAsArray(__filename, (err, lines)=>{
  if(err) {
    throw err;
  }
console.log(`Read ${__filename}`)
console.log(lines)
});