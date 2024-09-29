package com.ust.serviceplatform.repository;



import com.ust.serviceplatform.model.Professional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessionalRepository extends JpaRepository<Professional, Long> {
  Professional findByUserId(long id);
}
