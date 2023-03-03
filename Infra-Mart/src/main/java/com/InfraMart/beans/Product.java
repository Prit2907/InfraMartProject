package com.InfraMart.beans;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Product 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long productId;
	
	@Column(nullable=false)
	private String productName;
	
	@Column(nullable=false,length=8000)
	private String productDescription;
	
	@Column(nullable=false)
	private long productPrice;
	
	@Column(nullable=false)
	private int productUnit;
	
	@Lob
	@Basic(fetch=FetchType.LAZY)
	@Column(name = "image"/* ,columnDefinition="BLOB NOT NULL" */)
	private byte[] img; 

	@ManyToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="categoryId")
	private Category category=new Category();
	
	@ManyToMany(mappedBy="productlist",fetch=FetchType.EAGER)
	private List<User> userlist;

	public Product() 
	{
	
	}

//	public Product(String productName, String productDescription,long productPrice,int productUnit, byte[] img, Category category, List<User> userlist) {
//		super();
//		this.productName = productName;
//		this.productDescription = productDescription;
//		this.productPrice = productPrice;
//		this.productUnit = productUnit;
//		this.img = img;
//		this.category = category;
//		this.userlist = userlist;
//	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public long getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(long productPrice) {
		this.productPrice = productPrice;
	}

	public int getProductUnit() {
		return productUnit;
	}

	public void setProductUnit(int productUnit) {
		this.productUnit = productUnit;
	}

	public byte[] getImg() {
		return img;
	}

	public void setImg(byte[] img) {
		this.img = img;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<User> getUserlist() {
		return userlist;
	}

	public void setUserlist(List<User> userlist) {
		this.userlist = userlist;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productDescription="
				+ productDescription + ", productPrice=" + productPrice + ", productUnit=" + productUnit + ", img="
				+ Arrays.toString(img) + ", category=" + category + ", userlist=" + userlist + "]";
	}
	
	
	
	
	
}
