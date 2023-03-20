import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function UpdateUser() {


    const var1 = localStorage.getItem("userupdate");
    const var2 = JSON.parse(var1);
   
    const navigate=useNavigate();

    const  [role,setRole]=useState("");

    const [user, setUser] = useState({
        userId:var2.userId,
        firstName: var2.firstName,
        lastName: var2.lastName,
        email: var2.email,
        role: ""
    });
    console.log("sdfsdfsh", user)

    // console.log(var2);

    function handler(e) {
        const {name, value} = e.target;
        setUser({
            userId:var2.userId,
            firstName: var2.firstName,
            lastName: var2.lastName,
            email: var2.email,
            ...role,
            [name]: value,
        });
    }

    function handler1() {

        let promise1 = axios.post("http://localhost:8081/updateuser", user);
        console.log("inHandler1", user)
        promise1.then(response => {

            const result = response.data;
            if(result!=null){
                alert("Role Updated Succefully");
                navigate("/admin");
            }

        });
    }

    return (
        <>
            <div>
                <table id="tbluserlist">
                    <tr>
                        <th>User-First Name</th>
                        <th>User-Last Name</th>
                        <th>User-Email</th>
                        <th>Update Role</th>
                    </tr>

                    <tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td><input type="text" id="role" name="role"
                            onChange={handler}></input></td>
                    </tr>




                </table>
                <button id="updatebutton" onClick={handler1}>UPDATE</button>
                <div id="backToAdmin">
                    <button >
                        <a href="/admin">Back-To-Admin-Portal</a>
                    </button>
                </div>
            </div>
        </>
    )

}