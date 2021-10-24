import Link from "next/link";
import classNames from "classnames";

import Project from "@/components/Project/Project";
import styles from "./MoreProjects.module.css";

function MoreProjects({ projects, isMobile }) {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        "padding-x": true,
      })}
    >
      <h3 className={styles.title}>Discover more project</h3>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <Project
              isMobile={isMobile}
              pictures={project.pictures}
              name={project.name}
              description={project.description}
              url={project.url}
            />
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <Link
          href="/projects"
          onClick={() => trackEvent("View all projects clicked")}
        >
          <button className={`black ${styles.allProjects}`}>
            View all projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MoreProjects;
