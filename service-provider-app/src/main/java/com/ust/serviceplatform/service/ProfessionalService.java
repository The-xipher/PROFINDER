package com.ust.serviceplatform.service;



import com.ust.serviceplatform.model.Professional;
import com.ust.serviceplatform.model.Role;
import com.ust.serviceplatform.model.User;
import com.ust.serviceplatform.repository.ProfessionalRepository;
import com.ust.serviceplatform.repository.UserRepository;
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
  public Professional registerAsProfessional(Long userId, Professional professionDetails, String location) {
    Optional<User> optionalUser = userRepository.findById(userId);

    if (optionalUser.isPresent()) {
      User user = optionalUser.get();

      // Check if the user already has the SERVICE_PROVIDER role
      if (!user.getRoles().contains(Role.SERVICE_PROVIDER)) {
        user.getRoles().add(Role.SERVICE_PROVIDER);  // Set role to SERVICE_PROVIDER
      }

      // Create a new Professional object
      Professional professional = new Professional();
      professional.setUser(user);
      professional.setProfessionDetails(professionDetails.getProfessionDetails());
      professional.setAvailable(true);  // Default availability
      professional.setLocation(location);
      professional.setZip(professionDetails.getZip());
      professional.setTotalBookings(0);  // Initialize total bookings
      professional.setAvailableSlots(professionDetails.getAvailableSlots());
      professional.setServiceIds(professionDetails.getServiceIds());
      // Save updated user role and professional details
      userRepository.save(user);  // Save updated user role
      return professionalRepository.save(professional);  // Save professional details
    } else {
      throw new RuntimeException("User with ID " + userId + " not found");
    }
  }
  public void updateProfessionalSchedule(Long professionalId, Set<LocalDateTime> availableSlots) {
    Optional<Professional> optionalProfessional = professionalRepository.findById(professionalId);

    if (optionalProfessional.isPresent()) {
      Professional professional = optionalProfessional.get();
      professional.setAvailableSlots(availableSlots);
      professionalRepository.save(professional);
    } else {
      throw new IllegalArgumentException("Professional not found");
    }
  }

  public Professional getProfessionalByUserId(long id){
   return professionalRepository.findByUserId(id);
  }
}
