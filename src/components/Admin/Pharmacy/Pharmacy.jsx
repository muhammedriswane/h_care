import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Pharmacy = () => {
    const navigate=useNavigate()
  return (
    <div className='Dashboard_maindiv'>
        <div className='d-flex'>
            <Button variant='contained' className='m-2' sx={ { borderRadius: 28,height:30 } } onClick={()=>{navigate('purchase')}}>Purchace</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28,height:30 }} onClick={()=>{navigate('sales')}} >Sales</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28,height:30 } } >Expired</Button>
            <Button variant='contained'  className='m-2' sx={ { borderRadius: 28 ,height:30} } >Inventory</Button>


        </div>

    </div>
  )
}

export default Pharmacy