import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper,Button } from '@mui/material'
import PropTypes from 'prop-types'
import Row from './BookRow'
import SelectAuthor from './SelectAuthor'
function  BookTable ({bookList, delBook, editBook,filter}) {
  const handClick = (author) => {
    filter(author)
  }
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
          <TableCell align="left">
            <SelectAuthor text={"Filter by author"} setAuthor={handClick}/>
          </TableCell>
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
  editBook: PropTypes.func,
  filter: PropTypes.func,
}

export default BookTable
