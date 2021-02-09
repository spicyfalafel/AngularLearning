package com.svyat.blogback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class BlogbackApplication {

    public static void main(String[] args) {
        SpringApplication.run(BlogbackApplication.class, args);
    }

}
