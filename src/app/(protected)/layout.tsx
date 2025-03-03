import HeaderResponsive from "@/components/dashboard/header-responsive";
import HeaderDashboard from "@/components/dashboard/header.dashboard";
import { SidebarDesktop } from "@/components/sidebar-component";

interface ILayoutDashboardProps {
  children: React.ReactNode;
}
const LayoutDashboard: React.FC<ILayoutDashboardProps> = ({ children }) => {
  return (
    <section className="bg-transparent">
      <div></div>
      <div className="block lg:ml-[0px] bg-gradient-to-r from-zinc-50 to-slate-200">
        <SidebarDesktop />{" "}
        {/*Este componente es para pantallas md hacia arriba*/}
        <div className="min-h-screen pt-4 pb-16 px-3x !overflow-hidden lg:ml-[180px] md:ml-0 ml-0">
          <HeaderDashboard />
          <HeaderResponsive></HeaderResponsive>
          {children}
        </div>
        {/*<footer className="py-12 px-8 bg-primary-500 grid mt-10">
          <Divider className="bg-primary-500" />
          <div className="pt-8">
            <p className="text-white text-sm text-center">
              &copy; 2024 Miscelanea REMI. Todos los derechos reservados.
            </p>
            <p className="text-white text-sm text-center mb-5">
              Hecho por{" "}
              <a
                href="https://www.faces-consulting-it.com.mx/"
                className="hover:border-b-2 hover:white"
              ></a>
            </p>
          </div>
          <Divider className="bg-primary-500" />
        </footer>*/}
      </div>
    </section>
  );
};
export default LayoutDashboard;
