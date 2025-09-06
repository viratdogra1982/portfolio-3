import React, { useState, useEffect, useRef, useMemo } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => a.id - b.id);
  }, []);

  const handleOpenModal = (project) => {
    window.history.pushState({ modal: true }, "");
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (window.history.state?.modal) {
      window.history.back();
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) setSelectedProject(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedProject]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 pb-20 px-[8vw] md:px-[6vw] lg:px-[10vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {sortedProjects.map((project, index) => {
          const isLastOdd =
            index === sortedProjects.length - 1 && sortedProjects.length % 2 !== 0;

          return (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className={`cursor-pointer border border-gray-400 bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 ${
                isLastOdd ? "md:col-span-2 md:max-w-[60%] md:mx-auto" : ""
              }`}
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-purple-400 text-xs font-medium">
                      + More
                    </span>
                  )}
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(project);
                    }}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div
            ref={modalRef}
            className="relative bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-purple-500"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 p-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-80 object-contain rounded-xl shadow-lg"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-300 py-2 rounded-full text-center font-semibold"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-full text-center font-semibold"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;