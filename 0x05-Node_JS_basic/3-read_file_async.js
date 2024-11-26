const fs = require('fs');

const countStudents = (path) => new Promise((res, rej) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) rej(Error('Cannot load the database'));
    if (data) {
      let newData = data.toString().split('\n');
      newData = newData.slice(1, newData.length - 1);
      process.stdout.write(`Number of students: ${newData.length}\n`);
      const obj = {};
      newData.forEach((row) => {
        const student = row.split(',');
        if (!obj[student[3]]) obj[student[3]] = [];
        obj[student[3]].push(student[0]);
      });
      for (const cls in obj) {
        if (cls) process.stdout.write(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}\n`);
      }
    }
    res();
  });
});

module.exports = countStudents;
