package com.serviceharbor.auth.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Service {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String title; // Title of the service
  private double price; // Price of the service
  private String description; // Description of the service
  private String imageUrl; // Image link for the service
}
