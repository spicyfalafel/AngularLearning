package com.svyat.blogback.repository;

import com.svyat.blogback.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends MongoRepository<User, String> {
    public User findByUsername(String firstName);
    public List<User> findByPassword(String lastName);
}
