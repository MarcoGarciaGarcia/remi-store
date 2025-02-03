interface DetalleVenta {
    nombre_producto: string;
    precio_unitario: number;
    id_proveedor: number;
    nombre_proveedor: string;
    cantidad: number;
    inversion: number;
    venta: number;
    total_neto_producto: number;
  }
  
  interface Venta {
    id_ventas: number;
    nombre_usuario: string;
    fecha_venta: string; // Puedes cambiarlo a Date si prefieres trabajar con objetos Date
    inversion_grupo: number;
    total_bruto_grupo: number;
    total_neto_grupo: number;
    detalles: DetalleVenta[];
  }
  
  export interface IVentas {
    status: number;
    message: string;
    inversion_total: number;
    total_venta: number;
    ganancia: number;
    ventas: Venta[];
  }
  