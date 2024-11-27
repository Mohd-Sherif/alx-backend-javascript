const http = require('http');
const url = require('url');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const reqUrl = url.parse(req.url).pathname;
  if (req.method === 'GET') {
    if (reqUrl === '/') res.end('Hello Holberton School!');
    else if (reqUrl === '/students') {
      res.write('This is the list of our students\n');
      try {
        const students = await countStudents(DATABASE);
        res.end(`${students.join('\n')}`);
      } catch (err) {
        res.end(err.message);
      }
    }
  }
  res.statusCode = 404;
  res.end();
}).listen(1245);

module.exports = app;
