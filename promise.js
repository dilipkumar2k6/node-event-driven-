const fs = require('fs');

const readFileAsArray = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      }
      const lines = data.toString().trim().split('\n');
      resolve(lines);
    });
  });
};

// example call
readFileAsArray(__filename).then(lines => {
  console.log(`Read ${__filename}`)
  console.log(lines)
}).catch(console.log);