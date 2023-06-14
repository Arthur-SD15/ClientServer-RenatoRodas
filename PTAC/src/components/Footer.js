import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Rodape() {
  return (
    <footer className="bg-white dark:bg-custom-blue">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              className="h-12 mr-3"
              src="../logo-renato-rodas.png"
              alt="Logo Renato Rodas"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6">
            <div className="w-full md:w-auto">
              <h2 className="mb-4 text-base font-bold text-custom-yellow uppercase dark:text-custom-yellow">
                Contato
              </h2>
              <ul className="text-white text-sm dark:text-white">
                <li className="mb-4">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  +55 67 99940-8473
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  contato.renatorodas@gmail.com
                </li>
              </ul>
              <ul className="text-white text-sm dark:text-white font-medium">
                <li className="mb-4">
                  <h2 className="mb-4 text-base mt-8 font-bold text-custom-yellow uppercase dark:text-custom-yellow">
                    Siga nossas redes
                  </h2>
                </li>
                <li>
                  <FontAwesomeIcon icon={faFacebook} className="mr-2 rounded-full bg-custom-yellow p-2" />
                  <FontAwesomeIcon icon={faInstagram} className="mr-2 rounded-full bg-custom-yellow p-2" />
                  <FontAwesomeIcon icon={faTiktok} className="mr-2 rounded-full bg-custom-yellow p-2" />
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 rounded-full bg-custom-yellow p-2" />
                </li>
              </ul>
            </div>

            <div className="md:mt-0 mt-4 hidden md:block">
              <h2 className="mb-4 text-base font-bold text-custom-yellow uppercase dark:text-custom-yellow">
                Endereço
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.681024140769!2d-53.33992488500328!3d-22.253275883666363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948e7cfa32ba0ec3%3A0x4148712e498ba989!2sAv.%20Eur%C3%ADco%20Soares%20Andrade%2C%20160%20-%20Centro%2C%20Nova%20Andradina%20-%20MS%2C%2079750-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1623698210466!5m2!1spt-BR!2sus"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-2 bg-custom-yellow">
        <span className="text-sm text-white dark:text-white">
          © 2023 Renato Rodas™ | Todos os Direitos Reservados.
        </span>
      </div>
    </footer>
  );
}
