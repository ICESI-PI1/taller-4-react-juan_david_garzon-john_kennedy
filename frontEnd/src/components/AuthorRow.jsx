import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'

function Row({author,deleteAuthor,editAuthor }) {

  const  handleDelete = () =>  {
    deleteAuthor(author.id)
  }

  const  handleEdit = (task) =>  {
    editAuthor(task)
  }

  return (
    <TableRow
          key={author.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{author.name}</TableCell>
          <TableCell align="left">{author.nationality}</TableCell>
          <TableCell align="left">
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>&nbsp;
            <Button variant="contained" color="success" onClick={()=>{handleEdit(author)}}>Edit</Button>
          </TableCell>
        </TableRow>  )
}

Row.propTypes = {
  author: PropTypes.object,
  deleteAuthor: PropTypes.func,
  editAuthor: PropTypes.func
}

export default Row
