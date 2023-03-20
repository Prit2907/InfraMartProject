import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../ForgotPassword/Newpassword.css';

export function NewPassword() {

    const navigate=useNavigate();
    const var1 = localStorage.getItem("user");
    const var2 = JSON.parse(var1);
    // console.log(var2);
    // console.log(var2.firstName)
    const [password, setPassword12] = useState("");
    console.log(password);

    const var33 = password;
    console.log("var33", var33.password)


    const [user, setuser] = useState({
        email: var2.email,
        password:""
    });

    // setuser(var33);
    console.log(user);
    
    function handler(e) {
        const { name, value } = e.target;
        setuser({
            email: var2.email,
            ...password,
            [name]: value,
        });
    }

    function handler1(event) {
        event.preventDefault();
        let promise1 = axios.post("http://localhost:8081/forgotpass/enternewpass", user);
        promise1.then(response => {
            console.log(response.data)
            const result=response.data;
            if(result!=null){
                navigate("/login")
            }
        });
    }
    // console.log(user)
    return (
        <>
            <table id="NewPasswordtable">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>New-Password</th>
                </tr>
                <tr>
                    <td><input type="text" value={var2.firstName} readOnly></input></td>
                    <td><input type="text" value={var2.lastName} readOnly></input></td>
                    <td><input type="text" value={var2.email} readOnly></input></td>
                    <td><input type="text" value={var2.role} readonly
                    ></input></td>
                    <td>
                        <input type="text" id="password" name="password"
                            // value={user.password}
                            onBlur={handler}></input>
                    </td>

                </tr>

            </table>
            <button id="buttonsubmit" onClick={handler1}>ChangePassword</button>

        </>
    )


}