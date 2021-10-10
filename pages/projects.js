import styles from "../styles/Projects.module.css";
import Projects from "../components/Projects/Projects";
import { isMobile } from "../utils";

const ProjectsPage = ({ isMobile }) => {
  return (
    <div className={styles.container}>
      <Projects
        isMobile={isMobile}
        showDescription={false}
        showNavigationButton={false}
        showAllProjects={true}
      />
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
