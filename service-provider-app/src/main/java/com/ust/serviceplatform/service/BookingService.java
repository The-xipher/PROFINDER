package com.ust.serviceplatform.service;


import com.ust.serviceplatform.model.Booking;
import com.ust.serviceplatform.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

  private final BookingRepository bookingRepository;

  public List<Booking> getAllBookings() {
    return bookingRepository.findAll();
  }

  public Booking saveBooking(Booking booking) {
   return bookingRepository.save(booking);
  }
  public List<Booking> getBookingsByUserId(Long userId) {
    return bookingRepository.findByUserId(userId); // Ensure this method exists in the repository
  }

  public List<Booking> getBookingsByProfessionalId(Long professionalId) {
    return bookingRepository.findByServiceProviderId(professionalId);
  }
}
