interface Proveedor {
  id_proveedor: number;
  nombre_proveedor: string;
}

export interface IProducto {
  id_producto: number;
  nombre_producto: string;
  codigo_barras: string;
  categoria: string;
  precio_unitario: number;
  precio_venta: number;
  stock: number;
  estado: number;
  proveedor: Proveedor;
}

export interface IProductos {
  data: IProducto[];
}
