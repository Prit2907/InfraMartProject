import "../Header/Header.css";
export default function Header() {
  const var1 = localStorage.getItem("loginuser");
  console.log(var1);
  const var2 = JSON.parse(var1);
  //   console.log(var2.role);
  // const role=localStorage.getItem("role");
  // console.log(role)

  return (
    <center className="Header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            InfraMart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/product"
                >
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="register">
                  SignUp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shopmart">
                  ShopingMart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/checkout">
                  Checkout
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/uploadimage">
                  UploadImage
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/showcart">
                  ShowCart
                </a>
              </li>
              {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <li className="nav-item">
                {var2 != null ? (
                  <input
                    style={{ backgroundColor: "greenyellow", width: "85px" }}
                    value={var2.firstName}
                  ></input>
                ) : (
                  ""
                )}
              </li>{" "}
              &emsp;
              <li className="nav-item">
                {var1 != null ? (
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      localStorage.removeItem("loginuser");
                    }}
                  >
                    Log-Out
                  </button>
                ) : (
                  ""
                )}
              </li> */}
                         
            </ul>

            <form className="d-flex" role="search">
                           {var2 != null ? (
                  <input
                    style={{ backgroundColor: "greenyellow", width: "85px" }}
                    value={var2.firstName}
                  ></input>
                ) : (
                  ""
                )}
                &emsp;
                             {var1 != null ? (
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      localStorage.removeItem("loginuser");
                    }}
                  >
                    Log-Out
                  </button>
                ) : (
                  ""
                )}
                        </form> 
          </div>
        </div>
      </nav>
    </center>
  );
}
