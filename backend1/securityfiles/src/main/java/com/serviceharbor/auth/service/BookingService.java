package com.serviceharbor.auth.service;




import com.serviceharbor.auth.model.Booking;
import com.serviceharbor.auth.repository.BookingRepository;
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
}
