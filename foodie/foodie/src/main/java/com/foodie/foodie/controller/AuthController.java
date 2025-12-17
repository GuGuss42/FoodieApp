package com.foodie.foodie.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodie.foodie.DTO.ChangePasswordDTO;
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
    System.out.println("User login attempt: " + user.getEmail());
    if (user.getPassword().equals(request.getPassword())){
    return ResponseEntity.ok(
        new ResponseDTO<>(true, "login succesfful ", user ) 
    ) ;
    }
}
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new ResponseDTO<>(false, "Invalid email or password", null));
 }
@PostMapping("/register")
public ResponseEntity<ResponseDTO> register(@RequestBody User user) {
    try {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ResponseDTO<>(false, "Email already exists", null));
        }
          if (user.getRole() == null || user.getRole().isBlank()) {
        user.setRole("USER");
        }

        userRepository.save(user);

        return ResponseEntity.ok(
                new ResponseDTO<>(true, "Registration successful", null)
        );

    } catch (Exception e) {
        e.printStackTrace(); // prints full stack trace in console

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseDTO<>(false, "Error: " + e.getMessage(), null));
    }
}
@PutMapping("/changepass")
public ResponseEntity<ResponseDTO> changePassword(
        @RequestBody ChangePasswordDTO dto) {

    Optional<User> userOpt = userRepository.findByEmail(dto.getEmail());

    if (userOpt.isEmpty()) {
        return ResponseEntity.badRequest().body(
            new ResponseDTO(false, "User not found", null)
        );
    }

    User user = userOpt.get();
    System.out.println("Password change attempt for: " + user.getEmail());

    // ❗ Plain text comparison (as requested)
    if (!user.getPassword().equals(dto.getOldPassword())) {
        return ResponseEntity.badRequest().body(
            new ResponseDTO(false, "Old password incorrect", null)
        );
    }

    // ✅ Update password
    user.setPassword(dto.getNewPassword());
    userRepository.save(user);

    return ResponseEntity.ok(
        new ResponseDTO(true, "Password updated successfully", null)
    );
}
}








    
