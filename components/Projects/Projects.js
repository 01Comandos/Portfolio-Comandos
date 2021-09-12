import Link from "next/link";
import Project from "../Project/Project";
import projectsList from "../../content/projects.json"
import styles from "./Projects.module.css";
import { trackEvent } from "../../analytics/events";

const Projects = ({ isMobile }) => (
  <section className={`${styles.container} padding-x`}>
    <h2 className={styles.title}>
      Looks like <span>magic</span>, works like <span>science</span>.
    </h2>
    <p className={styles.description}>
      I can help visualize even the craziest ideas converting them into elegant
      designs, awesome experiences and catchy brands.
    </p>
    <div className={styles.projects}>
      {projectsList.map((project, index) => (
        <div className={styles.project} key={index}>
          <Project
            isMobile={isMobile}
            name={project.name}
            pictures={project.pictures}
            description={project.description}
            url={project.url}
          />
        </div>
      ))}
    </div>
    <div className={styles.options}>
      <Link
        href="/"
        onClick={() => trackEvent('View all projects clicked')}
      >
        <button className={`black ${styles.allProjects}`}>
          View all projects
        </button>
      </Link>
    </div>
  </section>
);

export default Projects;
