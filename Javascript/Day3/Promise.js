// We pass an executor function to Promise Constructor function and that executor function takes 2 parameters which are resolve and reject function, later either one from both gets executed where resolve means success and reject means failure, hence if resolve is executed, then() function gets executed and if reject is executed, catch() function is executed.

console.log('Program starts here')

const promise = new Promise((resolve, reject) => {

  console.log('Inside promise executor function before setTimeout Fn')

  setTimeout(() => {

    let marksArr = new Array(20, 35, 45, 76, 87)

    resolve(marksArr);

    // reject('Error while fetching roll No'); 
    
  }, 5000)

  console.log('Inside promise executor function after setTimeout Fn')
})

console.log('Program ends here');

promise
.then((rollNoResponse) => console.log('After successFull call: ', rollNoResponse))
.catch((error) => console.log('After failure call: ', error))