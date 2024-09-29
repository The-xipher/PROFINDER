package com.ust.serviceplatform.service;

import com.ust.serviceplatform.model.Service;
import com.ust.serviceplatform.repository.ServiceRepository;


import java.util.List;

@org.springframework.stereotype.Service
public class ServiceService {

  private final ServiceRepository serviceRepository;

  public ServiceService(ServiceRepository serviceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public Service createService(Service service) {
    return serviceRepository.save(service);
  }

  public List<Service> getAllServices() {
    return serviceRepository.findAll();
  }

  public Service getServiceById(Long id) {
    return serviceRepository.findById(id)
      .orElseThrow(() -> new RuntimeException("Service not found"));
  }

  public Service updateService(Long id, Service service) {
    Service existingService = getServiceById(id);
    existingService.setTitle(service.getTitle());
    existingService.setPrice(service.getPrice());
    existingService.setDescription(service.getDescription());
    existingService.setImageUrl(service.getImageUrl());
    return serviceRepository.save(existingService);
  }

  public void deleteService(Long id) {
    serviceRepository.deleteById(id);
  }
}
