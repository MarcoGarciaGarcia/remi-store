export interface IProveedor {
    id_proveedor: number;
    nombre_proveedor: string;
    contacto: string;
    telefono: string;
    email: string;
    estado: number;
    created_at: string;
    updated_at: string;
}

export interface IProveedores {
    status: string;
    data: IProveedor[];
}