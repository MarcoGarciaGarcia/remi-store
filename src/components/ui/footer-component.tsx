import { Divider, Link } from "@nextui-org/react";
import { Routes } from "@/routes";
import { RedesSocialesEnum } from "@/enum";

const Footer: React.FC = () => {
  const data = [
    {
      title: "Navegación",
      subtitle: [
        {
          section: "Inicio",
          href: Routes.HOME,
        },
        {
          section: "Novedades",
          href: Routes.NEWS,
        },
        {
          section: "FAQs",
          href: Routes.FAQ,
        },
      ],
    },
    {
      title: "Nosotros",
      subtitle: [
        {
          section: "Director",
          href: "/nosotros/#director",
        },
        {
          section: "Misión y filosofía",
          href: "/nosotros/#mision",
        },
        {
          section: "Institución",
          href: "/nosotros/#institucion",
        },
        {
          section: "Reglamento",
          href: "/nosotros/#reglamento",
        },
      ],
    },
    {
      title: "Oferta educativa",
      subtitle: [
        {
          section: "Licenciaturas",
          href: "/oferta-educativa/#licenciaturas",
        },
        {
          section: "Contacto",
          href: Routes.CONTACT,
        },
        {
          section: "Maestrías",
          href: "/oferta-educativa/#maestrias",
        },
      ],
    },
    {
      title: "Legal",
      subtitle: [
        {
          section: "Términos y condiciones",
          href: "/",
        },
        {
          section: "Política de privacidad",
          href: "/",
        },
      ],
    },
  ];

  return (
    <footer className="py-12 px-8 bg-black">
      <Divider className="bg-primary" />
      <div className="grid grid-cols-1 md:grid-cols-3 py-8 max-w-7xl mx-auto gap-8">
        <div>
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-white max-w-52 text-base md:text-lg md:leading-6">
              Centro de Estudios Universitarios de Cuautla
            </p>
          </div>
          <div className="flex gap-x-4 mt-8">
            <Link href={RedesSocialesEnum.FACEBOOK} target="_blank">
              <span className="sr-only">Facebook</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-gray-400"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link href="" target="_blank">
              <span className="sr-only">Instagram</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-gray-400"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link href={RedesSocialesEnum.WHATSAPP} target="_blank">
              <span className="sr-only">WhatsApp</span>
              <svg
                className="h-6 w-6"
                viewBox="0 0 360 362"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M307.546 52.5655C273.709 18.685 228.706 0.0171895 180.756 0C81.951 0 1.53846 80.404 1.50408 179.235C1.48689 210.829 9.74646 241.667 25.4319 268.844L0 361.736L95.0236 336.811C121.203 351.096 150.683 358.616 180.679 358.625H180.756C279.544 358.625 359.966 278.212 360 179.381C360.017 131.483 341.392 86.4547 307.546 52.5741V52.5655ZM180.756 328.354H180.696C153.966 328.346 127.744 321.16 104.865 307.589L99.4242 304.358L43.034 319.149L58.0834 264.168L54.5423 258.53C39.6304 234.809 31.749 207.391 31.7662 179.244C31.8006 97.1036 98.6334 30.2707 180.817 30.2707C220.61 30.2879 258.015 45.8015 286.145 73.9665C314.276 102.123 329.755 139.562 329.738 179.364C329.703 261.513 262.871 328.346 180.756 328.346V328.354ZM262.475 216.777C257.997 214.534 235.978 203.704 231.869 202.209C227.761 200.713 224.779 199.966 221.796 204.452C218.814 208.939 210.228 219.029 207.615 222.011C205.002 225.002 202.389 225.372 197.911 223.128C193.434 220.885 179.003 216.158 161.891 200.902C148.578 189.024 139.587 174.362 136.975 169.875C134.362 165.389 136.7 162.965 138.934 160.739C140.945 158.728 143.412 155.505 145.655 152.892C147.899 150.279 148.638 148.406 150.133 145.423C151.629 142.432 150.881 139.82 149.764 137.576C148.646 135.333 139.691 113.287 135.952 104.323C132.316 95.5909 128.621 96.777 125.879 96.6309C123.266 96.5019 120.284 96.4762 117.293 96.4762C114.302 96.4762 109.454 97.5935 105.346 102.08C101.238 106.566 89.6691 117.404 89.6691 139.441C89.6691 161.478 105.716 182.785 107.959 185.776C110.202 188.767 139.544 234.001 184.469 253.408C195.153 258.023 203.498 260.782 210.004 262.845C220.731 266.257 230.494 265.776 238.212 264.624C246.816 263.335 264.71 253.786 268.44 243.326C272.17 232.866 272.17 223.893 271.053 222.028C269.936 220.163 266.945 219.037 262.467 216.794L262.475 216.777Z"
                  className="fill-gray-400"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-40">
          {data.map(({ title, subtitle }, index) => (
            <div className="w-40 pr-10" key={index}>
              <h3 className="text-white text-lg font-semibold">{title}</h3>
              <ul className="mt-2 space-y-2">
                {subtitle.map(({ section, href }, subIndex) => (
                  <li key={subIndex}>
                    <Link href={href} className="text-gray-200 text-sm ">
                      {section}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Divider className="bg-primary" />
      <div className="pt-8">
        <p className="text-white text-sm text-center">
          &copy; 2024 Centro de Estudios Universitarios de Cuautla. Todos los
          derechos reservados.
        </p>
        <p className="text-white text-sm text-center">
          Hecho por{" "}
          <a
            href="https://www.faces-consulting-it.com.mx/"
            className="hover:border-b-2 hover:white"
          >
            Faces Consulting IT
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
