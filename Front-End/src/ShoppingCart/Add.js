import { useState } from "react"
import '../ShoppingCart/shopcart.css'
import axios from "axios"

export default function Add(props) {
	
	let aitem = props.aitem
    let [cart, setCart] = useState([])
	const [productsId, setProdcutId] = useState(0)
   
	console.log(productsId)

	function handler12(e){
		// const { name, value } = e.target
		cart.push(e)
        // setCart(e)
	}
	
   

	const email = localStorage.getItem("email");
	console.log(email);

    function handler2(event) {
		// event.preventDefault();
		console.log(cart)
		let promise1 = axios.post("http://localhost:8081/infraprofile/addtocart",cart, {
            params: {
            email: email
            }
          });
		promise1.then(response => {
	
		  const result = response.data;
	     
		  console.log(result);
	
		});
	
	
		
	  }


	let viewer = aitem.map((item, index) => {
		return (<>
			{/* <option key={item.id} id={item.id} value={index}>{item.iname +" "+item.icost}</option> */}
			<div class="container1">
				<div class="card">
					<div class="container-fliud">
						<div class="wrapper row">
							<div class="preview col-md-6">

								<div class="preview-pic tab-content">
									<div class="tab-pane active" id="pic-1">
										<img src={"data:"+item.image.type+";charset=utf-8;base64,"+item.image.imageData} alt={item.image.type}  />
									</div>
								</div>
							</div>
							<div class="details col-md-6">
								<h3 class="product-title">{item.productId + "." + item.productName}</h3>

								<p class="product-description">{item.productDescription}</p>
								<h4 class="price">current price: <span>{item.productPrice}</span></h4>

								<h4 class="sizes">Product-Quantity:
									<span class="size" data-toggle="tooltip" title="small">{item.productUnit}</span>
								</h4>
								{/* <h4 class="sizes">select-Quantity:
									<input data-toggle="tooltip" title="small" type="text" onChange={(i) => { setQty(i.target.value) }}></input>
								</h4> */}
								<div class="action">
									{/* <input type="checkbox" onChange={(e) => { setId(item.productId) }} ></input> */}
									{/* <button class="add-to-cart btn btn-default" onClick={()=>{props.addfun({...aitem[selectedId],Qty:Qty,C1:cost})}}>add to cart</button> */}
									<button class="add-to-cart btn btn-default"
										// value={item.productId}
										// value={item.productId}
										// onClick={handlerproductId}
										onClick={() => handler12(item)}
									>add to cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
		)
	})

	
	return (
		<div>
			<div>
				{viewer}
			</div>
			 <button class="add-to-cart btn btn-default" onClick={handler2}>Save To cart </button>
		</div>
	)




}