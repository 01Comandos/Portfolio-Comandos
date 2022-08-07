import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import Projects from "../components/Projects/Projects";
import projectsList from "../content/projects";
import { isMobile } from "../utils";
import { trackEvent, visitPage } from "../analytics/events";
import SeoConfig from "../components/SeoConfig/SeoConfig";
import Head from "next/head";
import LazyImage from "../components/LazyImage/LazyImage";

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
      <SeoConfig
        title="Projects - Comandos"
        description="Case studies of our experience in digital product projects, product strategy, MVP’s of new products and web3."
      />

      <div className={styles.containerDesktop}>
        <figure className={styles.projectPictureContainer}>
          <LazyImage
            className={styles.projectPicture}
            src={selectedProject.pictures.desktop}
            alt={selectedProject.name}
          />
        </figure>
        <div className={styles.projectListContainer}>
          <h2 className={styles.title}>
            Looks like <span>magic</span>, works like <span>science</span>.
          </h2>
          <div className={styles.projectsList}>
            {projectsList.map((project, index) => (
              <Link
                key={index}
                href={`/p/${project.slug}`}
                onClick={() =>
                  trackEvent("Project clicked", { project: project.name })
                }
              >
                <a
                  className={styles.projectDetails}
                  onMouseEnter={() => hoverProject(project)}
                >
                  <div
                    className={
                      selectedProject.id === project.id
                        ? projectSelectedStyles
                        : projectStyles
                    }
                  >
                    <span>{project.name}</span>
                  </div>
                  <p
                    className={`${styles.projectDescription} ${styles.projectText}`}
                  >
                    {project.shortDescription}
                  </p>
                  <div className={styles.iconContainer}>
                    {selectedProject.id === project.id && (
                      <LazyImage
                        className={styles.arrowIcon}
                        src="/icons/icon-arrow.svg"
                      />
                    )}
                  </div>
                </a>
              </Link>
            ))}
          </div>
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
