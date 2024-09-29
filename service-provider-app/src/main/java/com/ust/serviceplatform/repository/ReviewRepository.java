package com.ust.serviceplatform.repository;

import com.ust.serviceplatform.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
