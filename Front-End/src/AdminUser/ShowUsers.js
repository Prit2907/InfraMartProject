import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../AdminUser/AddAdminUser.css'

export function ShowAllUser(props) {

  const [user, setUser] = useState([]);
  // const cat = user.map((userlist) => { console.log(userlist.firstName) });

  const navigate = useNavigate();


  useEffect(() => {
    const getUsers = async () => {
      const res = await axios('http://localhost:8081/getallusers');
      let u1 = res.data
      setUser(u1);
    };

    getUsers();
  }, []);

  function handlerDelete(Id) {
    console.log(Id);
   
    //    alert(Id);
    let promise1 = axios.delete(`http://localhost:8081/deleteuser/${Id}`);
    promise1.then(response => {
      console.log(Id);
      const result = response.data;
      if(result!=null){
        alert("User Delete Succesfully");
        navigate("/admin");
      }
    });

  }

  // const [userupdate,setUserupdate]=useState({});

  function hadlerUpdate(u2) {
    console.log(u2)
    localStorage.setItem("userupdate", JSON.stringify(u2));
    console.log(u2);
    navigate("/userupdate");

  }


  return (
    <>

      <div>

        <table id="tbluserlist">
          <tr>
            <th>User-First Name</th>
            <th>User-Last Name</th>
            <th>User-Role</th>
            <th>Delete</th>
            <th>Update Role</th>
          </tr>
          {user.map(u => {
            return (
              <>
                <tr>
                  <td>{u.firstName}</td>
                  <td>{u.lastName}</td>
                  <td>{u.role}</td>
                  <td><button onClick={() => handlerDelete(u.userId)}>Delete</button></td>

                  {/* <td><button onClick={() => hadlerUpdate(u)}>Update_Role</button></td> */}
                  <td><button onClick={() => hadlerUpdate(u)}>Update_Role</button></td>

                </tr>
              </>
            )

          })}
        </table>
        <div id="backToAdmin">
          <button >
            <a href="/admin">Back-To-Admin-Portal</a>
          </button>
        </div>
      </div>
    </>
  )
}