package com.ust.serviceplatform.service;

import com.ust.serviceplatform.model.User;
import com.ust.serviceplatform.repository.UserRepository;
/*import org.springframework.security.crypto.password.PasswordEncoder;*/
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

  private final UserRepository userRepository;
  /*private final PasswordEncoder passwordEncoder;*/

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
/*
    this.passwordEncoder = passwordEncoder;
*/
  }

  public User registerUser(User user) {
    /*user.setPassword(passwordEncoder.encode(user.getPassword()));*/
    return userRepository.save(user);
  }

  public User findByUsername(String username) {
    return userRepository.findByUsername(username);
  }

public Optional<User> findAddress(Long id){
   Optional<User> user= userRepository.findById(id);
   if(user.isPresent()) {
     return user;
   }

    throw new RuntimeException();
}
}
