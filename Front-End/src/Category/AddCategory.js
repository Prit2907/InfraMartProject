import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function AddCategory() {
  const var1 = localStorage.getItem("rolecheck");
  const var2 = JSON.parse(var1);
  console.log("for role", var2.role);

  const [category, setCategory] = useState({
    categoryName: "",
  });

  const navigate = useNavigate();

  function handler(e) {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  }
  function handler1(event) {
    event.preventDefault();
    let promise1 = axios.post("http://localhost:8081/addcat", category);
    promise1.then((response) => {
      const result = response.data;

      console.log(result);
      if (response.data != null) {
        navigate("/managedcategory");
      }
    });
  }

  return (
    <>
      <main>
        <form className="form_class">
          <div className="form_div">
            <label>categoryName</label>
            <input
              id="categoryName"
              className="field_class"
              name="categoryName"
              type="text"
              placeholder="Enter Category Name"
              value={category.categoryName}
              onChange={handler}
            />
            <button className="submit_class" type="submit" onClick={handler1}>
              Add
            </button>
            {var2.role == "admin" ? (
              <a href="/admin">Back-To-Admin-Portal</a>
            ) : (
              <a href="/manager">Back-To-Manager-Portal</a>
            )}
          </div>
        </form>
      </main>
    </>
  );
}
