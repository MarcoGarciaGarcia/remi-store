import {
  Home,
  UserPlus,
  ShieldCheck,
  CalendarDays,
  School,
  BookOpen,
  GraduationCap,
  UsersRound,
  UserCheck,
  Megaphone,
  UserRoundPlus,
  DollarSign,
  CircleDollarSign,
  Wallet,
  FileDown,
  ChartLine,
  Pickaxe
} from 'lucide-react'

export interface IRoute {
  title: string
  slug: string
  href: string
  icon?: unknown
  active?: string
  children?: IRoute[]
}

export const mainNav: IRoute[] = [
  {
    title: 'Inicio',
    slug: 'home',
    href: '/dashboard',
    active: '/dashboard',
    icon: Home
  },
  {
    title: 'Gestión de Ventas',
    slug: 'business',
    active: '/dashboard/sections/sales',
    href: '/dashboard/sections/sales',
    icon: ChartLine
  },
  {
    title: 'Gestión de Empleados',
    slug: 'users',
    active: '/dashboard/sections/workers',
    href: '/dashboard/sections/workers',
    icon: Pickaxe,
  },
  {
    title: 'Gestión financiera',
    slug: 'blog',
    active: '/dashboard/sections/financial',
    href: '/dashboard/sections/financial',
    icon: Wallet
  }
]

export const mainNavAdmin: IRoute[] = [
  {
    title: 'Inicio',
    slug: 'home',
    href: '/dashboard',
    active: '/dashboard',
    icon: Home
  },
  {
    title: 'Comunidad escolar',
    slug: 'business',
    active: '/dashboard/role_administrativo/sections/community',
    href: '/dashboard/role_administrativo/sections/community',
    icon: UsersRound
  },
  {
    title: 'Asistencias',
    slug: 'users',
    active: '/dashboard/role_administrativo/sections/asistencias',
    href: '/dashboard/role_administrativo/sections/asistencias',
    icon: UserCheck
  },
  {
    title: 'Planeación educativa',
    slug: 'blog',
    active: '/blog',
    href: '/dashboard',
    icon: Megaphone,
    children: [
      {
        title: 'Pagos',
        slug: 'roles',
        href: '/role_administrativo/sections/pagos',
        active: '/role_administrativo/sections/pagos',
        icon: DollarSign
      },
      {
        title: 'Inscripción',
        slug: 'list',
        href: '/role_administrativo/sections/inscripcion',
        active: '/role_administrativo/sections/inscripcion',
        icon: UserRoundPlus
      },
      {
        title: 'Avisos',
        slug: 'list',
        href: '/dashboard/sections/new-user-student',
        active: '/dashboard/sections/new-user-student',
        icon: Megaphone
      }
    ]
  }
]

export const mainNavTeacher: IRoute[] = [
  {
    title: 'Inicio',
    slug: 'home',
    href: '/dashboard',
    active: '/dashboard',
    icon: Home
  },
  {
    title: 'Gestión de Escuelas',
    slug: 'business',
    active: '/business',
    href: '/business',
    icon: School
  },
  {
    title: 'Comunidad escolar',
    slug: 'users',
    active: '/users',
    href: '',
    icon: UserPlus,
    children: [
      {
        title: 'Administrativos',
        slug: 'roles',
        href: '/dashboard/sections/new-user-admin',
        active: '/dashboard/sections/new-user-admin',
        icon: ShieldCheck
      },
      {
        title: 'Profesores',
        slug: 'list',
        href: '/dashboard/sections/new-user-teacher',
        active: '/dashboard/sections/new-user-teacher',
        icon: BookOpen
      },
      {
        title: 'Alumnos',
        slug: 'list',
        href: '/dashboard/sections/new-user-student',
        active: '/dashboard/sections/new-user-student',
        icon: GraduationCap
      }
    ]
  },
  {
    title: 'Planificación educativa',
    slug: 'blog',
    active: '/blog',
    href: '/dashboard/sections/planeation',
    icon: CalendarDays
  }
]

export const mainNavStudent: IRoute[] = [
  {
    title: 'Inicio',
    slug: 'home',
    active: '/dashboard/alumno/dashboard-alumno',
    href: '/dashboard/alumno/dashboard-alumno',
    icon: Home
  },
  {
    title: 'Pagos',
    slug: 'pagos',
    active: '/dashboard',
    href: '/dashboard',
    icon: CircleDollarSign,
    children: [
      {
        title: 'Estado de cuenta',
        slug: 'estado',
        href: '/alumno/pagos/estado_cuenta',
        active: '/alumno/pagos/estado_cuenta',
        icon: Wallet
      },
      {
        title: 'Fichas de pago',
        slug: 'ficha',
        href: '/alumno/pagos/ficha_pago',
        active: '/alumno/pagos/ficha_pago',
        icon: FileDown
      }
    ]
  }
]
