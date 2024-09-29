import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private userId: number | null = null;
  private professionalId: number | null = null; 
  private address: string | null = null; // New address property

  constructor() {}

  // Set the authentication token and store it in local storage
  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', token); 
  }

  // Get the authentication token from memory or local storage
  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('authToken'); 
    }
    return this.token;
  }

  // Clear the authentication token from memory and local storage
  clearToken(): void {
    this.token = null;
    localStorage.removeItem('authToken'); 
  }

  // Set the user ID and store it in local storage
  setUserId(userId: number): void {
    this.userId = userId;
    localStorage.setItem('userId', userId.toString());
  }

  // Get the user ID from memory or local storage
  getUserId(): number | null {
    if (this.userId === null) {
      const storedUserId = localStorage.getItem('userId');
      this.userId = storedUserId ? parseInt(storedUserId, 10) : null;
    }
    return this.userId;
  }

  // Clear the user ID from memory and local storage
  clearUserId(): void {
    this.userId = null;
    localStorage.removeItem('userId');
  }

  // Set the professional ID and store it in local storage
  setProfessionalId(professionalId: number): void {
    this.professionalId = professionalId;
    localStorage.setItem('professionalId', professionalId.toString());
  }

  // Get the professional ID from memory or local storage
  getProfessionalId(): number | null {
    if (this.professionalId === null) {
      const storedProfessionalId = localStorage.getItem('professionalId');
      this.professionalId = storedProfessionalId ? parseInt(storedProfessionalId, 10) : null;
    }
    return this.professionalId;
  }

  // Clear the professional ID from memory and local storage
  clearProfessionalId(): void {
    this.professionalId = null;
    localStorage.removeItem('professionalId');
  }

  // Set the address and store it in local storage
  setAddress(address: string): void {
    this.address = address;
    localStorage.setItem('address', address);
  }

  // Get the address from memory or local storage
  getAddress(): string | null {
    if (!this.address) {
      this.address = localStorage.getItem('address');
    }
    return this.address;
  }

  // Clear the address from memory and local storage
  clearAddress(): void {
    this.address = null;
    localStorage.removeItem('address');
  }
}
