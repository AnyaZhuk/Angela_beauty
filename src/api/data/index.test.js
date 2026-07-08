import { describe, expect, it } from 'vitest';
import { fetchData } from './index.js';

describe('local data', () => {
  it('returns services list', async () => {
    const services = await fetchData('services');
    expect(services).toHaveLength(6);
    expect(services[0]).toHaveProperty('name');
  });

  it('returns masters list', async () => {
    const masters = await fetchData('masters');
    expect(masters.length).toBeGreaterThan(0);
  });
});
