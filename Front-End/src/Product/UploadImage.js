import { useState, useEffect } from "react";
import axios from "axios";

export function UploadImage() {
  const var1 = localStorage.getItem("rolecheck");
  const var2 = JSON.parse(var1);
  console.log("for role", var2.role);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await axios("http://localhost:8081/getcategories");
      console.log(res.data);
      setCategory(res.data);
    };

    getCategory();
  }, []);

  const [addproduct, setAddproduct] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productUnit: "",
    // productCategory: "",
    categoryId: "",
  });

  console.log(addproduct);
  function handler(e) {
    const { name, value } = e.target;
    setAddproduct({
      ...addproduct,
      [name]: value,
    });
    console.log("addproduct", addproduct);
  }

  let imageData;
  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    imageData = new FormData();
    imageData.append("image", file);
    // imageData.append('product',JSON.stringify(addproduct));
    imageData.append("productName", addproduct.productName);
    imageData.append("productDescription", addproduct.productDescription);
    imageData.append("productPrice", addproduct.productPrice);
    imageData.append("productUnit", addproduct.productUnit);
    imageData.append("categoryId", addproduct.categoryId);

    console.log(file);
    console.log(imageData);
  };

  const uploadImageWithAdditionalData = (e) => {
    e.preventDefault();

    let promise1 = axios.post("http://localhost:8081/addproduct", imageData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });

    promise1.then((response) => {
      alert("Image Added Succefully!!!!!");
      window.location.reload(false);
      console.log(response.data);
    });
    // dispatch(uploadImage(imageData));  addproduct
  };

  return (
    <>
      <center className="addproduct">
        <form class="form-horizontal">
          <fieldset>
            <legend>ADD-PRODUCT</legend>
            <div class="form-group">
              <label class="" for="product_name">
                PRODUCT NAME
              </label>
              <div class="col-md-4">
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  autoFocus="on"
                  value={addproduct.productName}
                  onChange={handler}
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_name_fr">
                PRODUCT DESCRIPTION
              </label>
              <div class="col-md-4">
                <input
                  type="text"
                  id="productDescription"
                  name="productDescription"
                  value={addproduct.productDescription}
                  onChange={handler}
                />
              </div>
            </div>

            {/* <!-- Select Basic --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_categorie">
                PRODUCT PRICE
              </label>
              <div class="col-md-4">
                <input
                  type="text"
                  id="productPrice"
                  name="productPrice"
                  value={addproduct.productPrice}
                  onChange={handler}
                />
              </div>
            </div>
            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="available_quantity">
                PRODUCT QUANTITY
              </label>
              <div class="col-md-4">
                <input
                  type="text"
                  id="productUnit"
                  name="productUnit"
                  value={addproduct.productUnit}
                  onChange={handler}
                />
              </div>
            </div>

            {/* <div class="form-group">
                            <label class="col-md-4 control-label" for="available_quantity">PRODUCT category</label>
                            <div class="col-md-4">
                                <input type="text" id="productCategory" name="productCategory"
                                    value={addproduct.productCategory}
                                    onChange={handler}
                                />

                            </div>
                        </div> */}

            {/* <!-- Textarea --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_description">
                PRODUCT CATEGORY
              </label>
              <div class="col-md-4">
                <select
                  id="categoryId"
                  name="categoryId"
                  value={addproduct.categoryId}
                  onChange={handler}
                >
                  {category.map((cat) => {
                    return (
                      <option value={cat.categoryId}>{cat.categoryName}</option>
                    );
                  })}
                </select>
              </div>
            </div>

            <input
              accept="image/*"
              id="upload-profile-image"
              type="file"
              onChange={handleUploadClick}
            />
            <div class="form-group">
              <label class="col-md-4 control-label" for="singlebutton"></label>
              <div class="col-md-4">
                <button
                  id="addproductbtn"
                  onClick={uploadImageWithAdditionalData}
                >
                  Add
                </button>
              </div>
            </div>
            <div id="backToAdmin124">
              <button>
                {var2.role == "admin" ? (
                  <a href="/admin">Back-To-Admin-Portal</a>
                ) : (
                  <a href="/manager">Back-To-Manager-Portal</a>
                )}
              </button>
            </div>
          </fieldset>
        </form>
      </center>
    </>
  );
}
