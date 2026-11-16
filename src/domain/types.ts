export type ResourceType = 'EC2' | 'RDS' | 'ALB';
export type HealthStatus = 'Healthy' | 'Warning' | 'Critical' | 'Unknown';
export interface Resource { id: string; name: string; type: ResourceType; cpuPercent: number | null; memoryPercent: number | null; responseTimeMs: number | null; }
