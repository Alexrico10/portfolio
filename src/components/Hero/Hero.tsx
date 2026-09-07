import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <p className={styles.heroEyebrow}>
            DESARROLLADOR WEB FULL STACK · MADRID
          </p>
          <h1 className={styles.heroTitle}>
            Construyo y mantengo aplicaciones web que <span>no se rompen.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Cinco años entre desarrollo correctivo y evolutivo, QA y soporte:
            .NET y C# en el backend, React y JavaScript en el frontend. Vengo de
            arreglar código de otros, así que escribo el mío pensando en quien
            lo mantenga después.
          </p>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroFile}>
            <div className={styles.statGroup}>
              <span className={styles.heroFileLabel}>Experiencia</span>
              <strong className={styles.heroFileText}>5+ años</strong>
            </div>

            <div className={styles.statGroup}>
              <span className={styles.heroFileLabel}>Enfoque</span>
              <strong className={styles.heroFileText}>.NET · React</strong>
            </div>

            <div className={styles.statGroup}>
              <span className={styles.heroFileLabel}>Estado</span>
              <strong className={styles.heroFileStatus}>
                Abierto a proyectos
              </strong>
            </div>
          </div>
        </div>{" "}
      </div>
      <hr></hr>
    </section>
  );
};

export default Hero;
