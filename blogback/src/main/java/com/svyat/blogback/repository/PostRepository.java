package com.svyat.blogback.repository;

import com.svyat.blogback.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {
}
