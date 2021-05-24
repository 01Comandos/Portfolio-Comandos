import Project from "../Project/Project";
import styles from "./Projects.module.css";

const projectsList = [
  {
    name: "Stadio",
    pictures: {
      mobile: "/images/stadio-mobile.png",
      desktop: "/images/stadio.png",
    },
    description:
      "A great collaborative solution for runners. Lima? Sao Paulo? Let's run together!",
  },
  {
    name: "mipOS Interger",
    pictures: {
      mobile: "/images/mipos-1-mobile.png",
      desktop: "/images/mipos-1.png",
    },
    description:
      "1 or 40 Dark Kitchen, 1 or 100 restaurants. Everything in a tablet to manage thousands of orders by Delivery.",
  },
  {
    name: "mipOS POS",
    pictures: {
      mobile: "/images/mipos-2-mobile.png",
      desktop: "/images/mipos-2.png",
    },
    description:
      "Underpinned by old operating systems, a great POS for the new generation of consumers.",
  },
  {
    name: "RebajaTusCuentas",
    pictures: {
      mobile: null,
      desktop: "/images/rtc.png",
    },
    description:
      "Making it less painful to ask for mortgages is the mission of RebajaTusCuentas. All without goin to the bank.",
  },
  {
    name: "Spotfinder",
    pictures: {
      mobile: null,
      desktop: "/images/spotlitefinal.png",
    },
    description:
      "Finding and reserving parking is not an easy thing. More with AI. Spotfinder the genuinely awesome.",
  },
  {
    name: "Caribe Federal Credit Union",
    pictures: {
      mobile: null,
      desktop: "/images/caribe-federal-device.png",
    },
    description:
      "A traditional government bank wants to make the experience of visiting and finding information incredible.",
  },
];

const Projects = () => (
  <section className={styles.container}>
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
            name={project.name}
            pictures={project.pictures}
            description={project.description}
          />
        </div>
      ))}
    </div>
    <div className={styles.options}>
      <button className={`black ${styles.allProjects}`}>
        View all projects
      </button>
    </div>
  </section>
);

export default Projects;
