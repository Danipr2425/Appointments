export interface Appoinment {
  id: number;
  date: string;
  hour: string;
  client: {  // El cliente está anidado dentro de la cita
      name: string;  // El nombre del cliente
      filename?: string;  // El nombre de archivo (opcional)
  };
}