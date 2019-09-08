package com.example.demo.model;
import lombok.*;

import javax.persistence.*;

@Data

@Entity
public class Review {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String review;

    @ManyToOne
    @JoinColumn
    private Blog blog;

   public Review(String review) {
	   this.review=review;
   }
public Review() {
	
}
}
