import { FC } from 'react';
import { FaLaptopCode, FaDatabase, FaServer } from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Creating interactive and responsive user interfaces using the latest frontend technologies like React.js.',
    icon: <FaLaptopCode />
  },
  {
    title: 'Backend Development',
    description: 'Building robust and scalable APIs using modern backend frameworks like Node.js and Express.js.',
    icon: <FaServer />
  },
  {
    title: 'Database Management',
    description: 'Using relational and non-relational databases like MySQL, MongoDB to store and manage data.',
    icon: <FaDatabase />
  },
  // Add more services here...
];

const Service: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Services as a Fullstack Developer
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            I offer a comprehensive range of development services to meet your needs.
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
