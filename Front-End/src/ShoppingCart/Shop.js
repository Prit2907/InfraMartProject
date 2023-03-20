import {useRef, useState,useEffect } from "react"
import axios from "axios"
import Add from "./Add"
//import ShopCart from "./ShopCart"
import '../ShoppingCart/shopcart.css'
export default function Shop()
{
   let [aitem,setAitem]=useState([])

//    useEffect(() => {
//       const getProducts =  () => {
//          //  event.preventDefault();
//           const res =  axios('http://localhost:8081/displayproduct');
//           console.log(res.data);
//           setAitem(res.data);
       
//                // res.catch((error)=>{
//                //         alert("no product available");
//                //      })
//       };
//       getProducts();
//   }, []);

useEffect(() => {
   const getAitem = async (event) => {
     // event.preventDefault();
     const res = await axios('http://localhost:8081/displayproduct');
     console.log(res.data);
     setAitem(res.data);
   };

   getAitem();
 }, []);
   // let aitem=[
   //  {id:1,iname:"chair",icost:2000,},
   //  {id:2,iname:"table",icost:3000},
   //  {id:3,iname:"board",icost:2500},
   //  {id:4,iname:"pen",icost:200}
   // ]
   
   
   let cbval=useRef(0)
   let[check,setCheck]=useState(false)
   function handler(e)
   {
      setCheck(e.target.checked)
      console.log(check)

   }
  
  
   // setemail(var1);

   // let [cart,setcart]=useState([])
  
   // function add_to_cart(obj)
   // {
   //  let temp=[...cart]
   //  temp.push(obj)
   //  setcart(temp)
   // }

   let[c,setc]=useState(false)
   function handler1(c)
   {
      console.log(c.target.checked)
     setc(c.target.checked)
   }
    return(
      <>
      <div class="row">
        <div class="column1" > 
          <Add  aitem={aitem} ></Add>
          </div>
          </div>
          </>
       
    )
}