package com.InfraMart.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.InfraMart.beans.Category;
import com.InfraMart.beans.Product;
import com.InfraMart.service.CategoryService;
import com.InfraMart.service.ProductService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/")
public class ManagerController
{
	@Autowired
	private ProductService productService;

	@Autowired
	private CategoryService categoryService;
	//category crud by admin
	//admin adds category 
	@PostMapping("/addcat")
	public ResponseEntity<Category> addCategory(@RequestBody Category cat)
	{
		Category ctg=categoryService.addCategory(cat);
		if(ctg!=null)
		{
			return new ResponseEntity("Category added successfuly!!",HttpStatus.OK);
		}
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	//to get All Users,Admins,Managers
	@GetMapping("/getcategories")
	public ResponseEntity<List<Category>> getAllCats()
	{
		List<Category> clist=categoryService.getAllCats();

		return ResponseEntity.ok(clist);
	}

	//to Delete User,Admin,managers
	@DeleteMapping("/deletecat/{categoryId}") //Note in delete we have taken int here instead long because it was throwing some error but in service,dao long
	public ResponseEntity<String> deleteByCatId(@PathVariable int categoryId)
	{
		categoryService.deleteByCatId(categoryId);

		return new ResponseEntity("Category Deleted Successfully"+categoryId,HttpStatus.OK);
	}


	//to update user role
	@PutMapping("/updatecat") 
	public ResponseEntity<String> updateById(@RequestBody Category cat)
	{
		int n=categoryService.updateCategoryById(cat);
		if(n>0)
		{
			return new ResponseEntity("User updated successfully"+cat.getCategoryId(),HttpStatus.CREATED);
		}
		else
			return new ResponseEntity("User not found"+cat.getCategoryId(),HttpStatus.NOT_FOUND);
	}

	//product crud by admin
	//admin adds product 
	@PostMapping("/addproduct")
	public ResponseEntity<Product> addProduct(@RequestBody Product product)
	{
		//we have to give select tag in front end so we can select category and thereby categoryId

		Product prd=productService.addProduct(product);
		if(prd!=null)
		{
			return new ResponseEntity("Product added successfuly!!",HttpStatus.OK);
		}
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}


	//get all products
	@GetMapping("/displayproduct")
	public ResponseEntity<List<Product>> getAllProducts()
	{
		List<Product> plist=productService.displayAllProducts();
		return ResponseEntity.ok(plist);
	}


	//to Delete product
	@DeleteMapping("/deleteproduct/{productId}") //Note in delete we have taken int here instead long because it was throwing some error but in service,dao long
	public ResponseEntity<String> deleteByProductId(@PathVariable int productId)
	{
		productService.deleteByProductId(productId);

		return new ResponseEntity("Category Deleted Successfully"+productId,HttpStatus.OK);
	}


	//to update product
	@PutMapping("/updateproduct") 
	public ResponseEntity<String> updateByProductId(@RequestBody Product product)
	{
		int n=productService.updateByProductId(product);
		if(n>0)
		{
			return new ResponseEntity("User updated successfully"+product.getProductId(),HttpStatus.CREATED);
		}
		else
			return new ResponseEntity("User not found"+product.getProductId(),HttpStatus.NOT_FOUND);
	}

}
