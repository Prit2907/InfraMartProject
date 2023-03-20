import "../Checkout/Checkout.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();

  useEffect(() => {
    const var1 = localStorage.getItem("loginuser");
    //   var2 = JSON.parse(var1);
    if (var1 == null) {
      alert("Please Login First");
      navigate("/login");
    }
  });

  return (
    <>
      <section className="section">
        <div class="">
          <div class="row">
            <div class="">
              {/* <h1>You can see my Order Form</h1>
                            <span>with some explanation below</span> */}
              {/* <hr class="mt-1" /> */}
            </div>

            <div class="col-12">
              <div class="row mx-4">
                <div class="col-12">
                  <label class="order-form-label">Name</label>
                </div>
                <div class="col-sm-6">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form1"
                      class="form-control order-form-input"
                    />
                    <label class="form-label" for="form1">
                      First Name
                    </label>
                  </div>
                </div>
                <div class="col-sm-6 mt-2 mt-sm-0">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form2"
                      class="form-control order-form-input"
                    />
                    <label class="form-label" for="form2">
                      Last Name
                    </label>
                  </div>
                </div>
              </div>

              <div class="row mt-3 mx-4">
                <div class="col-12">
                  <label class="order-form-label">Adress</label>
                </div>
                <div class="col-12">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form5"
                      class="form-control order-form-input"
                    />
                    <label class="form-label" for="form5">
                      Street Address
                    </label>
                  </div>
                </div>

                <div class="col-sm-6 mt-2 pe-sm-2">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form7"
                      class="form-control order-form-input"
                    />
                    <label class="form-label" for="form7">
                      City
                    </label>
                  </div>
                </div>
                <div class="col-sm-6 mt-2 ps-sm-0">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form8"
                      class="form-control order-form-input"
                    />
                    <label class="form-label" for="form8">
                      Region
                    </label>
                  </div>
                </div>
                <div class="col-sm-6 mt-2 pe-sm-2">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form9"
                      class="form-control order-form-input"
                    />
                    <label class="form-label" for="form9">
                      Postal / Zip Code
                    </label>
                  </div>
                </div>
                <div class="col-sm-6 mt-2 ps-sm-0">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10"
                      class="form-control order-form-input"
                    />
                    <label class="form-label" for="form10">
                      Country
                    </label>
                  </div>
                </div>
                <div class="col-sm-6 mt-2 pe-sm-2">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form9"
                      class="form-control order-form-input"
                    />
                    <label class="form-label" for="form9">
                      Payble Amount
                    </label>
                  </div>
                </div>
                <div class="col-sm-6 mt-2 ps-sm-0">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form10"
                      class="form-control order-form-input"
                    />
                    <label class="form-label" for="form10">
                      Total Amount (including GST)
                    </label>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <button
                    type="button"
                    id="btnSubmit"
                    class="btn btn-primary d-block mx-auto btn-submit"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
