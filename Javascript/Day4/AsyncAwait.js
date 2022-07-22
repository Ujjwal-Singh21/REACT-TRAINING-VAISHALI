console.log('Program starts here')

async function myFunction(fname) {

  let promise = new Promise((resolve, reject) => {

    setTimeout(() => {

      let marksArr = [45, 98, 56, 23, 45]
      resolve('FirstName: ' + fname + ', MarksArray: ' + marksArr)
    }, 5000)
  })

  let promiseRes = await promise;
  console.log('type of promise result:', typeof promiseRes)
  console.log('Value of promise result:', promiseRes)
}

myFunction('Vishwas')

console.log('Program ends here')


// output without async await:
//----------------------------
// Program starts here
// type of promise result: object
// Value of promise result: Promise { <pending> }
// Program ends here

// output with async await
//------------------------
// Program starts here
// Program ends here 
// ----------- delay of 5 seconds -------------------
// type of promise result: string
// Value of promise result: FirstName: Vishwas, MarksArray: 45,98,56,23,45