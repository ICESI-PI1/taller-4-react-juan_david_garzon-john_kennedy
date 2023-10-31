import {useEffect, useState} from 'react'
//import tasks from  '../data/todos.json'
import axios from  '../config/axios'
import AuthorTable from '../components/AuthorTable'
import AuthorForm from '../components/AuthorForm'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import {  TableCell, Button} from '@mui/material'
function AuthorList() {
  const navigate = useNavigate();
  const [bookList, setAuthorList] = useState([])
  const [authorEdit, setAuthorEdit] = useState({id:"", title:"", nationality: ""})

  const getAuthors = async () => {
    try {
       const res = await axios.get("/autores", {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }},)
       setAuthorList(res.data)
    }catch(e){
      console.log(e)
      if(e.status==401)
        console.log("No autorizado")
        navigate('/login')
    }
  }

  useEffect( () => {getAuthors()}, [])

  const addAuthor = async (task) => {
    if (task.id==""){
      try{
        const res = await axios.post("/autores", task, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200)
          getAuthors()
      }catch (e){
        console.log(e)
      }
    }else{
      try{
        const res = await axios.put("/autores/"+task.id, task, {
          headers: {
            Authorization:  localStorage.getItem("token"),
          }})
        if(res.status==200)
          getAuthors()
      }catch (e){
        console.log(e)
      }

    }  
  }

  const delAuthor = async (id) => {
    try {
      const res = await axios.delete("/autores/"+id, {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }})
      if(res.status==200)
        getAuthors()
    }catch (e){
      console.log(e)
    }
  }

  return (
    <Context.Provider value={{authorEdit, setAuthorEdit}}>
      <TableCell align="left">
      <Button variant="contained" color="success" onClick={()=>{navigate("/books")}}>Books</Button>
      </TableCell>
      <AuthorForm addAuthor={addAuthor} authorEdit={authorEdit}/>
      <AuthorTable authorList={bookList} deleteAuthor={delAuthor} editAuthor={setAuthorEdit}/>

    </Context.Provider>
  )
}

export default AuthorList