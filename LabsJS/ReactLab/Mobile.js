const readLineSync = require('readline-sync')

class Mobile  {

  constructor(id, name, cost) {
    this.mobileId = id;
    this.mobileName = name;
    this.mobileCost = cost;
  }

  printMobileDetails () {

    console.log('MobileId: ' + this.mobileId + ', MobileName: ' + this.mobileName + ', MobileCost: ' + this.mobileCost + ', MobileType: ' + this.mobileType)
  }
}

module.exports = Mobile