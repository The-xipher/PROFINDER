package com.ust.serviceplatform.controller;

import com.ust.serviceplatform.dto.ReviewDTO;
import com.ust.serviceplatform.model.Review;
import com.ust.serviceplatform.service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewController {
  private final ReviewService reviewService;

  public ReviewController(ReviewService reviewService) {
    this.reviewService = reviewService;
  }

  @PostMapping
  public ResponseEntity<Review> createReview(@RequestBody Review review) {
    Review savedReview = reviewService.createReview(review);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedReview);
  }

  @GetMapping
  public ResponseEntity<List<ReviewDTO>> getAllReviews() {
    List<ReviewDTO> reviews = reviewService.getAllReviews();
    return ResponseEntity.ok(reviews);
  }

  @GetMapping("/{id}")
  public ResponseEntity<ReviewDTO> getReviewById(@PathVariable Long id) {
    ReviewDTO review = reviewService.getReviewById(id);
    return ResponseEntity.ok(review);
  }

  @PutMapping("/{id}")
  public ResponseEntity<ReviewDTO> updateReview(@PathVariable Long id, @RequestBody Review review) {
    ReviewDTO updatedReviewDTO = reviewService.updateReview(id, review);
    return ResponseEntity.ok(updatedReviewDTO);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteReview(@PathVariable Long id) {
    reviewService.deleteReview(id);
    return ResponseEntity.noContent().build();
  }
  @GetMapping("service/{serviceId}")
  public ResponseEntity <List<ReviewDTO>> getReviewByServiceId(@PathVariable Long serviceId){
    return ResponseEntity.ok(reviewService.findReviewByServiceId(serviceId));
  }
}
