package com.example.demo;

import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Blog;
import com.example.demo.model.Review;
import com.example.demo.service.BlogServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController

@CrossOrigin(origins="*")

public class MyController {

	@Autowired
	@Qualifier(value="blogservice")
	private BlogServiceImpl bservice;
//	@RequestMapping("/")
//	public String welcomePage() {
//		return "welcome.jsp";
//	}
	@Autowired
	private ObjectMapper mapper;
	@CrossOrigin(origins="*")
	@PostMapping(value="/givename")
	public boolean giveName(@RequestBody Blog b){
		System.out.println(b.getReview());
		
		return(bservice.save(b));
		
		
	}
	@GetMapping(value="/get")
	public List<Blog> GetDetails() {
		return(bservice.findAll());
	}
	@GetMapping(value="/")
	public String Check() {
		return "hii";
	}
	@CrossOrigin(origins="Access-Control-Allow-Origin:*")
	@GetMapping(value="/{id}")
	Optional<Blog> getDetails(@PathVariable("id") int id) { 
		
		return(bservice.findByID(id));
	}	
}
