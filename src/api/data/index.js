import booking from './booking.json';
import services from './services.json';
import masters from './masters.json';
import pricing from './pricing.json';

const routes = {
  booking: () => booking,
  services: () => services,
  masters: () => masters,
  pricing: () => pricing,
  'profile/bookings': () => [],
};

export async function fetchData(path, options = {}) {
  await new Promise((r) => setTimeout(r, 200));

  const key = path.replace(/^\//, '').split('?')[0];
  const handler = routes[key];

  if (!handler) {
    throw new Error(`Data route not found: ${key}`);
  }

  if (options.method && options.method !== 'GET') {
    return { ok: true, id: `local-${Date.now()}` };
  }

  return handler();
}
