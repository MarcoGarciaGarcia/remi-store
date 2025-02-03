import { Button, Textarea } from "@nextui-org/react";
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
      <div className="w-full justify-center justify-items-center grid mt-10 -ml-5">
        <Textarea
          label="Description"
          placeholder="Si necesitas agregar un comentario, escríbe aquí"
          multiple
          className="max-w-xs bg-black w-[600px] h-auto text-white font-sans rounded-lg"
        />
        <Button
          className="text-white bg-black rounded-lg w-72 mt-5 font-sans font-bold"
          color="primary"
          variant="light"
        >
          Entrada
        </Button>
      </div>
    </section>
  );
};
export default Shopping;
