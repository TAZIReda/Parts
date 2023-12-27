export interface Part {
    id: string;
    name: string;
    description: string;
    partNumber: string;
    quantity: number;
    price: number;
    category: string;
    userId: string; // Added as per your request
  
    // Additional attributes (optional, include as needed):
    // dimensions?: Dimensions;
    // weight?: number;
    // material?: string;
    // compatibleWith?: string[];
    // manufacturer?: string;
    // vendor?: string;
    // warranty?: WarrantyDetails;
    // images?: Image[];
    // reviews?: Review[];
    // status?: string;
  }
  