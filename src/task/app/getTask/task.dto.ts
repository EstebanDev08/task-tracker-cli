export interface TaskJson {
  id: number;
  description: string;
  status: 'todo' | 'in-process' | 'done';
  createdAt: string; // Usamos string porque JSON almacena fechas como cadenas
  updatedAt: string;
}
