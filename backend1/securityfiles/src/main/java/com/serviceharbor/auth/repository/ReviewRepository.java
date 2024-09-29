package com.serviceharbor.auth.repository;



import com.serviceharbor.auth.model.Review;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
