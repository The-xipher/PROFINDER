package com.ust.serviceplatform.model;

import lombok.Data;

import jakarta.persistence.*;
import java.util.Set;

@Data
@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String username;

  private String password;

  private  String address;

  @ElementCollection(fetch = FetchType.EAGER)
  private Set<Role> roles;
}
