package com.ust.serviceplatform.controller;

import com.ust.serviceplatform.model.Service;
import com.ust.serviceplatform.service.ServiceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class ServiceController {

  private final ServiceService serviceService;

  public ServiceController(ServiceService serviceService) {
    this.serviceService = serviceService;
  }

  @PostMapping
  public ResponseEntity<Service> createService(@RequestBody Service service) {
    Service savedService = serviceService.createService(service);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedService);
  }

  @GetMapping
  public ResponseEntity<List<Service>> getAllServices() {
    List<Service> services = serviceService.getAllServices();
    return ResponseEntity.ok(services);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Service> getServiceById(@PathVariable Long id) {
    Service service = serviceService.getServiceById(id);
    return ResponseEntity.ok(service);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody Service service) {
    Service updatedService = serviceService.updateService(id, service);
    return ResponseEntity.ok(updatedService);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteService(@PathVariable Long id) {
    serviceService.deleteService(id);
    return ResponseEntity.noContent().build();
  }
}
