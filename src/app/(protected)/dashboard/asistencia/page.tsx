import Ventas from "./components/carrito";
import SerchCheck from "./components/buscador";

const Shopping: React.FC = () => {
  return (
    <section className="h-screen">
      <p className="text-2xl font-bold p-5 text-primary-500">Asistencias</p>
      <div className="w-full pt-10 justify-center flex">
        <SerchCheck />
        <Ventas></Ventas>
      </div>
    </section>
  );
};
export default Shopping;
