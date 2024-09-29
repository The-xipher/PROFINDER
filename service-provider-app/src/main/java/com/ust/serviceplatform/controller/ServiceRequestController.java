/*
package com.ust.serviceplatform.controller;

import com.ust.serviceplatform.model.ServiceRequest;
import com.ust.serviceplatform.service.ServiceRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
*/
/*import org.springframework.security.access.prepost.PreAuthorize;*//*

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/service-requests")
public class ServiceRequestController {
  @Autowired
  private ServiceRequestService serviceRequestService;

  @PostMapping("/create")
  public ResponseEntity<ServiceRequest> createServiceRequest(@RequestBody ServiceRequest serviceRequest) {
    ServiceRequest createdRequest = serviceRequestService.createServiceRequest(serviceRequest);
    return ResponseEntity.ok(createdRequest);
  }

  @GetMapping("/customer/{customerId}")
  public ResponseEntity<List<ServiceRequest>> getCustomerRequests(@PathVariable Long customerId) {
    List<ServiceRequest> requests = serviceRequestService.getRequestsByCustomerId(customerId);
    return ResponseEntity.ok(requests);
  }

  @GetMapping("/provider/{providerId}")
  public ResponseEntity<List<ServiceRequest>> getProviderRequests(@PathVariable Long providerId) {
    List<ServiceRequest> requests = serviceRequestService.getRequestsByServiceProviderId(providerId);
    return ResponseEntity.ok(requests);
  }
}
*/
