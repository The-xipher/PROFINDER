package com.serviceharbor.auth.controller;


import com.serviceharbor.auth.dtos.LoginUserDto;
import com.serviceharbor.auth.dtos.RegisterUserDto;
import com.serviceharbor.auth.model.User;
import com.serviceharbor.auth.responses.LoginResponse;
import com.serviceharbor.auth.service.AuthenticationService;
import com.serviceharbor.auth.service.JwtService;
import com.serviceharbor.auth.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;
    private  final  UserService userService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService, UserService userService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
      this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signup(registerUserDto);

        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping("/username/{token}")
  public long findUserName(@PathVariable String token){
      String username= jwtService.extractUsername(token);
      return userService.findByIdUsername(username);
    }

    @GetMapping("/{id}")
  public User getuserById(@PathVariable long id){
      return userService.getUserById(id);
    }

}
