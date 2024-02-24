import Card from "../components/card";

const projects = [
    {
        id: 1,
        title: 'E-commerce Website',
        description: 'A full-stack e-commerce website built with React, Node.js, Express.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and checkout.',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        demoUrl: 'https://example.com',
        sourceUrl: 'https://github.com/username/project1'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A task management application built with React, Redux, Node.js, and MongoDB. Users can create, edit, and delete tasks, and tasks are organized by project.',
        tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
        demoUrl: 'https://example.com',
        sourceUrl: 'https://github.com/username/project2'
    },
    {
        id: 3,
        title: 'Social Media Dashboard',
        description: 'A social media dashboard built with React, Redux, and Node.js. Users can view and interact with their social media accounts, schedule posts, and analyze engagement.',
        tags: ['React', 'Redux', 'Node.js'],
        demoUrl: 'https://example.com',
        sourceUrl: 'https://github.com/username/project3'
    },
    {
        id: 4,
        title: 'Weather App',
        description: 'A weather application built with React and Node.js. Users can search for weather information by city and view current weather conditions and forecasts.',
        tags: ['React', 'Node.js'],
        demoUrl: 'https://example.com',
        sourceUrl: 'https://github.com/username/project4'
    }
];

export default function Portfolio() {
    return (
        <div className="m-16">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#FD5956]">Projets</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 ">
                {projects.map((project) => (
                    <Card key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}
