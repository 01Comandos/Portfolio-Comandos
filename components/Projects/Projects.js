import Link from "next/link";
import Project from "../Project/Project";
import projectsList from "../../content/projects";
import styles from "./Projects.module.css";
import { trackEvent } from "../../analytics/events";

const Projects = ({
  isMobile,
  showDescription = true,
  showNavigationButton = true,
  showAllProjects = false,
  lightTheme,
  limit = undefined,
}) => (
  <section
    className={`${
      lightTheme ? styles["container--light"] : styles.container
    } padding-x`}
  >
    <h2 className={styles.title}>
      Looks like <span>magic</span>, works like <span>science</span>.
    </h2>
    {showDescription && (
      <p className={styles.description}>
        I can help visualize even the craziest ideas converting them into
        elegant designs, awesome experiences and catchy brands.
      </p>
    )}
    <div className={styles.projects}>
      {projectsList.slice(0, limit).map((project, index) => (
        <div
          className={
            showAllProjects
              ? styles.project
              : `${styles.project} ${styles.projectVisibility}`
          }
          key={index}
        >
          <Project
            isMobile={isMobile}
            name={project.name}
            pictures={project.pictures}
            description={project.description}
            slug={project.slug}
            lightTheme={lightTheme}
          />
        </div>
      ))}
    </div>
    {showNavigationButton && (
      <div className={styles.options}>
        <Link
          href="/projects"
          onClick={() => trackEvent("View all projects clicked")}
        >
          <button className={`button  ${styles.allProjects}`}>
            View all projects
          </button>
        </Link>
      </div>
    )}
  </section>
);

export default Projects;
