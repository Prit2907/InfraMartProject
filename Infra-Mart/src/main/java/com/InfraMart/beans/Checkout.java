package com.InfraMart.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Checkout 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long chkoutId;
	
	@Column(nullable=false)
	private String firstName;
	
	@Column(nullable=false)
	private String lastName;
	
	@Column(nullable=false)
	private String address;
	
	@Column(nullable=false)
	private String city;
	
	@NotNull
	private int pinCode;
	
	@Column(nullable=false)
	private String contactNo;

	public Checkout() {
		super();
	}

	public Checkout(String firstName, String lastName, String address, String city, int pinCode, String contactNo) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.city = city;
		this.pinCode = pinCode;
		this.contactNo = contactNo;
	}
	
}
