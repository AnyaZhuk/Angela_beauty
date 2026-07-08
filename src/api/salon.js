import { apiGet } from './client.js';

export function fetchBookingSlots() {
  return apiGet('/booking');
}

export function fetchServices() {
  return apiGet('/services');
}

export function fetchMasters() {
  return apiGet('/masters');
}

export function fetchPricing() {
  return apiGet('/pricing');
}

export function fetchBookings() {
  return apiGet('/profile/bookings');
}

export function bookSlot(slotId) {
  return apiGet(`/booking/${slotId}/book`);
}
