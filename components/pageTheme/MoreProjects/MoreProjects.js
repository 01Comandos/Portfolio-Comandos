import Link from 'next/link';
import classNames from 'classnames';

import Project from '@/components/Project/Project';
import styles from './MoreProjects.module.css';

function MoreProjects({ projects, isMobile, containerStyles, limit }) {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        'padding-x': true,
        [containerStyles]: true,
      })}>
      <h3 className={styles.title}>Discover more project</h3>
      <div className={styles.projectsContainer}>
        {projects.slice(0, limit).map((project, index) => (
          <div key={index} className={styles.project}>
            <Project
              isMobile={isMobile}
              pictures={project.pictures}
              name={project.name}
              description={project.description}
              slug={project.slug}
            />
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <Link
          href="/projects"
          onClick={() => trackEvent('View all projects clicked')}>
          <button className={`black button ${styles.allProjects}`}>
            View all projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MoreProjects;
