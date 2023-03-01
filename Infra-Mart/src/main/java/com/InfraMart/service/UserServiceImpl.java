package com.InfraMart.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.InfraMart.beans.User;
import com.InfraMart.dao.UserDao;

@Service
@Transactional
public class UserServiceImpl implements UserService
{
	@Autowired 
	UserDao udao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	//finds User by Email wherever needed(used in HomeController)
	@Override
	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	//to Register user in HomeController (should add register method in both home and admin instead addNewUser)
	@Override
	public User addNewUser(User user) {
		
		
		user.setActive(1);
		user.setRegisterDate(new Date());

		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		user.setRole(user.getRole());
	
		return udao.save(user);
	}

	//to Check login credentials in HomeController
	@Override
	public User isValid(User u) {
		User u1=udao.findByEmail(u.getEmail());
		
		return u1;
	}
	
	//to get all users in AdminController
	@Override
	public List<User> getAll() {

		return udao.findAll();
	}
	
	//to Delete User,Admin,managers
	@Override
	public void deleteById(long userId) 
	{
		
		udao.deleteById(userId);
		
	}

	//to update user (only role) in AdminController
	@Override
	public int updateUserById(User u) 
	{
		Optional<User> op=udao.findById(u.getUserId());
		if(op.isPresent())
		{
			User user=op.get();	
			user.setRole(u.getRole());
			udao.save(user);
			return 1;
		}
		return 0;
	}
	
	
	

}
