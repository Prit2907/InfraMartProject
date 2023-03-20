package com.InfraMart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;


@Service
public class EmailSenderServiceImpl implements IEmailSenderService {

	@Autowired
	private JavaMailSender mailSender;
	
	@org.springframework.beans.factory.annotation.Value("${spring.mail.username}") 
	private String sender;
	@Autowired
	public EmailSenderServiceImpl(JavaMailSender mailSender) {
		this.mailSender = mailSender;
		}
	
	@Async
	@Override
	public String sendOTPEmail(String subject, String body, String toEmail)throws MailException, InterruptedException 
	{
		
//		System.out.println("Sleeping now.. ");
//		Thread.sleep(10000);
		
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom(sender);
	        message.setTo(toEmail); 
	        message.setText(body);
	        message.setSubject(subject); 
	        mailSender.send(message);
	        System.out.println("Mail sent successfully! ");
			return "OTP has been mailed to you...please check your Email";

	}

}