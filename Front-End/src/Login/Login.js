import { useState } from "react";
import axios from "axios";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });


  const navigate = useNavigate();

  function handler(e) {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  }

  // let [theres, setres] = useState(null)

  function handler1(event) {
    event.preventDefault();
    let promise1 = axios.post("http://localhost:8081/home/login", user);
    promise1.then(response => {

      const result = response.data;

      setTimeout(function () {
        alert("😇Welcome" + "--" + response.data.firstName);
      }, 0);

      var value = response.data;
      const { email, ...values } = value
      localStorage.setItem("email",response.data.email)
      localStorage.setItem("loginuser",JSON.stringify(value))
      localStorage.setItem("rolecheck",JSON.stringify(response.data))

      if (response.data.role === "admin") {
        navigate("/admin")
      }
      else if (response.data.role === "user") {
        navigate("/product")
      }
      else if (response.data.role === "manager") {
        navigate("/manager")

      }

    });


    promise1.catch((error) => {
      alert("😵‍💫😵‍💫 Invalid Credentials");
    })
  }

  return (
    <>

      <header>
        <h1>Welcome to InfraMart</h1>
      </header>
      <main>
        <form
          className="form_class" >
          <div className="form_div">
            <label>Email:</label>
            <input
              className="field_class"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
              autoFocus
              value={user.email}
              onChange={handler}
            />
            <label>Password:</label>
            <input
              id="password"
              className="field_class"

              name="password"
              type="password"
              placeholder="Enter Your Password"
              value={user.password}
              onChange={handler}
            />
            <button
              className="submit_class"
              type="submit"
              onClick={handler1}
            >
              Login
            </button>
          </div>
          <div className="info_div">
            <p>
              Register If Do Not Have Account{" "}
              <a href="/register">register</a>
            </p>
          </div>
          <div className="info_div">
            <p>
              {" "}
              <a href="/forgotpassword">ForgotPassword</a>
            </p>
          </div>
        </form>
      </main>

      <footer>
        <p>
          InfraMart.in <a href="/about">inframart&trade;</a>
        </p>
      </footer>

    </>
  );
}
