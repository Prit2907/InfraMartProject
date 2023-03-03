package com.InfraMart.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.InfraMart.beans.Product;
import com.InfraMart.beans.User;
import com.InfraMart.dao.UserDao;
import com.InfraMart.service.UserService;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/infraprofile")
public class InfraProfileController 
{
	@Autowired
	private UserService userService;
	
//	@Autowired
//	private UserDao udao;
	
	@PutMapping("/addtocart")
	public ResponseEntity<String> addToCart(@RequestBody List<Product> plist, @RequestHeader String u)
	{
		System.out.println(u);
		User user=userService.findByEmail(u);
		int n = userService.addTocart(plist,u);
		if(n>0)
		{
			return new ResponseEntity("Items added to cart successfully",HttpStatus.OK);
		}
		return new ResponseEntity("Items added to cart successfully",HttpStatus.NOT_FOUND);
	}
}
