import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { error } from "jquery";

export function ForgotPassword() {



    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [newotp1, setNewotp] = useState({
        newotp: "",
        email: user.email
    });

    console.log("use get is" + user);

    function handler(e) {
        const { name, value } = e.target;
        setEmail({
            ...email,
            [name]: value,
        });
    }



    const navigate = useNavigate();
    //set OTp
    function handlerotp(e1) {
        const { name, value } = e1.target;
        setNewotp({
            ...newotp1,
            ...email,
            [name]: value,
        });
    }

    function handler1(event) {
        event.preventDefault();
        let promise1 = axios.post("http://localhost:8081/forgotpass/verifymail", email);
        promise1.then(response => {

            localStorage.setItem("key", response.data)
            const result = response.data;

            console.log(result);
            setUser(result);
            if(result!=null){
                alert("OTP Send On Register Email")
            }

        });
        promise1.catch((error) => {
            alert("Your Email Not Register Yet");
        })
    }



    //   localStorage.setUser('user', JSON.stringify(user));



    function handler2(event1) {
        event1.preventDefault();
        //  const newotp=JSON.stringify(newotp1);

        console.log("newotp is" + newotp1);
        let promise1 = axios.post("http://localhost:8081/forgotpass/otpvfn", newotp1);
        promise1.then(response => {
            const result = response.data;

            console.log("inside otp varification" + response.data)
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(result);
            
            if (result != null) {
               
                navigate("/newpassword")
            }
        });
        promise1.catch((error) => {
            alert("Invalid OTP Please Enter Correct OTP");
        })
    }



    return (
        <>
            <div className="form_div">
                <label>Enter Your Email</label>
                <input
                    id="enteremail"
                    className="field_class"

                    name="email"
                    type="email"
                    placeholder="Enter email"
                    // value={email}
                    onChange={handler}
                />
                <button
                    className="submit_class"
                    type="submit"
                    onClick={handler1}
                >
                    Get-OTP
                </button>
            </div>
            <div>
                <table id="tbl">
                    <tr>
                        <th>First-Name</th>
                        <th>Last-Name</th>
                        <th>Enter OTP</th>
                    </tr>
                    <tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>
                            <label>OTP:</label>
                            <input id="newotp" type="number" name="newotp"
                                //   value={newotp1.otp}
                                onChange={handlerotp}
                            ></input> &emsp;
                        <button onClick={handler2}>Submit OTP</button>
                        </td>
                    </tr>
                </table>
            </div>


        </>
    )
}