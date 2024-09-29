package com.ust.serviceplatform.repository;


import com.ust.serviceplatform.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
  List<Booking> findByUserId(Long userId);
  List<Booking> findByServiceProviderId(Long professionalId);
}
