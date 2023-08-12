import React from 'react'
import {Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';



const top100Films = [
  { label: 'Arjun', year: 1994 },
  { label: 'Rohan', year: 1972 },
  { label: 'Abulla', year: 1974 },
  { label: 'kishor', year: 2008 },
]



const Sales = () => {

  const navigate=useNavigate()

  return (
    <div className='Dashboard_maindiv'>
      <div className='d-flex'>
            <Button variant='contained' className='m-2' sx={ { borderRadius: 28,height:30 } } >Purchace</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28,height:30 }} >Sales</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28,height:30 } } >Expired</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28 ,height:30} } >Inventory</Button>
      </div>

    <div className='d-flex pt-4'>

        <div>
          <h6>Search For Patients</h6>
          <Button variant='contained' endIcon={<ExpandMoreIcon/>} onClick={()=>{navigate('viewall')}}>View all</Button>
        </div>
        <div>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">  Patient Type</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem >Out Patient</MenuItem>
              <MenuItem >In Patient</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div>
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ m:1,width: 300 }}
              renderInput={(params) => <TextField {...params} label="Patient" />}
            />
          </div>
      </div>
      

    </div>
  )
}

export default Sales