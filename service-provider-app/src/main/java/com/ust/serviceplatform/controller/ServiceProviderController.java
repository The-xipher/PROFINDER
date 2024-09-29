/*
package com.ust.serviceplatform.controller;


import com.ust.serviceplatform.model.ServiceProvider;
import com.ust.serviceplatform.service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/service-providers")
public class ServiceProviderController {
  @Autowired
  private ServiceProviderService serviceProviderService;

  @PostMapping("/register")
  public ResponseEntity<ServiceProvider> registerServiceProvider(@RequestBody ServiceProvider serviceProvider) {
    ServiceProvider registeredProvider = serviceProviderService.registerServiceProvider(serviceProvider);
    return ResponseEntity.ok(registeredProvider);
  }

  @GetMapping("/search")
  public ResponseEntity<List<ServiceProvider>> searchServiceProviders(@RequestParam String serviceType) {
    List<ServiceProvider> providers = serviceProviderService.findByServiceType(serviceType);
    return ResponseEntity.ok(providers);
  }
}
*/
