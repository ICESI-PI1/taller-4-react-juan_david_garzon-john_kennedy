import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import Row from './BookRow'

function  BookTable ({bookList, delBook, editBook}) {

  const  renderBooks = () => {
    return  bookList.map((book)=>
         (<Row key={book.id} book={book} delBook={delBook} editBook={editBook}/>)
    )
  }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Title</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="left">Author</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderBooks()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


BookTable.propTypes = {
  bookList: PropTypes.array,
  delBook: PropTypes.func,
  editBook: PropTypes.func
}

export default BookTable
