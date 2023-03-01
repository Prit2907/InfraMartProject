package com.InfraMart.beans;

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
	
	@NotNull
	private String firstName;
	
	@NotNull
	private String lastName;
	
	@NotNull
	private String address;
	
	@NotNull
	private String city;
	
	@NotNull
	private int pinCode;
	
	@NotNull
	private String contactNo;

	public Checkout() {
		super();
	}

	public Checkout(@NotNull String firstName, @NotNull String lastName, @NotNull String address, @NotNull String city,
			@NotNull int pinCode, @NotNull String contactNo) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.city = city;
		this.pinCode = pinCode;
		this.contactNo = contactNo;
	}
	
}
