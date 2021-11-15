import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import projects from "../../content/projects.json";
import Countdown from "../../components/Countdown/Countdown";
import styles from "../../styles/Project.module.css";

const Project = () => {
  const router = useRouter();
  const { name } = router.query;
  const project = projects.find(project => project.url === name)

  return (
    <>
      <Head>
        <title>{project?.name}</title>
        <meta
          name="description"
          content={project?.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pageContainer">
        <section className={styles.soonContainer}>
          <h1 className={styles.soonTitle}>DON'T WORRY, THIS PROJECT IS <span>ALMOST DONE</span></h1>
          <Countdown date={new Date("2022-02-01")} />
          <Link href="/">
            <button className="black button mt-2">
              Return to home
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Project;
