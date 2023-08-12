import React from 'react'

const LoginPage = () => {
  return (
    <div className='login_div1'>
        <div className='login_div2'>
        <form>
            <div className='login_div3'>

                <h2>Login</h2>
                <div class="form-group row icon_div">
                    <label for="staticEmail" className=' pt-1 email_input' style={{color:"white"}}>Email</label>
                    <div class="col-sm-10">
                    <input type="email"   class="form-control login_input" id="staticEmail" value="email@example.com"></input>
                    <span><i class="bi bi-envelope span1"></i></span>
                    </div>
                </div>
                
                <div class="form-group row icon_div">
                    <label for="inputPassword" className=' pt-1' style={{color:"white"}}>Password</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"></input>
                    <span><i class="bi bi-person-lock span1"></i></span>
                    </div>
                </div>

                <div className='btn_div'>
                    <button type="button" className="btn btn-dark "  style={{color:"white"}}>Submit</button>
                </div>
                <a href='#' style={{color:'white'}}>Sign Up</a>
            </div>
        </form>
        </div>
    </div>
  )
}

export default LoginPage