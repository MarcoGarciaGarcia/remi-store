import Ventas from "./components/carrito";

const Shopping: React.FC = () => {
  return (
    <section className="h-screen mx-80 px-20 rounded-lg shadow-lg bg-white bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-3xl border border-opacity-20">
      <p className="text-4xl p-5 text-black font-sans font-bold text-center pt-10">
        Registra tu asistencia
      </p>
      <div className="w-full justify-items-center items-center pt-8 justify-center flex">
        <Ventas></Ventas>
      </div>
    </section>
  );
};
export default Shopping;
