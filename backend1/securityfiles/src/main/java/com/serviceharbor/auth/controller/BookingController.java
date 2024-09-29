package com.serviceharbor.auth.controller;





import com.serviceharbor.auth.model.Booking;
import com.serviceharbor.auth.service.BookingService;
import lombok.RequiredArgsConstructor;
/*
import org.springframework.security.access.prepost.PreAuthorize;
*/
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/bookings")
@RequiredArgsConstructor
public class BookingController {

  private final BookingService bookingService;

  /*
    @PreAuthorize("hasRole('USER')")
  */
  @GetMapping
  public List<Booking> getAllBookings() {
    return bookingService.getAllBookings();
  }

  /*
    @PreAuthorize("hasRole('USER')")
  */
  @PostMapping
  public ResponseEntity<?> saveBooking(@RequestBody Booking booking) {

    return ResponseEntity.ok(bookingService.saveBooking(booking));
  }
}
