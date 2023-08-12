import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Home from '../Home'
import LoginPage from '../LoginPage'
import All from './Dashboard/All'
import Profile from './Profile/Profile'
import Editprofile from './Profile/Editprofile'
import Pharmacy from './Pharmacy/Pharmacy'
import Purchase from './Pharmacy/Purchase'
import Sales from './Pharmacy/Sales'
import Expired from './Pharmacy/Expired'
import Inventory from './Pharmacy/Inventory'
import Salesviewall from './Pharmacy/Salesviewall'
import Addmedicine from './Pharmacy/Addmedicine'
const AdminMain = () => {
  return (
    <div>
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<LoginPage/>}></Route>

          <Route path="/Home" element={<Home/>}>

            {/* dashbordroutes */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/all" element={<All/>} />

            {/* Profileroutes */}
            <Route path="profile" element={<Profile/>} />
            <Route path="profile/editprofile" element={<Editprofile/>} />

            {/* Pharmacyroutes */}
            <Route path="pharmacy" element={<Pharmacy/>} />
            <Route path="pharmacy/purchase" element={<Purchase/>} />
            <Route path="pharmacy/sales" element={<Sales/>} />
            <Route path="pharmacy/expired" element={<Expired/>} />
            <Route path="pharmacy/inventory" element={<Inventory/>} />
            <Route path="pharmacy/sales/viewall" element={<Salesviewall/>} />
            <Route path="pharmacy/sales/viewall/addmedicine" element={<Addmedicine/>} />



            




            


            
          </Route>

          
      </Routes>

      </BrowserRouter>
      
        
    </div>
  )
}

export default AdminMain