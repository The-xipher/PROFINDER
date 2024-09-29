/*
package com.ust.serviceplatform.service;


import com.ust.serviceplatform.model.ServiceProvider;
import com.ust.serviceplatform.repository.ServiceProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ServiceProviderService {
  @Autowired
  private ServiceProviderRepository serviceProviderRepository;

  public ServiceProvider registerServiceProvider(ServiceProvider serviceProvider) {
    return serviceProviderRepository.save(serviceProvider);
  }

  public List<ServiceProvider> findByServiceType(String serviceType) {
    return serviceProviderRepository.findByServiceType(serviceType);
  }
}
*/
