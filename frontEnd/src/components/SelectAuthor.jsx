import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from  '../config/axios'
import PropTypes from 'prop-types'

export default function SelectLabels({setAuthor}) {
  const [authorList, setAuthorList] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target.value)
    setAuthor(event.target.value);
  };

  const getAuthors = async () => {
    try {
       const res = await axios.get("/autores", {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }},)
        setAuthorList(res.data)
    }catch(e){
      console.log(e)
    }
  }

  const  renderTasks = () => {
    return  authorList.map((author)=>
         (<MenuItem value={author} key={author.id} >{author.name}</MenuItem>)
    )
  }

    React.useEffect( () => {getAuthors()}, [])
  

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Author</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Author"
          onChange={handleChange}
        >
          {renderTasks()}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </div>
  );
}

SelectLabels.propTypes = {
  setAuthor: PropTypes.func, 
}
