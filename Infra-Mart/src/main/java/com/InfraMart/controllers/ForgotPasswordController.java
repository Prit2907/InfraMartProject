package com.InfraMart.controllers;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.InfraMart.beans.User;
import com.InfraMart.service.IEmailSenderService;
import com.InfraMart.service.UserService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/forgotpass")
public class ForgotPasswordController 
{
//	Random random = new Random(1000);
	Random random = new Random();
//	@Autowired 
//	private UserDao udao; 
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private IEmailSenderService emailService;
	
	
	static int otp;
	@PostMapping("/verifymail")
	public ResponseEntity<User> verifyEmailSendOTP(@RequestBody User u1)
	{
		System.out.println(u1);
		User user=userService.findByEmail(u1.getEmail());
		if(user!=null)
		{ 
			otp = random.nextInt(999999);
			
//			System.out.println("OTP "+otp);
			
			String subject = "OTP From InfraMart";
			String message ="OTP to reset your InfraMart password is : "+otp;
					
					
			String to=u1.getEmail();
			String msg = null;
			try {
				msg=emailService.sendOTPEmail(subject,message,to);
				return new ResponseEntity(""+msg+" "+user,HttpStatus.OK);  ///this ok enough to redirect user to enter otp page
			} catch (MailException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return new ResponseEntity("Email not found!..check email and retry",HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/otpvfn")
	public ResponseEntity<String> verifyOTP(@RequestHeader int newotp/* ,User u */)
	{
		//As at front end we are storing object so we will we will redirect user here and if vfn success redirect to new password page
		if(otp==newotp)
		{
//			u.setPassword(null);
			return new ResponseEntity("verification successful",HttpStatus.ACCEPTED);
		}
		return new ResponseEntity("please enter correct otp",HttpStatus.EXPECTATION_FAILED);
	}
	
	@PutMapping("/enternewpass")
	public ResponseEntity<String> newPassword(@RequestBody User user)
	{
		//As at front end we are storing object so we will we will use stored user and update password
		//updateUserById this method of AdminController but can't use as we are updating full user there
		int u=userService.updateById(user);
		if(u>0)
		{
			return new ResponseEntity("Password updated Successfully",HttpStatus.OK);
		}
		return new ResponseEntity("user not found",HttpStatus.NOT_FOUND);
		
	}
	

}
