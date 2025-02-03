import SerchProduct from "./components/buscador";
import Ventas from "./components/carrito";

const Shopping: React.FC = () => {
  return (
    <section className="h-screen">
      <p className="text-4xl text-center font-sans font-bold p-5 text-black">Sistema de compras</p>
      <div className="w-full pt-10 justify-center flex gap-x-20">
        <SerchProduct></SerchProduct>
        <Ventas></Ventas>
      </div>
    </section>
  );
};
export default Shopping;
