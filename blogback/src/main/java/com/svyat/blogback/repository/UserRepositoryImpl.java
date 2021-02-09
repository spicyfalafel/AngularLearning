package com.svyat.blogback.repository;

import com.svyat.blogback.model.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class UserRepositoryImpl {

    @Autowired
    UserRepository userRepository;

    public User login(User user) throws BadPasswordException, NoSuchLoginException {
        var u = userRepository.findByUsername(user.getUsername());
        if (u != null){
            if (u.getPassword().equals(user.getPassword())){
                log.info("logged" + u.getUsername());
                return u;
            }else{
                throw new BadPasswordException();
            }
        }else{
            throw new NoSuchLoginException();
        }
    }

    public void save(User user){
        log.info("saved" + user.getUsername());
        userRepository.save(user);
    }

    public List<User> getAll(){
        log.info("getAll()");
        return userRepository.findAll();
    }

    public Optional<User> getById(User user){
        log.info("getById("+ user.getId()+")");
        return userRepository.findById(user.getId());
    }
}
