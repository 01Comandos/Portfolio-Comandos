import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header/Header";
import CustomerCard from "../../components/CustomerCard/CustomerCard";
import TestimonialsCarousel from "../../components/TestimonialsCarousel/TestimonialsCarousel";
import Definition from "../../components/Definition/Definition";
import Contact from "../../components/Contact/Contact";
import Project from "../../components/Project/Project";
import Gallery from "../../components/Gallery/Gallery";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Footer from "../../components/Footer/Footer";
import content from "../../content/projects/rebaja-tus-cuentas.json";
import projects from "../../content/projects.json";
import TestimonialsList from "../../content/testimonials.json";
import { isMobile } from "../../utils";
import styles from "../../styles/RebajaTusCuentas.module.css";

const RebajaTusCuentasPage = ({ isMobile }) => {
  const selectedProjects = projects.filter(project => project.id === 'RebajaTusCuentas' || project.id === 'Spotfinder' || project.id === 'Caribe');
  const rtcContent = projects.find(project => project.id === 'RebajaTusCuentas');

  return (
    <>
      <Head>
        <title>{content?.name}</title>
        <meta
          name="description"
          content={content?.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.backgroundRTC}>
        <Header
          withContact={true}
          backgroundStyle={styles.backgroundRTC}
          darkMenu={true}
          buttonStyle="info"
        />
        <main className={styles.main}>
          <section className={styles.hero}>
            <figure><img src="/images/projects/rtc-mobile.png" className={`${styles.videoImage} ${styles.rtcVideo}`} /></figure>
            <div className={styles.info}>
              <img src="/images/projects/rtc-logo-color.svg" className={styles.rtcLogo} />
              <span className={styles.rtcSummary}>Web and responsive design</span>
              <h1 className={styles.title}>A financial platform  for mortgage loans</h1>
            </div>
            <div className={styles.verticalLine}></div>
          </section>
          <section className={styles.description}>
            <span className={styles.bicolorTitle}>
              Why <span className="info">RTC?</span>
            </span>
            <div>
              <p>
                RebajaTusCuentas was born as Peruvian startup with the commitment to democratize access to mortgage loans in an underbanked country. It is a mortgages broker whit the support of 500 startup with presence in 3 countries and + 10M in loans granted.
              </p>
              <p>
                It has been incredible to see the growth of RTC.
              </p>
            </div>
          </section>
          <div className={styles.horizontalLine}></div>
          <section className={styles.projectInfo}>
            <article>
              <strong>Rol</strong>
              <span>Product Designer</span>
            </article>
            <article>
              <strong>Duration</strong>
              <span>6 months</span>
            </article>
            <article>
              <strong>Tools</strong>
              <span>Pencil, <br />Adobe Photoshop, <br />Adobe illustrator, <br />Sketch.</span>
            </article>
            <article>
              <strong>Projects</strong>
              <span>Product Discovery, <br />UX Architecture, <br />Design System, <br />Prototype</span>
            </article>
            <article>
              <strong>Deliverables</strong>
              <span>Design App Mobile, <br />Design app, <br />Desktop</span>
            </article>
            <article>
              <strong>Applied methodologies:</strong>
              <span>User and product discovery, user interviews, high-fi prototyping, QA.</span>
            </article>
          </section>
          <div className={styles.challengeAndTestimonials}>
            <section className={styles.challengeSection}>
              <h3 className={styles.sectionTitle}>The challenge</h3>
              <p className={styles.normalParagraph}>An incredible exprience for people who are often unbanked and want a mortgage loan. Taking into account that the services of a fintech are new to them and may not generate much confidence.</p>
              <div className={`${styles.sectionSubtitle} pb-1`}>Points to take into account:</div>
              <ul className={styles.takeInAccount}>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>Conveying strength and confidence</span>
                </li>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>Pre-approved mortgages by banks and RebajaTusCuentas</span>
                </li>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>Constantly communicate the status of your process</span>
                </li>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>Request a lot of information without being overwhelming</span>
                </li>
              </ul>
            </section>
            <section className={styles.testimonialSection}>
              <img src="/icons/left-quote.svg" />
              <p>Redesigning a fintech platform for Latin America was a great challenge. The users who use this tool to search and compare mortgage loans do not have a high academic background, delivering pre-approved proposals and interacting with them was a challenge. It had to be very easy to use, so that they would become familiar with it as they went through the process.</p>
              <CustomerCard
                photo="/images/projects/rtc-cto.png"
                name="Martín Mendoza del Solar"
                role="CTO"
                company="RebajaTusCuentas.com"
              />
            </section>
          </div>
          <div className={styles.backgroundGradient}>
            <section className={styles.beforeStartingSection}>
              <div>
                <h3 className={`${styles.sectionTitle} pb-2 px-1`}>Before starting</h3>
                <Gallery photos={rtcContent.beforeStartingSection} containerStyles={styles.beforeMobileGallery} />
                <p className={`${styles.normalParagraph} px-1 pb-4`}>We started by understanding the entire product up to that point, both users and services and products of RebajaTusCuentas.</p>
                <div className={styles.beforeDesktopGallery}>
                  <img src='/images/projects/before-01.png' className={styles.one}/>
                  <img src='/images/projects/before-03.png' className={styles.two}/>
                  <img src='/images/projects/before-04.png' className={styles.three}/>
                  <img src='/images/projects/before-02.png' className={styles.four}/>
                  <img src='/images/projects/before-05.png' className={styles.five}/>
                  <button className={styles.showAllPicturesButton}>
                    <img src="/icons/icon-camera.svg" />
                    Show all pictures
                  </button>
                </div>
              </div>
              <div>
              <figure>
                <img src="/images/projects/rtc-analytics.webp" alt="Product metrics" className={styles.videoImage} />
              </figure>

              <h3 className={`${styles.sectionTitle} px-1 pt-3`}>Let’s start by analyzing metrics and conversations</h3>
              <p className={`${styles.normalParagraph} px-1`}>RebajaTusCuentas had started a previous research about two weeks before I joined the team. We analyzed all the information gathred to create the first prototypes and start iterating and talking with users with a tangible base.</p>
              </div>
            </section>
            <section className={styles.funelSection}>
              <div className={`${styles.bicolorTitle} text-centered pb-2`}>
                Funel <span className="info">of RTC</span>
              </div>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <img src="/images/projects/trc-funel-01.png" alt="Website" />
                  <div>Website</div>
                </div>
                <div className={styles.feature}>
                  <img src="/images/projects/trc-funel-02.png" alt="Registration" />
                  <div>Registration</div>
                </div>
                <div className={styles.feature}>
                  <img src="/images/projects/trc-funel-03.png" alt="Mortgage type" />
                  <div>Mortgage type</div>
                </div>
                <div className={styles.feature}>
                  <img src="/images/projects/trc-funel-04.png" alt="Pre-approved loans" />
                  <div>Pre-approved loans</div>
                </div>
                <div className={styles.feature}>
                  <img src="/images/projects/trc-funel-05.png" alt="Document submission" />
                  <div>Document submission</div>
                </div>
                <div className={styles.feature}>
                  <img src="/images/projects/trc-funel-06.png" alt="Final evaluation" />
                  <div>Final evaluation</div>
                </div>
                <div className={styles.feature}>
                  <img src="/images/projects/trc-funel-07.png" alt="Delivery of credit" />
                  <div>Delivery of credit</div>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.backgroundGradient}>
            <section className={styles.marketSection}>
              <h3 className={`${styles.sectionTitle} px-1 pb-2`}>We improve market perception by providing confidence</h3>
              <ul className={`${styles.marketPoints} px-1 pt-1`}>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>The roadmap was created by a team. Taking into account time to experiment with prototypes.</span>
                </li>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>We had up to 3 experiments to achieve the best registration process.</span>
                </li>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>Our type of user was more prone to a phone call than to a videoconference. A very interesting type of user for a fintech.</span>
                </li>
              </ul>
              <figure className="text-centered">
                <img src="/images/projects/rtc-mobile-capture.webp" className={`${styles.videoImage} ${styles.marketSectionImage}`} />
              </figure>
            </section>
            <section className={styles.resultsSection}>
              <h3 className={`${styles.sectionTitle} pb-2`}>The result was excellent</h3>
              <Gallery photos={rtcContent.resultsSection} />
              <ul className={`${styles.marketPoints} px-1 pt-2`}>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>We unify all RebajaTusCuentas.com services under a single identity.</span>
                </li>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>Expansion to Peru, Colombia and Mexico.</span>
                </li>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>In Peru we went from being a mortgage broker to delivering mortgages directly.</span>
                </li>
                <li>
                  <img src="/icons/check-input.svg" />
                  <span>BBVA Peru acquires part of RTC’s operation.</span>
                </li>
              </ul>
            </section>
          </div>
          <section className={styles.moreProjectsSection}>
            <h3 className={`${styles.sectionTitle} text-white pt-2 pb-3`}>Discover more project</h3>
            <div className={styles.projectsSection}>
              {selectedProjects.map((project, index) => (
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
            <Link href="/">
              <button className="black">
                View all projects
              </button>
            </Link>
          </section>
          <TestimonialsCarousel testimonials={TestimonialsList} isMobile={isMobile} />
          <section className={styles.primaryBackground}>
            <Definition />
            <Contact />
            <Footer />
          </section>
          {/* <MobileMenu /> */}
        </main>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      isMobile: isMobile(req),
    },
  };
};

export default RebajaTusCuentasPage;
