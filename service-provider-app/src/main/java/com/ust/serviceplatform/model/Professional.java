package com.ust.serviceplatform.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Professional {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne
  @JoinColumn(name = "user_id")
  private User user;  // Links to the User who becomes a professional

  private String professionDetails;  // Description of the services offered by the professional

  @ElementCollection
  @CollectionTable(name = "professional_availability", joinColumns = @JoinColumn(name = "professional_id"))
  @Column(name = "available_slot")
  private Set<LocalDateTime> availableSlots; // Schedule of the professional's availability

  private boolean available;  // Indicates if the professional is available for booking

  private String location;  // Location of the service provider

  private  String zip;

  private String rating;  // Average rating of the professional

  private Integer totalBookings;  // Count of total bookings

  @ElementCollection
  @CollectionTable(name = "professional_services", joinColumns = @JoinColumn(name = "professional_id"))
  @Column(name = "service_id")
  private Set<Long> serviceIds; // Store IDs of services offered by this professional
}
