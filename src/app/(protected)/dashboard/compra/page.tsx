import SerchProduct from "./components/buscador";
import Ventas from "./components/carrito";

const Shopping: React.FC = () => {
  return (
    <section className="h-screen">
      <p className="text-2xl font-bold p-5 text-primary-500">MISCELÁNEA REMI</p>
      <div className="w-full pt-10 justify-center flex">
        <SerchProduct></SerchProduct>
        <Ventas></Ventas>
      </div>
    </section>
  );
};
export default Shopping;
