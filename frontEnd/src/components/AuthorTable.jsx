import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import Row from './AuthorRow'

function  AuthorTable ({authorList, deleteAuthor, editAuthor}) {

  const  renderTasks = () => {
    return  authorList.map((author)=>
         (<Row key={author.id} author={author} deleteAuthor={deleteAuthor} editAuthor={editAuthor}/>)
    )
  }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Author</TableCell>
          <TableCell align="left">Nationality</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderTasks()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


AuthorTable.propTypes = {
  authorList: PropTypes.array,
  deleteAuthor: PropTypes.func,
  editAuthor: PropTypes.func
}

export default AuthorTable
