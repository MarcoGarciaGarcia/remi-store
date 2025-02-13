import {
  Home,
  Wallet,
  ChartLine,
  Pickaxe,
  ListCheck,
  Barcode,
  ChartArea,
  ClipboardCheck,
  MonitorCog,
} from "lucide-react";

export interface IRoute {
  title: string;
  slug: string;
  href: string;
  icon: React.ComponentType;
  active?: string;
  children?: IRoute[];
}

export const mainNav: IRoute[] = [
  {
    title: "Inicio",
    slug: "home",
    href: "/dashboard",
    active: "/dashboard",
    icon: Home,
  },
  {
    title: "Gestión de Ventas",
    slug: "business",
    active: "/dashboard/sections/sales",
    href: "/dashboard/sections/sales",
    icon: ChartLine,
  },
  {
    title: "Gestión de Empleados",
    slug: "users",
    active: "/dashboard/sections/workers",
    href: "/dashboard/sections/workers",
    icon: Pickaxe,
  },
  {
    title: "Gestión financiera",
    slug: "blog",
    active: "/dashboard/sections/financial",
    href: "/dashboard/sections/financial",
    icon: Wallet,
  },
  {
    title: "Asistencia",
    slug: "blog",
    active: "/dashboard/asistencia",
    href: "/dashboard/asistencia",
    icon: ListCheck,
  },
  {
    title: "Resultados",
    slug: "blog",
    active: "/dashboard/sections/resultados",
    href: "/dashboard/sections/resultados",
    icon: ChartArea,
  },
];

export const mainNavAdmin: IRoute[] = [
  {
    title: "Inicio",
    slug: "home",
    href: "/dashboard-empleado",
    active: "/dashboard-empleado",
    icon: Home,
  },
  {
    title: "Control de productos",
    slug: "blog",
    active: "/dashboard/sections/products-add",
    href: "/dashboard/sections/products-add",
    icon: MonitorCog,
  },
  {
    title: "Registrar entrada",
    slug: "blog",
    active: "/dashboard/sections/check",
    href: "/dashboard/sections/check",
    icon: ClipboardCheck,
  },
];

export const mainNavWorker: IRoute[] = [
  {
    title: "Registrar entrada",
    slug: "blog",
    active: "/dashboard/sections/check",
    href: "/dashboard/sections/check",
    icon: ClipboardCheck,
  },
  {
    title: "Compra",
    slug: "blog",
    active: "/dashboard/compra",
    href: "/dashboard/compra",
    icon: Barcode,
  },
];
