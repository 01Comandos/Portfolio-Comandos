import styles from "../styles/Projects.module.css";
import Projects from "../components/Projects/Projects";
import projectsList from "../content/projects.json"
import { isMobile } from "../utils";

const ProjectsPage = ({ isMobile }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerDesktop}>
        <figure>
          <img src="/icons/icon-arrow.svg" alt="Stadio Project"/>
          <figcaption>Project</figcaption>
        </figure>
        <div>
          <h2 className={styles.title}>
            Looks like <span>magic</span>, works like <span>science</span>.
          </h2>
          <ul className={styles.projectsList}>
            {projectsList.map(project => (
              <li className={styles.projectDetails}>
                <span className={`${styles.projectName} ${styles.projectText}`}>{project.name}</span>
                <p className={`${styles.projectDescription} ${styles.projectText}`}>{project.shortDescription}</p>
                <img src="/icons/icon-arrow.svg" />
              </li>
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
