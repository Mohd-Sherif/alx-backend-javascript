const fs = require('fs');

const countStudents = (path) => {
  try {
    let data = fs.readFileSync(path, 'utf8').toString().split('\n');
    data = data.slice(1, data.length - 1);
    process.stdout.write(`Number of students: ${data.length}\n`);
    const obj = {};
    data.forEach((row) => {
      const student = row.split(',');
      if (!obj[student[3]]) obj[student[3]] = [];
      obj[student[3]].push(student[0]);
    });
    for (const cls in obj) {
      if (cls) process.stdout.write(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}\n`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
