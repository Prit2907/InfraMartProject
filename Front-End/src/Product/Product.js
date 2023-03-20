import '../Product/Product.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Product() {



  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = async (event) => {
      // event.preventDefault();
      const res = await axios('http://localhost:8081/displayproduct');
      console.log(res.data);
      setProduct(res.data);
    };

    getProducts();
  }, []);



  return (
    <>

       <ink href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script> 



      <html lang="en">
        <head>

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>eCommerce Product Detail</title>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />

        </head>

        <body>



          {product.map(categ => {
            return (
              <>
                <div class="container1">
                  <div class="card">
                    <div class="container-fliud">
                      <div class="wrapper row">
                        <div class="preview col-md-6">

                          <div class="preview-pic tab-content">
                            <div class="tab-pane active" id="pic-1">
                              <img src={"data:" + categ.image.type + ";charset=utf-8;base64," + categ.image.imageData} alt="Description of the image" />
                            </div>
                          </div>
                        </div>
                        <div class="details col-md-6">
                          <h3 class="product-title">{categ.productId + "." + categ.productName}</h3>

                          <p class="product-description">{categ.productDescription}</p>
                          <h4 class="price">current price: <span>{categ.productPrice}</span></h4>

                          <h4 class="sizes">Product-Quantity:
                            <span class="size" data-toggle="tooltip" title="small">{categ.productUnit}</span>

                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )

          })}


        </body>
      </html>


    </>
  )
}