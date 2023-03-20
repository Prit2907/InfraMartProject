import axios from "axios";
import "../Category/Category.css";
import { useNavigate } from "react-router-dom";
import { Link, useState, useEffect } from "react";

export function ManageCategory() {
  const var1 = localStorage.getItem("rolecheck");
  const var2 = JSON.parse(var1);
  console.log("for role", var2.role);

  const [category, setCategory] = useState([]);
  const cat = category.map((myservice) => {
    console.log(myservice.categoryName);
  });
  useEffect(() => {
    const getCategory = async () => {
      const res = await axios("http://localhost:8081/getcategories");
      setCategory(res.data);
    };

    getCategory();
  }, []);

  const navigate = useNavigate();

  function handlerDelete(Id) {
    console.log(Id);
    // alert(Id);
    let promise1 = axios.delete(`http://localhost:8081/deletecat/${Id}`);
    promise1.then((response) => {
      console.log(Id);
      const result = response.data;
      alert("category deleted susccesfully");
      navigate("/admin");
      console.log(result);
    });
  }

  return (
    <>
      <div>
        <table id="tbl">
          <tr>
            <th>CategoryID</th>
            <th>categoryName</th>
            <th>Operation</th>
          </tr>
          {category.map((categ) => {
            return (
              <>
                <tr>
                  <td>{categ.categoryId}</td>
                  <td>{categ.categoryName}</td>

                  <td>
                    <button
                      id="deletecategory"
                      onClick={() => handlerDelete(categ.categoryId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
        <br />
        <div>
          <button id="addcategory">
            <a className="addcatbtn" href="/addcategory">
              AddCategory
            </a>
          </button>
        </div>
        <div id="backToAdmin12">
          <button>
            {var2.role == "admin" ? (
              <a href="/admin">Back-To-Admin-Portal</a>
            ) : (
              <a href="/manager">Back-To-Manager-Portal</a>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
