package com.example.demo.model;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;

@Entity
@Table(name="bloguser")
@EqualsAndHashCode(exclude = "review")

public class Blog {
   @Id
   @Column(name="id")
   @GeneratedValue(strategy = GenerationType.AUTO)
   private int id;
   @Column(name="name")
   private String name;
   @OneToMany(mappedBy = "blog", cascade = CascadeType.ALL)
   @Column(name="review")
   private List<Review> review;


   @Column(name="password")
   private String password;
   public Blog() {
	   
   }
   
   public Blog(String name,String password,List<Review> review)
   {
	
	   this.name=name;
	  this.review=review;
	   this.password=password;
   }
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public List<Review> getReview() {
	return review;
}
public void setReview(List<Review> review) {
	this.review = review;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
   
}
