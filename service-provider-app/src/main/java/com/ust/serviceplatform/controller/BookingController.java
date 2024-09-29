package com.ust.serviceplatform.controller;



import com.ust.serviceplatform.model.Booking;
import com.ust.serviceplatform.service.BookingService;
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
@CrossOrigin(origins = "http://localhost:4200")
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
  @GetMapping("/user/{userId}")
  public ResponseEntity<List<Booking>> getBookingsByUserId(@PathVariable Long userId) {
    List<Booking> bookings = bookingService.getBookingsByUserId(userId);
    return ResponseEntity.ok(bookings);
  }
  @GetMapping("/{professionalId}")
  public ResponseEntity<List<Booking>> getBookingByProfessionalId(@PathVariable Long professionalId){
    List<Booking> bookings = bookingService.getBookingsByProfessionalId(professionalId);
    return ResponseEntity.ok(bookings);
  }
}
