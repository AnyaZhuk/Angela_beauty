import { fetchData } from './data/index.js';

export function fetchBookingSlots() {
  return fetchData('booking');
}

export function fetchServices() {
  return fetchData('services');
}

export function fetchMasters() {
  return fetchData('masters');
}

export function fetchPricing() {
  return fetchData('pricing');
}

export function fetchBookings() {
  return fetchData('profile/bookings');
}

export function bookSlot(slotId) {
  return fetchData(`booking/${slotId}/book`, { method: 'POST' });
}
