const readLineSync = require('readline-sync')
const Mobile = require('./Mobile.js')

class SmartPhone extends Mobile {

  constructor(id, name, cost, type) {
    super(id, name, cost)
    this.mobileType = type;
  }
   
}

console.log('-- Smart Phone Component --')
const id = readLineSync.question('Enter Mobile Id: ')
const name = readLineSync.question('Enter Mobile Name: ')
const cost = readLineSync.question('Enter Mobile Cost: ')
const type = readLineSync.question('Enter Mobile Type: ')

const smartPhone1 = new SmartPhone(id, name, cost, type);

const yesOrNo = readLineSync.question('Do you want to print mobile details..?? Type Yes/No:  ')

yesOrNo === 'Yes' ? smartPhone1.printMobileDetails() : null

