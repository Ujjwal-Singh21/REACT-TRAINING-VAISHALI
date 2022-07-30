import { useState } from 'react'
import BookList from './bookList.json'

export const BookListTable = () => {

  const [bookListArr, setBookListArr] = useState([...BookList])

  const [bookId, setBookId] = useState('')
  const [booktitle, setBookTitle] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')

  // Id 
  let idFilterFn = (e) => {

    let keyword = e.target.value
    setBookId(keyword)

    if(keyword !== '') {
      
      const fiteredIdArr = bookListArr.filter((book) => (
        book.id.toString().includes(keyword.toLowerCase())
      ))

      setBookListArr(fiteredIdArr)
    } 
    else if(keyword === '') {

      setBookListArr(BookList)
    }

}

  // Title 
  let titleFilterFn = (e) => {

    let keyword = e.target.value
    setBookTitle(keyword)

    if(keyword !== '') {
      
      const fiteredTitleArr = bookListArr.filter((book) => (
        book.title.toLowerCase().includes(keyword.toLowerCase())
      ))

      setBookListArr(fiteredTitleArr)
    } 
    else if(keyword === '') {

      setBookListArr(BookList)
    }

}

// Author
let authorFilterFn = (e) => {

  let keyword = e.target.value
  setBookAuthor(keyword)

  if(keyword !== '') {
    
    const fiteredAuthorArr = bookListArr.filter((book) => (
      book.author.toLowerCase().includes(keyword.toLowerCase())
    ))

    setBookListArr(fiteredAuthorArr)
  } 
  else if(keyword === '') {

    setBookListArr(BookList)
  }

}

// Publish Year
let yearFilterFn = (e) => {

  let keyword = e.target.value
  setPublishYear(keyword)

  if(keyword !== '') {
    
    const fiteredYearArr = bookListArr.filter((book) => (
      book.yearOfPublish.toString().toLowerCase().includes(keyword.toLowerCase())
    ))

    setBookListArr(fiteredYearArr)
  } 
  else if(keyword === '') {

    setBookListArr(BookList)
  }

}

  return (
    <>

    <h4> TABLE WITH FILTERING FUNCTIONALITY </h4>
    <hr size='2' color='red' width='37%'/>

    <br />

      <table>

        <thead>

          <tr>
            <th> BOOK_ID </th>
            <th> BOOK_TITLE </th>
            <th> BOOK_AUTHOR </th>
            <th> BOOK_PUBLISH_YEAR </th>
          </tr>
          
          <tr>
            <th> <input type='search' placeholder='Search by Id' value={bookId}
             onChange={idFilterFn}/> </th>

            <th> <input type='search' placeholder='Search by Book Title' value={booktitle} 
            onChange={titleFilterFn}/> </th>

            <th> <input type='search' placeholder='Search by Book Author' value={bookAuthor} 
            onChange={authorFilterFn}/> </th>

            <th> <input type='search' placeholder='Search by Publish Year' value={publishYear} 
            onChange={yearFilterFn}/> </th>
          </tr>

        </thead>

        <tbody>
          { 
             bookListArr.map((book, index) => (
              <tr key={index}>
                <td> {book.id} </td>
                <td> {book.title} </td>
                <td> {book.author} </td>
                <td> {book.yearOfPublish} </td>
              </tr>
          ))
          }
        </tbody>

      </table>

      <br /> <br />
    </>
  )
}
