package com.serviceharbor.auth.controller;




import com.serviceharbor.auth.model.Professional;
import com.serviceharbor.auth.service.ProfessionalService;
import lombok.RequiredArgsConstructor;
/*import org.springframework.security.access.prepost.PreAuthorize;*/
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Set;

@RestController
@RequestMapping("/api/professionals")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ProfessionalController {

  private final ProfessionalService professionalService;

  @PostMapping("/register/{userId}")
/*
  @PreAuthorize("hasRole('USER')")  // Only users can become service providers
*/
  public Professional registerAsProfessional(
    @PathVariable Long userId,
    @RequestBody Professional professionalDetails) {

    // Extracting available slots and service IDs if they are part of the request body
    Set<LocalDateTime> availableSlots = professionalDetails.getAvailableSlots();
    Set<Long> serviceIds = professionalDetails.getServiceIds();

    // Call the service method with all required parameters
    return professionalService.registerAsProfessional(userId,
      professionalDetails.getProfessionDetails(),
      availableSlots,
      professionalDetails.getLocation(),
      serviceIds);
  }

  @PutMapping("/{professionalId}/schedule")
/*
  @PreAuthorize("hasRole('SERVICE_PROVIDER')")
*/
  public void updateSchedule(
    @PathVariable Long professionalId,
    @RequestBody Set<LocalDateTime> availableSlots) {
    professionalService.updateProfessionalSchedule(professionalId, availableSlots);
  }
}

