package com.example.demo;

import java.util.Set;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.Blog;
import com.example.demo.model.Review;
import com.example.demo.service.BlogServiceImpl;

@SpringBootApplication
public class LoginSecurityApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginSecurityApplication.class, args);
	}

  
}
