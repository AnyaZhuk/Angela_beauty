import { describe, expect, it } from 'vitest';
import { mockFetch } from './index.js';

describe('mock API', () => {
  it('returns services list', async () => {
    const services = await mockFetch('services');
    expect(services).toHaveLength(6);
    expect(services[0]).toHaveProperty('name');
  });

  it('returns masters list', async () => {
    const masters = await mockFetch('masters');
    expect(masters.length).toBeGreaterThan(0);
  });
});
