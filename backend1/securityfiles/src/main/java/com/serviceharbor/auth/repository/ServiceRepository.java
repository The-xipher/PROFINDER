package com.serviceharbor.auth.repository;



import com.serviceharbor.auth.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {
}
