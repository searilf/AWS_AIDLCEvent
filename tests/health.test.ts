import { describe, it, expect } from 'vitest';
import { classifyCpu } from '../src/domain/health';

// NOTE: Construction acceptance tests below are intentionally skipped in the starter.
// Engineer MUST remove .skip and implement health.ts during live/sandbox Construction.
describe.skip('C1: CPU health classification — Construction acceptance', () => {
  it.each([[0,'Healthy'],[69.9,'Healthy'],[70,'Warning'],[89.9,'Warning'],[90,'Critical'],[100,'Critical']])('CPU %s => %s', (cpu, expected) => {
    expect(classifyCpu(cpu)).toBe(expected);
  });
  it('null CPU => Unknown', () => expect(classifyCpu(null)).toBe('Unknown'));
});
