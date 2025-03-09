"use client";
import SplitText from "@/components/ogl/SplitText";
import { Rubik } from "next/font/google";

const abFont = Rubik({
  subsets: ["latin"],
  weight: "400",
});

const handleAnimationComplete = () => {
  console.log("Bienvenido a RemmiRS");
};

const IntroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full" id="inicio">
      <div
        className="relative h-[100dvh] w-full overflow-hidden text-primary-500 bg-transparent"
        // style={{
        //   background: "url(/63666.jpg) top center/cover no-repeat, rgba(0, 0, 0, 0.8)",
        // }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center mt-32 mx-auto max-w-2xl px-4 lg:flex z-50">
          <SplitText
            text="Bienvenido a RemmiRS!"
            className="text-5xl font-semibold text-center mb-4"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p
            className={`${abFont.className} tracking-wider text-sm leading-2 text-black justify-end text-center`}
          >
            Sistema automatizado que permita registrar <br></br>y controlar
            eficientemente las operaciones <br></br>diarias de las tiendas.
          </p>
          <div
            className="lg:w-[700px] w-80 mt-12 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/assets/ejemplo1.jpg)",
              aspectRatio: "16/9", // Relación de aspecto 16:9
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
