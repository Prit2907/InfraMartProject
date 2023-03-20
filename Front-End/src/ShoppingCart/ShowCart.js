import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function ShowCart() {

  const navigate=useNavigate();
 
  const [productlist, setProductist] = useState([]);

  const var1 = localStorage.getItem("email");
  // const var2 = JSON.parse(var1);

  const [user, setuser] = useState({
    // email: var2.email,
    email: var1,
  });

  useEffect(() => {
    let promise1 = axios.post(
      "http://localhost:8081/infraprofile/getuserbyemail",
      user
    );
    promise1.then((response) => {
      // console.log(response.data);
      const result = response.data;
      setProductist(result.productlist);
    });
  }, []);

    
  const [sum,setSum]=useState(0);
    //   function gettoatl(e)
    //   {
        
    //         sum=sum+e;
        
    //      setSum(sum);
    //   }
    useEffect(() => {
      const var1 = localStorage.getItem("loginuser");
      // const var2 = JSON.parse(var1);
      if(var1==null){
        alert("Please Login First");
        navigate("/login");
      }
    });
  return (
    <>
      <div class="containershowcart">
        <table class="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
              {/* <th>Quantity</th>
              <th>Total</th> */}
            </tr>
          </thead>
          <tbody>
              {productlist.map((prod) => {
                return (
                  <>
                    <tr>
                      <td>{prod.productName}</td>
                      <td>{prod.productDescription}</td>
                      <td>{prod.productPrice}</td>
                      {/* <td><input type="number" id="quantity" name="quantity"
                     onChange={(e) => { setSum(sum+e.target.value)}}></input></td>
                     <td><input value={sum*prod.productPrice}></input></td> */}
                     
                      
                    </tr>
                  </>
                );
              })}
          
          </tbody>
          <button id="placeorderbutton" >
          <a id='checkouturl'  href="/checkout">Place-Order</a></button>
        </table>
      </div>
    </>
  );
}
