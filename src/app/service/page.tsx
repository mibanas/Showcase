import { FC } from 'react';
import { FaLaptopCode, FaDatabase, FaServer } from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    title: 'Développement Frontend',
    description: 'Création d\'interfaces utilisateur interactives et réactives en utilisant les dernières technologies frontend comme React.js.',
    icon: <FaLaptopCode />
  },
  {
    title: 'Développement Backend',
    description: 'Construction d\'API robustes et évolutives en utilisant des frameworks backend modernes comme Node.js et Express.js.',
    icon: <FaServer />
  },
  {
    title: 'Base de Données',
    description: 'Utilisation de bases de données relationnelles et non relationnelles comme MySQL, MongoDB pour stocker et gérer les données.',
    icon: <FaDatabase />
  },
  // Ajoutez d'autres services ici...
];

const Service: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mes Services en tant que Développeur Fullstack
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Je propose une gamme complète de services de développement pour répondre à vos besoins.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#FD5956] text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
