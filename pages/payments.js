import { selectItems, selectTotal} from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
function Payments() {
    const total = useSelector(selectTotal);
    
	return (
		<div>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />
  <style type="text/css" dangerouslySetInnerHTML={{__html:".fonts{font-size: 12.5px;}.ipay-btn{background-color: #04448C;border-color: #04448C;border-radius: 17px !important;}.modal{width: 27% !important;}.modal-header{padding-left:48px !important;padding-right: 48px !important;border-bottom: none !important;text-align: center !important;}.modal-footer{height: 120px;padding-left:48px !important;padding-right: 48px !important;margin-bottom: -17px !important;border-top: none !important;}.modal-body{margin-bottom: -25px;padding-right: 48px !important;padding-left: 48px !important;border-bottom: none !important;margin-top: -27px;}#close:hover{text-decoration: none !important;}.logo{width: 65px;height: 65px;}" }} />
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-xs-3 col-sm-5">
        <div className="input-group-prepend">
          <button type="button" className="btn btn-primary ipay-btn" data-toggle="modal" data-target="#ipayModal">Make Payment</button>
        </div>
      </div>
    </div>
    <div id="ipayModal" className="modal fade m-auto flex flex-grow" role="dialog" data-keyboard="true" data-backdrop="true">
      <div className="modal-dialog flex">
        <div className="modal-content">
          <div className="modal-header">
            <img src="http://fpoimg.com/95x65?text=Logo" className="mx-auto d-block logo" />
          </div>
          <form action="https://manage.ipaygh.com/gateway/checkout" id="ipay_checkout" method="post" name="ipay_checkout" target="_blank" className="">
            <div className="modal-body">
              <legend className="text-center mt-1 ">Make Payment</legend>
              <input name="merchant_key" type="hidden" defaultValue="tk_c882ed60-0f4e-11e9-b30b-f23c9170642f" />
              <input id="merchant_code" type="hidden" defaultValue="TST000000002316" />
              <input name="source" type="hidden" defaultValue="WIDGET" />
              <input name="success_url" type="hidden" defaultValue="http://localhost:3000/successful" />
              <input name="cancelled_url" type="hidden" defaultValue="http://localhost:3000/cancelled" />
              <input id="invoice_id" name="invoice_id" type="hidden" defaultValue />
              <div className="row">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="text" title="Name" name="extra_name" id="name" className="form-control" placeholder="First & Last Name" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="tel" title="Mobile Number" name="extra_mobile" id="number" className="form-control" maxLength={10} placeholder="Contact Number" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="email" name="email" id="extra_email" className="form-control" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input type="text" name="total" className="form-control" value="total"   id={total} placeholder="Amount(GH???)" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg">
                  <div className="form-group input-group">
                    <input className="form-control" type="text" name="description" id="description" placeholder="Description of Payment" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg">
                  <button type="submit" className="btn btn-primary ipay-btn btn-block" style={{padding: '8px 11px'}}><strong>Pay</strong></button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg text-center mt-2">
                  <a href data-dismiss="modal" id="close">Cancel</a>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center ">
              <div className="row">
                <div className="col-lg">
                  <img src="https://payments.ipaygh.com/app/webroot/img/iPay_payments.png" style={{width: '100%'}} className="img-fluid mr-auto" alt="Powered by iPay" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
           <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
			{/* <script type="text/javascript">(function(){Date.prototype.today = function () { return  this.getFullYear()+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +((this.getDate() < 10)?"0":"") + this.getDate();};Date.prototype.timeNow = function () { return ((this.getHours() < 10)?"0":"") + this.getHours() +((this.getMinutes() < 10)?"0":"") + this.getMinutes() +((this.getSeconds() < 10)?"0":"") + this.getSeconds();};document.getElementById("invoice_id").value = document.getElementById("merchant_code").value+ new Date().today() + new Date().timeNow();})();</script> */}
</div>


	)
}

export default Payments;
