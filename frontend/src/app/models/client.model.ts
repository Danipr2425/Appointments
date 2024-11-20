export interface Client {
    id: number;
    name: string;
    filename: string | null; // Puede ser nulo si no hay archivo
  }