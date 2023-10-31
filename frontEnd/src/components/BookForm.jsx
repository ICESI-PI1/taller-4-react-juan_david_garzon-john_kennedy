import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField} from '@mui/material'
import SelectAuthor from './SelectAuthor'

function AuthorForm({addBook, bookEdit}) {
    const [id, setId] =  useState('')
    const [title, setTitle] =  useState('')
    const [releaseDate , setReleaseDate] =  useState('')
    const [author , setAuthor] =  useState('')

    useEffect(()=>{
      setId(bookEdit.id)
      setTitle(bookEdit.title)
      setReleaseDate(bookEdit.releaseDate)
      setAuthor(bookEdit.author)
    }, [bookEdit])

    const handleClick = ()=>{
      let book = {
        id:id,
        title:title, 
        releaseDate:releaseDate, 
        author:author}
      addBook(book)
    }

    return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="title" variant="standard" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      <TextField label="releaseDate" variant="standard" value={releaseDate} onChange={(e)=>{setReleaseDate(e.target.value)}}/>
      <SelectAuthor setAuthor={setAuthor}/>
      <Button variant="contained" onClick={handleClick}>Save</Button>
    </Box>
  )
}

AuthorForm.propTypes = {
    addBook: PropTypes.func, 
    bookEdit:PropTypes.object
}

export default AuthorForm
