package com.svyat.blogback.rest;

import com.svyat.blogback.model.Post;
import com.svyat.blogback.repository.PostRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@Slf4j
public class PostRestController {

    @Autowired
    private PostRepository repository;

    @GetMapping()
    public ResponseEntity<List<Post>> getAll(){
        List<Post> all = repository.findAll();
        log.info("getAll() posts. got " +all.size());
        return new ResponseEntity<>(all, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Post> addPost(@RequestBody Post post){
        repository.save(post);
        log.info("add post " + post.getTitle());
        return new ResponseEntity<>(post, HttpStatus.OK);
    }
}
