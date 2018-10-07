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

//  call
const printFile = async (fileName) => {
  try {
    const lines = await readFileAsArray(fileName);
    console.log(`Read ${fileName}`)
    console.log(lines)
  } catch (err) {
    throw err;
  }
};


printFile(__filename);