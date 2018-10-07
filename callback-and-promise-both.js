const fs = require('fs');

const readFileAsArray = (file, cb = () => {
}) => {

  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
        return cb(err);
      }
      const lines = data.toString().trim().split('\n');
      resolve(lines);
      return cb(lines);
    });
  });
};

// callback call
readFileAsArray(__filename, (err, lines) => {
  if (err) {
    throw err;
  }
  console.log(`Read ${__filename}`)
  console.log(lines)
});

// promise call
readFileAsArray(__filename).then(lines => {
  console.log(`Read ${__filename}`)
  console.log(lines)
}).catch(console.log);