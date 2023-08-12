import React from 'react'
import {Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { useNavigate } from 'react-router-dom';



const patients = [
  { label: 'Arjun', year: 1994 },
  { label: 'Rohan', year: 1972 },
  { label: 'Abulla', year: 1974 },
  { label: 'kishor', year: 2008 },
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(token, name, phone, email, medicinbtn) {
  return { token, name, phone, email, medicinbtn };
}

const rows = [
  createData(1,'Arjun', 8765432099, 'Arjun1@gmail.com'),
  createData(2,'Rahul', 8765432098, 'Rahul1@gmail.com'),
  createData(3,'Azeez', 8765432097, 'Azeez1@gmail.com'),
  createData(4,'Jhon', 8765432096, 'Jhon1@gmail.com'),
  createData(5,'jabbar', 8765432099, 'Jabbar@gmail.com'),
  createData(5,'jabbar', 8765432099, 'Jabbar@gmail.com'),

  createData(5,'jabbar', 8765432099, 'Jabbar@gmail.com'),
  createData(5,'jabbar', 8765432099, 'Jabbar@gmail.com'),


  
];


const Salesviewall = () => {
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
          <Button variant='contained' endIcon={<ExpandMoreIcon/>}>View all</Button>
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
              options={patients}
              sx={{ m:1,width: 300 }}
              renderInput={(params) => <TextField {...params} label="Patient" />}
            />
          </div>
      </div>
      <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Token</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Phone No</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Add Medicine</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.token}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" 
              endIcon={<MedicalServicesIcon/>}onClick={()=>{navigate('addmedicine')}}>
                Add</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </div>

    </div>
  )
}

export default Salesviewall