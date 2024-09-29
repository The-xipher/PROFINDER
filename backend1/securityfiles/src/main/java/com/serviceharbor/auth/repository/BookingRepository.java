package com.serviceharbor.auth.repository;



import com.serviceharbor.auth.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}

