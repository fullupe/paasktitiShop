import ModalPay from "../components/ModalPay";
function Login() {
    return (
        <div className="flex w-full min-h-screen justify-center items-center">

        <div>

          <form  className="flex flex-col space-y-4">
            <div className="flex flex-col items-center">
                   <div>Login</div>
              <div className="flex flex-col">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="text" title="Name" name="extra_name" id="name" className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" placeholder="Admin" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="password" title="Mobile Number" name="extra_mobile" id="number" className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" maxLength={10} placeholder="Password" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow border-collapse">
                <div className="col-lg text-center mt-2">
                  <button type="submit" className=" button btn btn-primary ipay-btn btn-block" style={{padding: '8px 11px'}}><strong>LogIn</strong></button>
                </div>
              </div>
          </form>
          </div>
          </div>
        
    )
}

export default Login
