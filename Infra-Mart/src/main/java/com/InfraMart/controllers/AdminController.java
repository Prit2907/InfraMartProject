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
import com.InfraMart.beans.User;
import com.InfraMart.service.CategoryService;
import com.InfraMart.service.ProductService;
import com.InfraMart.service.UserService;



@CrossOrigin(origins="*")
@RestController
@RequestMapping("/admin")
public class AdminController 
{
	@Autowired
	private UserService userService;

	//admin can also add user but mainly Given this functionality to add Admin and manager
	@PostMapping("/registration")
	public ResponseEntity<User> addUser(@RequestBody User u)
	{
		User u1=userService.addNewUser(u);
		if(u1!=null)
		{
			return new ResponseEntity("Registration successful!!",HttpStatus.OK);
		}
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	//to get All Users,Admins,Managers
	@GetMapping("/getallusers")
	public ResponseEntity<List<User>> getAllUsers()
	{
		List<User> ulist=userService.getAll();

		return ResponseEntity.ok(ulist);
	}

	//to Delete User,Admin,managers
	@DeleteMapping("/deleteuser/{userId}") //Note in delete we have taken int here instead long because it was throwing some error but in service,dao long 
	public ResponseEntity<String> deleteById(@PathVariable int userId) 
	{
		userService.deleteById(userId);

		return new ResponseEntity("User Deleted Successfully"+userId,HttpStatus.OK);
	}


	//to update user role
	@PutMapping("/updateuser") 
	public ResponseEntity<String> updateById(@RequestBody User u)
	{
		int n=userService.updateUserById(u);
		if(n>0)
		{
			return new ResponseEntity("User updated successfully"+u.getUserId(),HttpStatus.CREATED);
		}
		else
			return new ResponseEntity("User not found"+u.getUserId(),HttpStatus.NOT_FOUND);
	}


}


