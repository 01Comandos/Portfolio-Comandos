import Project from "../Project/Project";
import styles from "./Projects.module.css";

const projectsList = [
  {
    name: "Stadio",
    picture: "/images/stadio.png",
    description:
      "A great collaborative solution for runners. Lima? Sao Paulo? Let's run together!",
  },
  {
    name: "mipOS Interger",
    picture: "/images/mip-os-case-1.png",
    description:
      "1 or 40 Dark Kitchen, 1 or 100 restaurants. Everything in a tablet to manage thousands of orders by Delivery.",
  },
  {
    name: "mipOS POS",
    picture: "/images/mip-os-case-2.png",
    description:
      "Underpinned by old operating systems, a great POS for the new generation of consumers.",
  },
];

const Projects = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      Looks like <span>magic</span>, works like <span>science</span>.
    </h2>
    <p className={styles.description}>
      I can help visualize even the craziest ideas converting them into elegant
      designs, awesome experiences and catchy brands.
    </p>
    {projectsList.map((project, index) => (
      <div className={styles.project} key={index}>
        <Project
          name={project.name}
          picture={project.picture}
          description={project.description}
        />
      </div>
    ))}
    <div className={styles.options}>
      <button className={`black ${styles.allProjects}`}>View all projects</button>
    </div>
  </div>
);

export default Projects;
