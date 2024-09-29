/*
package com.ust.serviceplatform.service;


import com.ust.serviceplatform.model.ServiceRequest;
import com.ust.serviceplatform.repository.ServiceRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ServiceRequestService {
  @Autowired
  private ServiceRequestRepository serviceRequestRepository;

  public ServiceRequest createServiceRequest(ServiceRequest serviceRequest) {
    return serviceRequestRepository.save(serviceRequest);
  }

  public List<ServiceRequest> getRequestsByCustomerId(Long customerId) {
    return serviceRequestRepository.findByCustomerId(customerId);
  }

  public List<ServiceRequest> getRequestsByServiceProviderId(Long serviceProviderId) {
    return serviceRequestRepository.findByServiceProviderId(serviceProviderId);
  }
}
*/
