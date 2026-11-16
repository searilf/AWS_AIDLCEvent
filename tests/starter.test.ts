import { describe, expect, it } from 'vitest';
import resources from '../src/data/resources.json';

describe('demo starter fixture', () => {
  it('has unique resource ids', () => { expect(new Set(resources.map(r => r.id)).size).toBe(resources.length); });
  it('includes EC2, RDS and ALB', () => { expect(new Set(resources.map(r => r.type))).toEqual(new Set(['EC2','RDS','ALB'])); });
});
