import { Briefcase } from "lucide-react";
import { projects } from "../../const/const";
import ProjectCard from "../Card/ProjectCard";

export const ProjectsSection = ({ isVisible }: { isVisible: boolean }) => (
  <section>
    <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
      <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl">
        <Briefcase className="text-white" size={32} />
      </div>
      Proyectos
    </h2>
    <div className="grid gap-8 cursor-pointer grid-cols-1 md:grid-cols-2 ">
      {projects.map((project, index) => {
        return (
            <a
            href={project.projectUrl}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            >
            <ProjectCard project={project} index={index} isVisible={isVisible} />
            </a>
        );
      })}
    </div>
  </section>
);