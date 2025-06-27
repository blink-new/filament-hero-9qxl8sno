interface Filament {
  id: string;
  spoolName: string;
  brand: string;
  color: string;
  material: string;
  remaining: number;
  inUse?: boolean;
  lowStock?: boolean;
  photoUrl?: string;
  originalWeight?: number;
  currentWeightPercentage?: number;
  purchaseDate?: Date;
  nozzleTemp?: number;
  bedTemp?: number;
  printSpeed?: number;
  notes?: string;
}
