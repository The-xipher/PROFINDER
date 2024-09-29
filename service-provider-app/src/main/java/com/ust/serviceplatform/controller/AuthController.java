/*
package com.ust.serviceplatform.controller;

import com.ust.serviceplatform.model.User;
import com.ust.serviceplatform.security.JwtTokenProvider;
import com.ust.serviceplatform.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserService userService;

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestParam String username, @RequestParam String password) {
    Authentication authentication = authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(username, password));

    String token = jwtTokenProvider.generateToken(username);
    return ResponseEntity.ok(token);
  }
  @PostMapping("/register")
  public  ResponseEntity<?> register(@RequestBody User user){
    return ResponseEntity.ok(userService.registerUser(user));
  }
}
*/
