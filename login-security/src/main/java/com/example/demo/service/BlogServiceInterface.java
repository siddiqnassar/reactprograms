package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Blog;


public interface BlogServiceInterface {

	
	public boolean save(Blog b);
	public List<Blog> findAll();
	Optional<Blog> findByID(int id);
	
}
