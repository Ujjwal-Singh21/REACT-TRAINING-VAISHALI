const readLineSync = require('readline-sync')
const Mobile = require('./Mobile.js')

class BasicPhone extends Mobile {

  constructor(id, name, cost, type) {
    super(id, name, cost)
    this.mobileType = type;
  }
   
}

console.log('-- Basic Phone Component --')
const id = readLineSync.question('Enter Mobile Id: ')
const name = readLineSync.question('Enter Mobile Name: ')
const cost = readLineSync.question('Enter Mobile Cost: ')
const type = readLineSync.question('Enter Mobile Type: ')

const basicPhone1 = new BasicPhone(id, name, cost, type);

const yesOrNo = readLineSync.question('Do you want to print mobile details..?? Type Yes/No:  ')

yesOrNo === 'Yes' ? basicPhone1.printMobileDetails() : null

