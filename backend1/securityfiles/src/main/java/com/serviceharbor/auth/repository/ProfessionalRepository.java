package com.serviceharbor.auth.repository;




import com.serviceharbor.auth.model.Professional;

import com.serviceharbor.auth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessionalRepository extends JpaRepository<Professional,Long> {
}
