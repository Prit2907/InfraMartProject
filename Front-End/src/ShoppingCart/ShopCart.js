import { useState } from "react"

export default function ShopCart(props)
{
     let cart=props.cart
      
     let viewer=cart.map((item,index)=>{
        return <>
        
        <tr key={item.productId}><td>{item.productId}</td><td>{item.productName}</td><td>{item.productPrice}</td></tr>
               
        </>
     })
     
   //   let[c,setc]=useState(false)
   //   function handler(c)
   //   {
   //      console.log(c.target.checked)
   //     setc(c.target.checked)
   //   }
      
     
       var sum=0;
      function gettoatl()
      {
         cart.forEach(e => {
            sum=sum+e.cart.Cost
         });
         return sum;
      }
    

    return(
        <div>
           {/* Show Bill <input type="checkbox" onClick={handler}></input> */}
            <table border={1}>
            <tr><td>Item Id</td><td>Item Name</td><td>Item Price</td><td>Item Qty</td><td>Item Cost</td></tr>
                {viewer}
                <tr><td colSpan={4}>total price=</td><td>{gettoatl()}</td></tr>
                </table>
          
          
        </div>
    )
}