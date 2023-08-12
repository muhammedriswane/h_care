import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Editprofile = () => {
  return (
    <div className='edit_maindiv' >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>
        <div className='edit_subdiv1 '>
        <TextField
          required
          id="filled-required"
          label="Name"
          defaultValue="Jhon"
          variant="filled"
          className='m-2'

        />
        <TextField
          required
          id="filled-required"
          label="Email"
          type='email'
          defaultValue="Jhon@gmail.com"
          variant="filled"
          className='m-2'
        />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            className='m-2'

          />
        <TextField
          id="filled-password-input"
          label="Current Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          className='m-2'

        />
        <TextField
          id="filled-password-input"
          label="New Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          className='m-2'

        />
        <TextField
          id="filled-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          className='m-2'

        />
        <Button variant='contained' className='m-2' sx={ { borderRadius: 28,width:100 } }>Submit</Button>

            
        </div>
    </div>
  )
}

export default Editprofile