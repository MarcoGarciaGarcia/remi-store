import SerchCheck from "./components/buscador";

const Shopping: React.FC = () => {
  return (
    <section className="h-screen">
      <p className="text-4xl p-5 text-black font-sans font-bold text-center">Asistencias</p>
      <div className="w-full pt-10 justify-center flex">
        <SerchCheck />
      </div>
    </section>
  );
};
export default Shopping;
