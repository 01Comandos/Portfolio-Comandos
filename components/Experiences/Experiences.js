import styles from './Experiences.module.css';
import Skill from '../Skill/Skill';

const skills = [
  {
    skill: 'Desing',
    icon: '/images/user-research-light.svg',
    items: [
      'User experience',
      'User interface',
      'Digital Product',
      'User research',
      'Design Sprint',
      'Design system',
    ],
  },
  {
    skill: 'Prototypes',
    icon: '/images/mvp-light.svg',
    items: ['Proof of Concept', 'Product Discovery'],
  },

  {
    skill: 'Strategy',
    icon: '/images/design-system-light.svg',
    items: ['Product strategy', 'UX audit', 'Product feature'],
  },
];

const Experiences = () => {
  return (
    <section className={`${styles.container} padding-x`}>
      <h2 className={styles.title}>
        We <span>build</span> intuitive <br />
        <span>experiences</span>
      </h2>
      <div className={styles.skills}>
        {skills.map(({ skill, icon, items }, index) => (
          <div className={styles.skill} key={index}>
            <Skill skill={skill} icon={icon} items={items} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
