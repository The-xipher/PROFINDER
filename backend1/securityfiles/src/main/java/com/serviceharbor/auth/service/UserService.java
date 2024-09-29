package com.serviceharbor.auth.service;


import com.serviceharbor.auth.model.Role;
import com.serviceharbor.auth.model.User;
import com.serviceharbor.auth.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserByRoleAndEmail(String role, String email) {
        Role userRole;
        try {
            userRole = Role.valueOf(role.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid role: " + role);
        }
        return userRepository.findByRoleAndEmail(userRole, email);
    }
    public List<User> allUsers() {
        List<User> users = new ArrayList<>();

        userRepository.findAll().forEach(users::add);

        return users;
    }

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public Long findByIdUsername(String username){

     Optional <User> user1=userRepository.findByEmail(username);
      return user1.get().getId();

    }


    public User getUserById(long id) {
      Optional<User> user= userRepository.findById(id);
      if(user.isPresent()){
        return user.get();
      }
    throw new RuntimeException();
    }
}
