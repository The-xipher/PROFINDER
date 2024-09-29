package com.ust.serviceplatform.controller;


import com.ust.serviceplatform.model.Professional;
import com.ust.serviceplatform.service.ProfessionalService;
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
    return professionalService.registerAsProfessional(userId,professionalDetails,professionalDetails.getLocation());
  }

  @GetMapping("/{userId}")
  public  Professional getProfessionalByUserId(@PathVariable long userId){
    return  professionalService.getProfessionalByUserId(userId);
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

