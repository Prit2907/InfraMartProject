import { useState } from "react";
import axios from "axios";
import "../AdminUser/AddAdminUser.css";
import { useNavigate } from "react-router-dom";

export function AddAdminUser() {
  const [addrole, setAddrole] = useState("");
  const [adduser, setAdduser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  function handler(e) {
    const { name, value } = e.target;
    setAdduser({ ...adduser, [name]: value });
  }

  function handler1(event) {
    event.preventDefault();
    let promise1 = axios.post("http://localhost:8081/home/signup", adduser);
    promise1.then((response) => {
      const result = response.data;

      console.log(result);
      alert("Added Succefully");
      navigate("/admin");

      // if (response.data.email != null) {
      //     navigate("/login")
      // }
    });
    promise1.catch((error) => {});
  }
  return (
    <>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Form</title>
          <link href="css/style.css" type="text/css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </head>
        <body>
          <div class="container12">
            <form autoComplete="on">
              <div class="box">
                <label for="firstName" class="fl fontLabel">
                  {" "}
                  First Name:{" "}
                </label>
                <div class="new iconBox">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div class="fr">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    class="textBox"
                    autoFocus="on"
                    required
                    value={adduser.firstName}
                    onChange={handler}
                  />
                </div>
                <div class="clr"></div>
              </div>
              <div class="box">
                <label for="secondName" class="fl fontLabel">
                  {" "}
                  Last Name:{" "}
                </label>
                <div class="fl iconBox">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div class="fr">
                  <input
                    type="text"
                    required
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    class="textBox"
                    value={adduser.lastName}
                    onChange={handler}
                  />
                </div>
                <div class="clr"></div>
              </div>
              <div class="box">
                <label for="email" class="fl fontLabel">
                  {" "}
                  Email ID:{" "}
                </label>
                <div class="fl iconBox">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="fr">
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    placeholder="Email Id"
                    class="textBox"
                    value={adduser.email}
                    onChange={handler}
                  />
                </div>
                <div class="clr"></div>
              </div>

              <div class="box">
                <label for="password" class="fl fontLabel">
                  {" "}
                  Password{" "}
                </label>
                <div class="fl iconBox">
                  <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="fr">
                  <input
                    type="Password"
                    required
                    id="password"
                    name="password"
                    placeholder="Password"
                    class="textBox"
                    value={adduser.password}
                    onChange={handler}
                  />
                </div>
                <div class="clr"></div>
              </div>
              <div class="box">
                <label for="password" class="fl fontLabel">
                  {" "}
                  Role{" "}
                </label>
                <div class="fl iconBox">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div id="uslist">
                  {/* value={selected} 
                                 onChange={e => setSelected(e.target.value)} */}
                  <select
                    id="role"
                    name="role"
                    //   onClick={handler}
                    //   value={adduser.role}
                    value={adduser.role}
                    onChange={handler}
                  >
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="user">User</option>
                  </select>
                  {/* </input> */}
                </div>
                <div class="clr"></div>
              </div>
              <div class="box"></div>
              <div class="box1">
                <input
                  type="Submit"
                  name="Submit"
                  class="submit"
                  onClick={handler1}
                  value="SUBMIT"
                />
                {/* <tab></tab>

                                <a href='/login'
                                    style={{ fontSize: "20px" }}>Login</a> */}
                {/* <div > */}
                <button id="backToAdmin123">
                  <a id="loginurl" href="/login">
                    Login
                  </a>
                </button>
                <div id="backToAdmin123">
                  <button>
                    <a href="/admin">Back-To-Admin-Portal</a>
                  </button>
                </div>
                {/* </div> */}
              </div>
            </form>
          </div>
        </body>
      </html>
    </>
  );
}
