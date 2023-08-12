import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const sample = [
    [1,  24/8/2000,1, 'vijay', 'prashand',500,400,200,1100],
    [2,  24/8/2000,1, 'Das', 'kavitha',500,400,200,1100],
    [3,  24/8/2000,1, 'sachin', 'malaykka',500,400,200,1100],
    [3,  24/8/2000,1, 'kaleel', 'prashand',500,400,200,1100],
    [5,  24/8/2000,1, 'Jabbar', 'zain',500,400,200,1100],
    [6,  24/8/2000,1, 'Roshan', 'prashand',500,400,200,1100],
    [7,  24/8/2000,1, 'Roshan', 'prashand',500,400,200,1100],
    [8,  24/8/2000,1, 'Roshan', 'prashand',500,400,200,1100],
    [9,  24/8/2000,1, 'Roshan', 'prashand',500,400,200,1100],
    [10,  24/8/2000,1, 'Roshan', 'prashand',500,400,200,1100],
    [11,  24/8/2000,1, 'Roshan', 'prashand',500,400,200,1100],


  ];
  
  function createData(id,SI, Date,Token, Doctors, Patients, Consultation, Pharmacy,Services,Total) {
    return { id,SI, Date,Token, Doctors, Patients, Consultation, Pharmacy,Services,Total };
  }
  
  const columns = [
    {
      width: 50,
      label: 'SI',
      dataKey: 'SI',
    },
    {
      width: 30,
      label: 'Date',
      dataKey: 'Date',
    //   numeric: true,
    },
    {
      width: 30,
      label: 'Token',
      dataKey: 'Token',
    //   numeric: true,
    },
    {
      width: 40,
      label: 'Doctors',
      dataKey: 'Doctors',
    //   numeric: true,
    },
    {
      width: 40,
      label: 'Patients',
      dataKey: 'Patients',
    //   numeric: true,
    },
    {
        width: 40,
        label: 'Consultation',
        dataKey: 'Consultation',
      //   numeric: true,
      },
      {
        width: 40,
        label: 'Pharmacy',
        dataKey: 'Pharmacy',
      //   numeric: true,
      },
      {
        width: 40,
        label: 'Services',
        dataKey: 'Services',
      //   numeric: true,
      },
      {
        width: 40,
        label: 'Total',
        dataKey: 'Total',
      //   numeric: true,
      },
      
  ];
  
  const rows = sample.map((rowData, index) => createData(index + 1, ...rowData));


  
  const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  };
  
  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || false ? 'right' : 'left'}
            style={{ width: column.width }}
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }
  
  function rowContent(_index, row) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? 'right' : 'left'}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }
  
  
  const Dashboard = () => {


  const navigate=useNavigate()
  return (
    
    
    <div className='Dashboard_maindiv'>
      <div>
        <div className='d-flex'>
            <Button variant='contained' className='m-2' sx={ { borderRadius: 28 } } onClick={()=>{navigate('all')}}>All</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28 } } onClick={()=>{navigate('/Home/dashboard')}}>Today</Button>
        </div>

        <div className='pt-3'>
             <Paper style={{ height: 400, width: '100%' }}>
              <TableVirtuoso
                data={rows}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
                />
              </Paper>
        </div>
      </div>
    </div>
  )
}

export default Dashboard