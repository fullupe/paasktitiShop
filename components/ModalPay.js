function ModalPay({total}) {
    return (
        <div>
            <div id="ipayModal" className="modal fade m-auto" role="dialog" data-keyboard="true" data-backdrop="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <img src="http://fpoimg.com/95x65?text=Logo" className="mx-auto d-block logo" />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8  mt-2 text-gray-600 font-bold md:w-80">
          <form action="https://manage.ipaygh.com/gateway/checkout" id="ipay_checkout" method="post" name="ipay_checkout" className="flex flex-col space-y-4" target="_blank">
            <div className="modal-body">
              <legend className="text-center mt-1">Make Payment</legend>
              <input name="merchant_key" type="hidden" Value="tk_c882ed60-0f4e-11e9-b30b-f23c9170642f" />
              <input id="merchant_code" type="hidden" Value="TST000000002316" />
              <input name="source" type="hidden" Value="WIDGET" />
              <input name="success_url" type="hidden" Value="http://localhost:3000/successful" />
              <input name="cancelled_url" type="hidden" Value="http://localhost:3000/cancelled" />
              <input id="invoice_id" name="invoice_id" type="hidden" Value={total} />
              <div className="flex flex-col">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="text" title="Name" name="extra_name" id="name" className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" placeholder="First & Last Name" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="tel" title="Mobile Number" name="extra_mobile" id="number" className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" maxLength={10} placeholder="Contact Number" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="email" name="email" id="extra_email" className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="text" name="total" value={total} className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"    id={total}  placeholder="Amount(GH₵)" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" type="text" name="description" id="description" placeholder="Description of Payment" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-grow border-collapse bg-red-200">
                <div className="col-lg text-center mt-2">
                  <button type="submit" className=" button btn btn-primary ipay-btn btn-block" style={{padding: '8px 11px'}}><strong>Pay</strong></button>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="col-lg text-center mt-2">
                  <a href data-dismiss="modal" id="close">Cancel</a>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center ">
              <div className="flex flex-col">
                <div className="flex ">
                  <img src="https://payments.ipaygh.com/app/webroot/img/iPay_payments.png" style={{width: '100%'}} className="img-fluid mr-auto" alt="Powered by iPay" />
                </div>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
            
        </div>
    )
}

export default ModalPay
