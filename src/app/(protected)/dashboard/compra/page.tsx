import SerchProduct from "./components/buscador";
import Ventas from "./components/carrito";

const Shopping: React.FC = () => {
  return (
    <section className="h-full">
      <p className="lg:text-4xl text-xl text-center font-sans font-bold lg:pt-5 pt-16 text-black">Sistema de compras</p>
      <div className="w-full pt-10 justify-center lg:flex grid gap-x-20">
        <SerchProduct></SerchProduct>
        <Ventas></Ventas>
      </div>
    </section>
  );
};
export default Shopping;
