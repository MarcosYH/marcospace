import { images } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Projet 1",
    description: "Description du projet 1",
    image: images.project1,
    link: "#",
  },
  {
    title: "Projet 2",
    description: "Description du projet 2",
    image: images.project2,
    link: "#",
  },
  // Ajoutez d'autres projets ici
];

const Projects = () => {
  return (
    <div className="projects-section w-full h-screen overflow-x-auto overflow-y-hidden relative snap-x snap-mandatory">
      <motion.div
        className="second-section h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Mes Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 mt-4 inline-block"
                >
                  Voir le projet
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
