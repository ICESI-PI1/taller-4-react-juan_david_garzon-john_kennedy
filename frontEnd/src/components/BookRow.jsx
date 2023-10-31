import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'

function Row({book,delBook, editBook}) {
  const  handleDelete = () =>  {
    delBook(book.id)
  }

  const  handleEdit = (book) =>  {
    editBook(book)
  }

  return (
    <TableRow
          key={book.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{book.title}</TableCell>
          <TableCell align="left">{book.releaseDate}</TableCell>
          <TableCell align="right">{book.author.name}</TableCell>
          <TableCell align="left">
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>&nbsp;
            <Button variant="contained" color="success" onClick={()=>{handleEdit(book)}}>Edit</Button>
          </TableCell>
        </TableRow>  )
}

Row.propTypes = {
  book: PropTypes.object,
  delBook: PropTypes.func,
  editBook: PropTypes.func
}

export default Row
