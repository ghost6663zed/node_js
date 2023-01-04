const path = require('path')

console.log('склеить участки пути', path.join(__dirname, '..', '..'));
console.log('получить абсолютный путь', path.resolve('first', 'second', 'third'));