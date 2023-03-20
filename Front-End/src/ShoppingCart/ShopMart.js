import Shop from "./Shop";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ShopMart()
{

  const navigate=useNavigate();
  useEffect(() => {
    const var1 = localStorage.getItem("loginuser");
    // const var2 = JSON.parse(var1);
    if(var1==null){
      alert("Please Login First");
      navigate("/login");
    }
  });

  
  
  return(
    <div>
        <Shop></Shop>
    </div>
  )

}