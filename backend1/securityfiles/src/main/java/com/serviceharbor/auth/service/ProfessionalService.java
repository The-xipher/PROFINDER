package com.serviceharbor.auth.service;



import com.serviceharbor.auth.model.Professional;
import com.serviceharbor.auth.model.Role;
import com.serviceharbor.auth.model.User;
import com.serviceharbor.auth.repository.ProfessionalRepository;
import com.serviceharbor.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ProfessionalService {

  private final ProfessionalRepository professionalRepository;
  private final UserRepository userRepository;

  // Method to register a user as a professional
  public Professional registerAsProfessional(Long userId, String professionDetails, Set<LocalDateTime> availableSlots, String location, Set<Long> serviceIds) {
    Optional<User> optionalUser = userRepository.findById(userId);

    if (optionalUser.isPresent()) {
      User user = optionalUser.get();

      // Check if the user already has the SERVICE_PROVIDER role
      if (user.getRole()==Role.USER ){
        user.setRole(Role.PRO);  // Set role to SERVICE_PROVIDER
      }

      // Create a new Professional object
      Professional professional = new Professional(user, professionDetails, availableSlots, location, serviceIds);

      // Save updated user role and professional details
      userRepository.save(user);  // Save updated user role
      return professionalRepository.save(professional);  // Save professional details
    } else {
      throw new RuntimeException("User with ID " + userId + " not found");
    }
  }public void updateProfessionalSchedule(Long professionalId, Set<LocalDateTime> availableSlots) {
    Optional<Professional> optionalProfessional = professionalRepository.findById(professionalId);

    if (optionalProfessional.isPresent()) {
      Professional professional = optionalProfessional.get();
      professional.setAvailableSlots(availableSlots);
      professionalRepository.save(professional);
    } else {
      throw new IllegalArgumentException("Professional not found");
    }
  }
}
