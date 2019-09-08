package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.example.demo.BlogRepository;
import com.example.demo.model.Blog;
import com.example.demo.model.Review;

@Service("blogservice")
public class BlogServiceImpl implements BlogServiceInterface{
	
	@Autowired
	@Qualifier(value="blogRepository")
	private BlogRepository blogrepository;
	
	public boolean save(Blog b) {
		String name=b.getName();
		String password=b.getPassword();
		List<Review> review=b.getReview();
		System.out.println(name);
		System.out.println(password);
		System.out.println(review);
		if(b.getName()!=""&&b.getPassword()!="") {
			blogrepository.save(b);
			System.out.println("saved succesfully");
			return true;
		}
		System.out.println("not saved");
		return false;
	}
	public List<Blog> findAll(){
		return(blogrepository.findAll());
	}
	public Optional<Blog> findByID(int id){
		Optional<Blog> blog=blogrepository.findById(id);
		System.out.println(blog);
		if(blog.isPresent()) {
			return blog;
		}
		else
			return null;
	    	
	}
	
}
	

