import Skill from "../Skill/Skill";
import styles from "./Expertise.module.css";

const skills = [
  { skill: "UX audit", icon: "/images/ux-audit.svg", description: "Understand the most critical areas of improvements for your product. Extract powerful insights and assumptions to test." },
  { skill: "User research", icon: "/images/user-research.svg", description: "Get qualitative insights from real users. Understand behaviors and attitudes early on and validate your hypotheses." },
  { skill: "IoT Experience", icon: "/images/io-t.svg", description: "Make technology disappear and unleash the full potential of your product. Creating complete experience flows from unboxing to daily usage." },
  { skill: "Design Sytems", icon: "/images/design-system.svg", description: "Create unified and iconic components based files and scale your designs." },
  { skill: "Product strategy", icon: "/images/product-strategy.svg", description: "Get analysis of your competitive landscape, market opportunities and tackle your next product challenge with a bird’s-eye view." },
  { skill: "Product feature & MVP", icon: "/images/mvp.svg", description: "Focus on what matters most to your users. Designing the core features and a complete testing plan to validate it." },
];

const Expertise = () => {
  return (
    <section className={`${styles.container} padding-x`}>
      <h2 className={styles.title}>
        <span>Expert</span>ise
      </h2>
      <div className={styles.skills}>
        {skills.map(({ skill, icon, description }, index) => (
          <div className={styles.skill} key={index}>
            <Skill skill={skill} icon={icon} description={description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
