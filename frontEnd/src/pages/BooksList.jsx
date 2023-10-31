import {useEffect, useState} from 'react'
//import books from  '../data/todos.json'
import axios from  '../config/axios'
import BookTable from '../components/BookTable'
import BookForm from '../components/BookForm'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import {  TableCell, Button} from '@mui/material'
function BooksList() {
  const navigate = useNavigate();
  const [list, setList] = useState([])
  const [bookEdit, setBookEdit] = useState({id:"", title:"", releaseDate: "", author:""})

  const getBooks = async () => {
    try {
      axios.get("/libros", {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }})
        .then ( (res)=> {
          setList(res.data)
        })
    }catch(e){
      console.log(e)
      if(e.status==401)
        console.log("No autorizado")
        navigate('/login')
    }
  }

  useEffect( () => {
    getBooks()
  }, [])

  const addBook = async (book) => {
    if (book.id==""){
      try{
        console.log(book)
        console.log(localStorage.getItem("token"))
        const res = await axios.post("/libros", book, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})

        if(res.status==200)
          getBooks()
      }catch (e){
        console.log(e)
      }
    }else{
      try{
        const res = await axios.put("/libros/"+book.id, book, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200)
          getBooks()
      }catch (e){
        console.log(e)
      }

    }  
    //setList(bookTmp)
  }

  const delBook = async (id) => {
    try {
      const res = await axios.delete("/libros/"+id, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }})
      if(res.status==200)
        getBooks()
    }catch (e){
      console.log(e)
    }
  }

  const filterByAuthor = async (author) => {
    console.log(author)
    try {
      const res = await axios.get("/libros/"+author.id+"/authors", {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }})
      if(res.status==200)
        setList(res.data)
    }catch (e){
      console.log(e)
    }
  }

  return (
    <Context.Provider value={{bookEdit, setBookEdit}}>
      <TableCell align="left">
      <Button variant="contained" color="success" onClick={()=>{navigate("/authors")}}>Authors</Button>
      </TableCell>
      <BookForm addBook={addBook} bookEdit={bookEdit}/>
      <BookTable bookList={list} delBook={delBook} editBook={setBookEdit} filter={filterByAuthor}/>
    </Context.Provider>
  )
}

export default BooksList