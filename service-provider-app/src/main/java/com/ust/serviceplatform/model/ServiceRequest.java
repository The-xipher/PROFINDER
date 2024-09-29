/*
package com.ust.serviceplatform.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "service_requests")
public class ServiceRequest {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "customer_id")
  private User customer;

  @ManyToOne
  @JoinColumn(name = "professional_id")
  private Professional professional;

  private String serviceType;
  private String description;
  private LocalDateTime requestTime;
  private String status; // "PENDING", "ACCEPTED", "COMPLETED", "CANCELLED"
}
*/
