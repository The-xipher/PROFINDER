package com.ust.serviceplatform.repository;

import com.ust.serviceplatform.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {
}
