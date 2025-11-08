package com.foodie.foodie.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodie.foodie.DTO.LoginRequest;
import com.foodie.foodie.DTO.ResponseDTO;
import com.foodie.foodie.model.User;
import com.foodie.foodie.repository.UserRepository;

import ch.qos.logback.core.net.LoginAuthenticator;




@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
   
    private final UserRepository userRepository;

    // ✅ Constructor-based injection
    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

@PostMapping("/login")
public ResponseEntity<ResponseDTO> Login (@RequestBody LoginRequest request){

Optional<User> userOPT = userRepository.findByEmail(request.getEmail());
 if (userOPT.isPresent()){
    User user = userOPT.get() ;
    System.out.println(user.toString());
    if (user.getPassword().equals(request.getPassword())){
    return ResponseEntity.ok(
        new ResponseDTO<>(true, "login succesfful ", user ) 
    ) ;
    }
}
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new ResponseDTO<>(false, "Invalid email or password", null));
 }



}



    
