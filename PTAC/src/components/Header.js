import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Capa() {
    return (
      <nav className="bg-white dark:bg-custom-blue border-b-12 border-custom-yellow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <img src="../logo-renato-rodas.png" className="h-8 mr-3" alt="Renato Rodas Logo" />
          </a>
          <div className="flex md:order-2">
            <button type="button" className="text-white bg-custom-green hover:bg-custom-green-hover focus:ring-4 focus:outline-none focus:ring-custom-green-hover font-medium rounded-lg text-sm px-4 py-2 flex items-center mr-3 md:mr-0 dark:bg-custom-green dark:hover:bg-custom-green-hover dark:focus:ring-custom-green-hover font-bold">
              <div className="flex items-center font-bold">
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffffff", width: "20px", height: "20px" }} />
                <span className="ml-2">Fale conosco</span>
              </div>
            </button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg dark:bg-custom-blue md:flex-row md:space-x-8 md:mt-0 md:bg-white dark:bg-custom-blue md:dark:bg-custom-blue">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-custom-yellow md:bg-transparent md:text-custom-yellow md:p-0 md:dark:text-custom-yellow" aria-current="page">Início</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-custom-yellow md:hover:bg-transparent md:hover:text-custom-yellow md:p-0 md:dark:hover:text-custom-yellow dark:text-white dark:hover:bg-gray-700 dark:hover:text-custom-yellow md:dark:hover:bg-transparent">Quem somos</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-custom-yellow md:hover:bg-transparent md:hover:text-custom-yellow md:p-0 md:dark:hover:text-custom-yellow dark:text-white dark:hover:bg-gray-700 dark:hover:text-custom-yellow md:dark:hover:bg-transparent">Serviços</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-custom-yellow md:hover:bg-transparent md:hover:text-custom-yellow md:p-0 md:dark:hover:text-custom-yellow dark:text-white dark:hover:bg-gray-700 dark:hover:text-custom-yellow md:dark:hover:bg-transparent">Produtos</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-custom-yellow md:hover:bg-transparent md:hover:text-custom-yellow md:p-0 md:dark:hover:text-custom-yellow dark:text-white dark:hover:bg-gray-700 dark:hover:text-custom-yellow md:dark:hover:bg-transparent">Cadastro</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}