const readLineSync = require('readline-sync')

function Product(id, name, price, description) {

  this.productId = id;
  this.productName = name;
  this.productPrice = price;
  this.productDescription = description;

  this.printAllProduct = function() {
    console.log('ProductId: ', this.productId)
    console.log('ProductName: ', this.productName)
    console.log('ProductPrice: ', this.productPrice)
    console.log('ProductDescription: ', this.productDescription)
  }

}

const noOfProducts = readLineSync.question('Enter total num of products: ')

const productArr = [];

for (let i = 1; i <= noOfProducts; i++) {
  var id = readLineSync.question('Enter ProductId: ', )
  var name = readLineSync.question('Enter ProductName: ')
  var price = readLineSync.question('Enter ProductPrice: ')
  var description = readLineSync.question('Enter ProductDescription: ')

  productArr.push(new Product(id, name, price, description));
}

for(let i = 0; i < productArr.length; i++) {

 console.log(` `)

 productArr[i].printAllProduct();

}




