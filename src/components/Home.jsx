import React from "react";
import Navpad from './Navpad'
import { Outlet } from "react-router-dom";


function NavScrollExample() {
  // const images=[
  //   '/images/dashmain.avif'
  // ]
  return (
    <div >
      <Navpad/>
        <div className="Home_maindiv">
          <div>

    {/* <img src={process.env.PUBLIC_URL + images[0]}  className='dashimage'></img> */}
    </div>
    <Outlet />
   </div>
</div>
  );
}

export default NavScrollExample;