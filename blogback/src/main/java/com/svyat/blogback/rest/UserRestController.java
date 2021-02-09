package com.svyat.blogback.rest;

import com.svyat.blogback.model.User;
import com.svyat.blogback.repository.UserRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserRestController {

    @Autowired
    UserRepositoryImpl repository;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        try {
            var u = repository.login(user);
            return new ResponseEntity<>(u, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping()
    public ResponseEntity<List<User>> getAll(){
        return new ResponseEntity<>(repository.getAll(), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){
        Optional<User> u = repository.getById(user);
        if (u.isPresent()){
            return new ResponseEntity<>(u.get(), HttpStatus.CONFLICT);
        }else{
            repository.save(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
    }
}
