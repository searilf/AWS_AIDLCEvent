import type { HealthStatus, Resource } from './types';
/** CONSTRUCTION TASK — intentionally unimplemented. Do not implement before inception-approved tag. */
export function classifyCpu(_value: number | null): HealthStatus {
  throw new Error('NOT_IMPLEMENTED: Construction unit C1 — classifyCpu');
}
/** CONSTRUCTION TASK — implement resource-specific status rules in approved plan. */
export function classifyResource(_resource: Resource): HealthStatus {
  throw new Error('NOT_IMPLEMENTED: Construction unit C1 — classifyResource');
}
