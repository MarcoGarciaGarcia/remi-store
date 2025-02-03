interface IUser {
  id: number;
  name: string;
  email: string;
  rol: string;
  activo: number;
}
export interface IWorker {
  message: string;
  users: IUser[];
}
