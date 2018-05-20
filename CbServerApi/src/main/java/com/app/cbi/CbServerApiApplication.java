package com.app.cbi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching

public class CbServerApiApplication {

	 
	   
	public static void main(String[] args) {
		SpringApplication.run(CbServerApiApplication.class, args);
	}
}
