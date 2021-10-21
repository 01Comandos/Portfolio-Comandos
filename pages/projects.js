import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import Projects from "../components/Projects/Projects";
import projectsList from "../content/projects.json";
import { isMobile } from "../utils";
import { trackEvent, visitPage } from "../analytics/events";

const projectDefault = projectsList[0];

const ProjectsPage = ({ isMobile }) => {
  const [selectedProject, setSelectedProject] = useState(projectDefault);
  const projectSelectedStyles = `${styles.projectName} ${styles.projectText} ${styles.projectSelected}`;
  const projectStyles = `${styles.projectName} ${styles.projectText}`;

  useEffect(() => {
    visitPage("Project page viewed");
  }, []);

  function hoverProject(project) {
    setSelectedProject(project);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerDesktop}>
        <figure className={styles.projectPictureContainer}>
          <img
            className={styles.projectPicture}
            src={selectedProject.pictures.desktop}
            alt={selectedProject.name}
          />
        </figure>
        <div>
          <h2 className={styles.title}>
            Looks like <span>magic</span>, works like <span>science</span>.
          </h2>
          <ul className={styles.projectsList}>
            {projectsList.map((project, index) => (
              <Link
                key={index}
                href={`/p/${project.url}`}
                onClick={() => trackEvent("Project clicked", { project: project.name })}
              >
                <li
                  className={styles.projectDetails}
                  onMouseEnter={() => hoverProject(project)}
                >
                  <span
                    className={
                      selectedProject.id === project.id
                        ? projectSelectedStyles
                        : projectStyles
                    }
                  >
                    {project.name}
                  </span>
                  <p
                    className={`${styles.projectDescription} ${styles.projectText}`}
                  >
                    {project.shortDescription}
                  </p>
                  {selectedProject.id === project.id && (
                    <img
                      className={styles.arrowIcon}
                      src="/icons/icon-arrow.svg"
                    />
                  )}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.containerMobile}>
        <Projects
          isMobile={isMobile}
          showDescription={false}
          showNavigationButton={false}
          showAllProjects={true}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      isMobile: isMobile(req),
    },
  };
};

export default ProjectsPage;
