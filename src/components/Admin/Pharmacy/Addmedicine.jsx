import React, { useState } from 'react'
import { Button } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import {TextField} from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';


const patients = [
    { label: 'Arjun', year: 1994 },
    { label: 'Rohan', year: 1972 },
    { label: 'Abulla', year: 1974 },
    { label: 'kishor', year: 2008 },
  ]
  

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
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
  

const Addmedicine = () => {

    const [addmoreitem,setaddmoreitem]=useState([false])
    const clickAddBtn=(index)=>{
        const newaddmoreitem=[...addmoreitem]
        newaddmoreitem[index]=true
        setaddmoreitem(newaddmoreitem)
    }

  return (
    <div className='Dashboard_maindiv'>
    <div className='d-flex'>
        <Button variant='contained' className='m-2' sx={ { borderRadius: 28,height:30 } } >Purchace</Button>
        <Button variant='contained'  className='m-2' sx={ { borderRadius: 28,height:30 }} >Sales</Button>
        <Button variant='contained'  className='m-2' sx={ { borderRadius: 28,height:30 } } >Expired</Button>
        <Button variant='contained'  className='m-2' sx={ { borderRadius: 28 ,height:30} } >Inventory</Button>
    </div>
    <div className='addmedicine_subdiv p-2'>
        <div className='d-flex justify-content-between '>
            <h6>Bill No:110</h6>
            <h6>Date:24/8/2022</h6>
         </div>
         <div className='d-flex justify-content-center'>
            <h6>
            Cash Bill (License No. KA-B12-159413/17)<br></br>
            KRUTHIKA PHARMA<br></br>
            Nanjappa Cross, Vidyaranyapura Main Road, Bangalore - 560097
            </h6>
         </div>
         <div className='d-flex justify-content-between'>
            <h6>Name:Arjun</h6>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={patients}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Doctor" />}
            />
        </div>
        <div className='pt-3'>
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Quantity</StyledTableCell>
            <StyledTableCell align="center">Items</StyledTableCell>
            <StyledTableCell align="center">MRP</StyledTableCell>
            <StyledTableCell align="center">Expiry Date</StyledTableCell>
            <StyledTableCell align="center" >Services</StyledTableCell>     
            <StyledTableCell align="center">MRP</StyledTableCell>    
            <StyledTableCell align="center">Total</StyledTableCell>
            <StyledTableCell align="center">Add More</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" style={{width:'10px'}}>
                <TextField
                    required
                    id="filled-required"
                    label=""
                    type='text'
                    defaultValue=""
                    variant="filled"
                    
                    />
              </StyledTableCell>
              <StyledTableCell align="right">
              <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={patients}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="items" />}
              style={{width:'200px'}}
            />
              </StyledTableCell>
              <StyledTableCell align="right">
              <TextField
                    required
                    id="filled-required"
                    label=""
                    type='number'
                    defaultValue=""
                    variant="filled"
                   
                    />
              </StyledTableCell>
              <StyledTableCell align="right">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    label=""
                    >

                    </DatePicker>
                </LocalizationProvider>
              </StyledTableCell>
              <StyledTableCell align="right">
              <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={patients}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Services" />}
              style={{width:'200px'}}
            />
            </StyledTableCell>
              <StyledTableCell align="right">
              <TextField
                    required
                    id="filled-required"
                    label=""
                    type='number'
                    defaultValue=""
                    variant="filled"
                   
                    />
            </StyledTableCell>
              <StyledTableCell align="right">
              <TextField
                    required
                    id="filled-required"
                    label=""
                    type='number'
                    defaultValue=""
                    variant="filled"
                   
                    />
            </StyledTableCell>
            <StyledTableCell align="right">
            <Button variant='contained' onClick={() => clickAddBtn(0)}><AddIcon/></Button>       
                 </StyledTableCell>
           
        </StyledTableRow>
        {addmoreitem.map((isVisible, index) => isVisible &&(
            <StyledTableRow  key={index}>
            <StyledTableCell component="th" scope="row" style={{width:'10px'}}>
              <TextField
                  required
                  id="filled-required"
                  label=""
                  type='text'
                  defaultValue=""
                  variant="filled"
                  
                  />
            </StyledTableCell>
            <StyledTableCell align="right">
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={patients}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="items" />}
            style={{width:'200px'}}
          />
            </StyledTableCell>
            <StyledTableCell align="right">
            <TextField
                  required
                  id="filled-required"
                  label=""
                  type='number'
                  defaultValue=""
                  variant="filled"
                 
                  />
            </StyledTableCell>
            <StyledTableCell align="right">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                  label=""
                  >

                  </DatePicker>
              </LocalizationProvider>
            </StyledTableCell>
            <StyledTableCell align="right">
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={patients}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Services" />}
            style={{width:'200px'}}
          />
            </StyledTableCell>
            <StyledTableCell align="right">
              <TextField
                    required
                    id="filled-required"
                    label=""
                    type='number'
                    defaultValue=""
                    variant="filled"
                   
                    />
            </StyledTableCell>
            <StyledTableCell align="right">
            <TextField
                  required
                  id="filled-required"
                  label=""
                  type='number'
                  defaultValue=""
                  variant="filled"
                 
                  />
          </StyledTableCell>
          <StyledTableCell align="right">
          <Button variant="contained" onClick={() => clickAddBtn(index)}>
                <AddIcon/>
         </Button>
         </StyledTableCell>
         
      </StyledTableRow>

        ))}

        </TableBody>
      </Table>
    </TableContainer>
        </div>

    </div>

</div>
  )
}

export default Addmedicine
           
            
            
           

            