import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables() {

  const [showAdditionalField, setShowAdditionalField] = useState(false)
  const clicktaxbtn=()=>{
    setShowAdditionalField(true)
  }
  return (
    <div className='Dashboard_maindiv'>
      <div className='d-flex'>
            <Button variant='contained' className='m-2' sx={ { borderRadius: 28,height:30 } } >Purchace</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28,height:30 } } >Sales</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28,height:30 } } >Expired</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28 ,height:30} } >Inventory</Button>


        </div>

          
   
  <div className='pt-4' >
    <div className='d-flex'>
      <h6>Allow Purchase Entry Of Drugs With More Than</h6>
              <input type='number' style={{width:'50px',height:'23px',border:'none',borderRadius:'28px',opacity:'0.8'}} className='ml-2 mr-2'></input>
              <h6>days</h6>
      </div>
 <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell align="center">Items</StyledTableCell>
            <StyledTableCell align="center">No of Boxes</StyledTableCell>
            <StyledTableCell align="center">No of Strips/Bottles</StyledTableCell>
            <StyledTableCell align="center">Tablets/Qty</StyledTableCell>
            <StyledTableCell align="center" >Tax%
            
              <Button
                variant='outlined'
                style={{ backgroundColor: 'black', color: 'white', borderColor: 'white' }}
                onClick={clicktaxbtn}
              >
                /unit
              </Button>
    
            </StyledTableCell>            <StyledTableCell align="center">Total units</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
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
                    {showAdditionalField && (
              <TextField
                required
                id="filled-required"
                label="/unit"
                type='number'
                defaultValue=""
                variant="filled"
              />
            )}
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
            </StyledTableRow>

            <StyledTableRow>
                <StyledTableCell component="th" scope="row">Expiry Date</StyledTableCell>
                <StyledTableCell align='center' >Barcode</StyledTableCell>
                <StyledTableCell align='center'>Cost Per Box</StyledTableCell>
                <StyledTableCell align='center'>Cost</StyledTableCell>
                <StyledTableCell align='center'>Cost/tab</StyledTableCell>
                <StyledTableCell align='center'>Cost/Unit</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" style={{width:'180px'}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    label=""
                    >

                    </DatePicker>
                </LocalizationProvider>
              </StyledTableCell>
              <StyledTableCell align="right">
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
              
            </StyledTableRow>

            <StyledTableRow>
                <StyledTableCell component="th" scope="row"></StyledTableCell>
                <StyledTableCell align='center' ></StyledTableCell>
                <StyledTableCell align='center'>MRP/box</StyledTableCell>
                <StyledTableCell align='center'>MRP</StyledTableCell>
                <StyledTableCell align='center'>MRP</StyledTableCell>
                <StyledTableCell align='center'>MRP/Unit</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                
              </StyledTableCell>
              <StyledTableCell align="right">
              
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
                    className='m-2'
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
              <StyledTableCell align="center">
                <Button variant='contained'>Add</Button>
              
              </StyledTableCell>
              
            </StyledTableRow>

            
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>

  );
}