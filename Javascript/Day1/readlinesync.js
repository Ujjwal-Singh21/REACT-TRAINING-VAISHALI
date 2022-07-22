const readLineSync = require("readline-sync")

const username = readLineSync.question('Enter your name: ')
const city = readLineSync.question('Enter your city: ')
const salary = readLineSync.question('Enter your salary: ')

console.log('Hello', username, 'from', city, 'your salary is', salary)