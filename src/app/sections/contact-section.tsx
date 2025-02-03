import { ContactForm } from "../components";

const ContactSection: React.FC = () => {
  return (
    <section id="information" className="overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-8 lg:px-24 py-8 lg:py-48 bg-gray-100/40">
          <h2 className="mt-2 text-center lg:text-start text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trabajemos <span className="text-primary-500"> Juntos</span>
          </h2>
          <p className="mt-10 text-sm tracking-wider leading-5 text-black lg:text-start text-center">
            En <span className="text-primary-500">Raxima</span>, tu satisfacción
            es nuestra prioridad. Si tienes preguntas, necesitas más información
            sobre nuestros servicios o deseas comenzar un proyecto, no dudes en
            contactarnos.
          </p>
          <dl className="hidden lg:block mt-10 max-w-none space-y-8 text-base leading-7 text-gray-600">
            <div className="relative pl-9 ">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 664.3 1080"
                  className="w-5 inline mr-5"
                >
                  <g>
                    <polygon
                      fill="#636363"
                      points="657.9,351 331,1055.9 4.1,351 331,677.9"
                    ></polygon>
                    <path d="M331,1056.2l-0.1-0.2L3.7,350.4L331,677.7l327.3-327.3l-0.3,0.6L331,1056.2z M4.5,351.6L331,1055.6l326.5-703.9L331,678.1 l-0.1-0.1L4.5,351.6z"></path>
                  </g>
                  <g>
                    <path
                      fill="#1D1D1B"
                      d="M657.9,351L331,677.9L4.1,351L331,24.1L657.9,351z M331,534l183-183L331,168.1L148,351L331,534z"
                    ></path>
                    <path d="M331,678.1L331,678.1L3.9,351l0.1-0.1L331,24l0.1,0.1L658,351l-0.1,0.1L331,678.1z M4.3,351L331,677.7L657.7,351L331,24.3 L4.3,351z M331,534.2L331,534.2L147.9,351L331,167.9l0.1,0.1l183.1,183l-0.1,0.1L331,534.2z M148.2,351L331,533.8L513.8,351 L331,168.3L148.2,351z"></path>
                  </g>
                  <polygon points="657.8,351.1 331,24.3 4.2,351.1 4,350.9 331,24 331.1,24.1 657.9,350.9"></polygon>
                  <path d="M331,534.1L147.9,351L331,167.9l0.1,0.1l183,183l-0.1,0.1L331,534.1z M148.2,351L331,533.8L513.7,351L331,168.3L148.2,351z"></path>
                  <path d="M331,1056.2l-0.1-0.2L3.7,350.4L331,677.7l327.3-327.3l-0.3,0.6L331,1056.2z M4.5,351.6L331,1055.6l326.5-703.9L331,678.1 l-0.1-0.1L4.5,351.6z"></path>
                </svg>
              </dt>
              <dd className="inline">
                &nbsp;&nbsp;Calle Prol Progreso, C.P. 54783, Teoloyucan, Edo.
                Méx.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1080 1080"
                  className="w-7 inline mr-5"
                >
                  <path
                    fill="#636363"
                    d="M798.1,973.7c-39.6,3-78.3-2-116.7-11.7c-51.3-13.1-101.1-30.3-148.8-53.1c-37.9-18.1-73.2-40.8-107.4-65.2 c-68.8-49.1-131.1-105.4-188.8-167.2s-101.3-132-133.4-209.8c-15.8-38.3-24.4-78.5-30.5-119.3c-3.6-23.8-5-47.7-1.6-71.6 c9.5-66,44.2-115.4,100-150.7c13.3-8.4,28.2-10.9,43.6-11.7c21.8-1.1,43.4,0.5,64.9,3.7c28.5,4.2,47.7,20.8,57.1,47.4 c18.7,53.2,36.4,106.7,54.2,160.2c5.8,17.6,7.2,35.6,1,53.7c-3.2,9.3-9.8,16.1-15.9,23.4c-15.1,18.3-30.2,36.5-45.3,54.8 c-7.6,9.2-8.9,19.7-5.2,30.7c1.7,5.4,4.3,10.4,7.6,14.9c68.4,86,148.4,159.1,241.7,217.5c9.9,6.3,20.2,12,30.7,17.1 c16.9,8.1,33.8,3.9,46.5-9.9c16.5-18,33-36.1,50.1-53.5c18.5-18.7,41.5-25.5,67.3-20.3c56.5,11.4,112.8,23.4,169.2,35.2 c15.6,3.3,26.8,13.1,36.1,25.6c9.1,12.2,14.3,26.2,18.2,40.7c4.7,17.8,8.6,35.9,9.7,54.4c1,15.5-3.3,29.6-9.7,43.3 c-15.7,33.8-40.9,59.2-71.1,80.3c-35.5,24.9-75.1,37.7-118,40.8C801.9,973.5,800,973.6,798.1,973.7z"
                  ></path>
                  <polygon
                    fill="#1D1D1B"
                    points="875.3,525.8 517.7,168.2 875.3,168.2"
                  ></polygon>
                  <path
                    fill="#1D1D1B"
                    d="M875.3,542.9c-4.5,0-8.8-1.8-12-5L505.7,180.2c-6.6-6.6-6.7-17.4-0.1-24c3.2-3.2,7.5-5,12.1-5h357.6 c9.4,0,17,7.6,17,17v357.6C892.3,535.2,884.8,542.8,875.3,542.9C875.4,542.9,875.4,542.9,875.3,542.9z M558.7,185.2l299.6,299.6 V185.2H558.7z"
                  ></path>
                </svg>
              </dt>
              <dd className="inline">+52 1 55 2251 5215</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1080 1080"
                  className="w-7 inline mr-5"
                >
                  <path
                    fill="#636363"
                    d="M1006.7,217.7v644.6H73.3V217.7L540,540L1006.7,217.7z M905.9,763.1v-90.4H620v90.4H905.9z"
                  ></path>
                  <path
                    fill="#1D1D1B"
                    d="M1006.7,217.7L540,540L73.3,217.7H1006.7z M540,424.2L701.1,313H378.9L540,424.2z"
                  ></path>
                  <rect
                    x="620"
                    y="672.7"
                    width="285.9"
                    height="90.4"
                    fill="#1D1D1B"
                  ></rect>
                  <polyline
                    points="1006.7,217.7 1006.7,862.3 73.3,862.3 73.3,217.7"
                    fill="none"
                    stroke="#1D1D1B"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polyline>
                  <polygon
                    points="73.3,217.7 540,540 1006.7,217.7"
                    fill="none"
                    stroke="#1D1D1B"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="378.9,313 701.1,313 540,424.2"
                    fill="none"
                    stroke="#1D1D1B"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polygon>
                  <rect
                    x="620"
                    y="672.7"
                    width="285.9"
                    height="90.4"
                    fill="none"
                    stroke="#1D1D1B"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                </svg>
              </dt>
              <dd className="inline">daniel.cabrera@raxima.com.mx</dd>
            </div>
          </dl>
        </div>
        <div className="px-8 lg:px-24 py-16 lg:flex lg:justify-items-center lg:flex-col lg:items-center">
          <ContactForm />
        </div>
        <div className="px-6 block lg:hidden mb-16 -mt-12">
          <dl className="mt-10 max-w-xl space-y-5 leading-5 text-gray-600 lg:max-w-none text-sm">
            <div className="relative pl-9 ">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 664.3 1080"
                  className="w-5 inline mr-5"
                >
                  <g>
                    <polygon
                      fill="#636363"
                      points="657.9,351 331,1055.9 4.1,351 331,677.9"
                    ></polygon>
                    <path d="M331,1056.2l-0.1-0.2L3.7,350.4L331,677.7l327.3-327.3l-0.3,0.6L331,1056.2z M4.5,351.6L331,1055.6l326.5-703.9L331,678.1 l-0.1-0.1L4.5,351.6z"></path>
                  </g>
                  <g>
                    <path
                      fill="#1D1D1B"
                      d="M657.9,351L331,677.9L4.1,351L331,24.1L657.9,351z M331,534l183-183L331,168.1L148,351L331,534z"
                    ></path>
                    <path d="M331,678.1L331,678.1L3.9,351l0.1-0.1L331,24l0.1,0.1L658,351l-0.1,0.1L331,678.1z M4.3,351L331,677.7L657.7,351L331,24.3 L4.3,351z M331,534.2L331,534.2L147.9,351L331,167.9l0.1,0.1l183.1,183l-0.1,0.1L331,534.2z M148.2,351L331,533.8L513.8,351 L331,168.3L148.2,351z"></path>
                  </g>
                  <polygon points="657.8,351.1 331,24.3 4.2,351.1 4,350.9 331,24 331.1,24.1 657.9,350.9"></polygon>
                  <path d="M331,534.1L147.9,351L331,167.9l0.1,0.1l183,183l-0.1,0.1L331,534.1z M148.2,351L331,533.8L513.7,351L331,168.3L148.2,351z"></path>
                  <path d="M331,1056.2l-0.1-0.2L3.7,350.4L331,677.7l327.3-327.3l-0.3,0.6L331,1056.2z M4.5,351.6L331,1055.6l326.5-703.9L331,678.1 l-0.1-0.1L4.5,351.6z"></path>
                </svg>
              </dt>
              <dd className="inline">
                &nbsp;&nbsp;Calle Prol Progreso, C.P. 54783,<br></br>Teoloyucan,
                Edo. Méx.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1080 1080"
                  className="w-7 inline mr-5"
                >
                  <path
                    fill="#636363"
                    d="M798.1,973.7c-39.6,3-78.3-2-116.7-11.7c-51.3-13.1-101.1-30.3-148.8-53.1c-37.9-18.1-73.2-40.8-107.4-65.2 c-68.8-49.1-131.1-105.4-188.8-167.2s-101.3-132-133.4-209.8c-15.8-38.3-24.4-78.5-30.5-119.3c-3.6-23.8-5-47.7-1.6-71.6 c9.5-66,44.2-115.4,100-150.7c13.3-8.4,28.2-10.9,43.6-11.7c21.8-1.1,43.4,0.5,64.9,3.7c28.5,4.2,47.7,20.8,57.1,47.4 c18.7,53.2,36.4,106.7,54.2,160.2c5.8,17.6,7.2,35.6,1,53.7c-3.2,9.3-9.8,16.1-15.9,23.4c-15.1,18.3-30.2,36.5-45.3,54.8 c-7.6,9.2-8.9,19.7-5.2,30.7c1.7,5.4,4.3,10.4,7.6,14.9c68.4,86,148.4,159.1,241.7,217.5c9.9,6.3,20.2,12,30.7,17.1 c16.9,8.1,33.8,3.9,46.5-9.9c16.5-18,33-36.1,50.1-53.5c18.5-18.7,41.5-25.5,67.3-20.3c56.5,11.4,112.8,23.4,169.2,35.2 c15.6,3.3,26.8,13.1,36.1,25.6c9.1,12.2,14.3,26.2,18.2,40.7c4.7,17.8,8.6,35.9,9.7,54.4c1,15.5-3.3,29.6-9.7,43.3 c-15.7,33.8-40.9,59.2-71.1,80.3c-35.5,24.9-75.1,37.7-118,40.8C801.9,973.5,800,973.6,798.1,973.7z"
                  ></path>
                  <polygon
                    fill="#1D1D1B"
                    points="875.3,525.8 517.7,168.2 875.3,168.2"
                  ></polygon>
                  <path
                    fill="#1D1D1B"
                    d="M875.3,542.9c-4.5,0-8.8-1.8-12-5L505.7,180.2c-6.6-6.6-6.7-17.4-0.1-24c3.2-3.2,7.5-5,12.1-5h357.6 c9.4,0,17,7.6,17,17v357.6C892.3,535.2,884.8,542.8,875.3,542.9C875.4,542.9,875.4,542.9,875.3,542.9z M558.7,185.2l299.6,299.6 V185.2H558.7z"
                  ></path>
                </svg>
              </dt>
              <dd className="inline">+52 1 55 2251 5215</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1080 1080"
                  className="w-7 inline mr-5"
                >
                  <path
                    fill="#636363"
                    d="M1006.7,217.7v644.6H73.3V217.7L540,540L1006.7,217.7z M905.9,763.1v-90.4H620v90.4H905.9z"
                  ></path>
                  <path
                    fill="#1D1D1B"
                    d="M1006.7,217.7L540,540L73.3,217.7H1006.7z M540,424.2L701.1,313H378.9L540,424.2z"
                  ></path>
                  <rect
                    x="620"
                    y="672.7"
                    width="285.9"
                    height="90.4"
                    fill="#1D1D1B"
                  ></rect>
                  <polyline
                    points="1006.7,217.7 1006.7,862.3 73.3,862.3 73.3,217.7"
                    fill="none"
                    stroke="#1D1D1B"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polyline>
                  <polygon
                    points="73.3,217.7 540,540 1006.7,217.7"
                    fill="none"
                    stroke="#1D1D1B"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="378.9,313 701.1,313 540,424.2"
                    fill="none"
                    stroke="#1D1D1B"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></polygon>
                  <rect
                    x="620"
                    y="672.7"
                    width="285.9"
                    height="90.4"
                    fill="none"
                    stroke="#1D1D1B"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                </svg>
              </dt>
              <dd className="inline">daniel.cabrera@raxima.com.mx</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
