const axios = require('axios')

url = 'http://localhost:3000/emps'

const arr = [];

// Data fetching get request
//---------------------------
axios.get(url)
.then((response) => {
  console.log('Response Data:', response.data)
  arr.push(...response.data)
})
.catch((error) => {
  console.log('Error:', error)
})

setTimeout(() => {
  console.log('**********************************************************')
  console.log('Printing array: ', arr)
}, 5000)

// Data posting post request
//--------------------------
// const postobj = {
//   "empId": "21",
//   "empName": "Clarke Kent",
//   "empSal": "33000",
//   "isMarried": false,
//   "id": 7
// }

// axios.post(url, postobj)
// .then((response) => {
//   console.log('Data Inserted / Posted successfully')
// })
// .catch((error) => {
//   console.log('Error in posting Data')
// })