import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;
  const dataS = req.cookies.get('escuela')?.value;
  const encryptedRole = req.cookies.get('userRole')?.value;
  const url = req.nextUrl.pathname;

  const adminRoutes = [
    '/dashboard',
    '/dashboard/sections/sales',
    '/dashboard/sections/workers',
    '/dashboard/sections/financial',
    '/dashboard/asistencia',
    '/dashboard/sections/resultados',
  ];

  const alumnoRoutes = [
    '/dashboard-empleado',
    '/dashboard/sections/products-add',
    '/dashboard/sections/check',
  ];

  const administrativoRoutes = [
    '/dashboard/sections/check',
    '/dashboard/compra',
  ];

  const blockedRoutes = ['/dashboard/datos-school', '/dashboard/datos-admin'];

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  if (encryptedRole) {
    const role = encryptedRole;
    console.log("rol: " + role);

    if (isAdminRoute(role, url, adminRoutes)) {
      return NextResponse.next();
    }

    if (isAlumnoRoute(role, url, alumnoRoutes)) {
      return NextResponse.next();
    }

    if (isAdministrativoRoute(role, url, administrativoRoutes)) {
      return NextResponse.next();
    }

    // Si el rol no tiene acceso a la ruta, redirigir a una página de acceso denegado
    return NextResponse.redirect(new URL('/access-denied', req.url));
  }

  if (blockedRoutes.includes(url) && dataS === 'true') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

function isAdminRoute(role: string, url: string, adminRoutes: string[]): boolean {
  if (role === '1') {
    if (adminRoutes.includes(url)) {
      console.log("es admin");
      return true;
    } else {
      console.log("no es admin");
      return false;
    }
  }
  return false;
}

function isAlumnoRoute(role: string, url: string, alumnoRoutes: string[]): boolean {
  if (role === '3') {
    if (alumnoRoutes.includes(url)) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

function isAdministrativoRoute(role: string, url: string, administrativoRoutes: string[]): boolean {
  if (role === '2') {
    if (administrativoRoutes.includes(url)) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

// Este middleware se aplica a todas las rutas bajo /dashboard
export const config = {
  matcher: ['/dashboard/:path*']
}
