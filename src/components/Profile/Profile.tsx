import styles from './Profile.module.css';

const Profile = () => {
  return (
  <section className={styles.profile}>
    <div className={styles.profileContent}>
      <div className={styles.profileLeft}>
        <span className={styles.sectionIndicator}>01 - PERFIL</span>
      </div>
      <div className={styles.profileRight}>
        <h2 className={styles.profileTitle}>Sobre mí</h2>
        <p className={styles.profileSubtitle}>
          Soy un desarrollador web full stack con cinco años de experiencia en
        </p>
        <p className={styles.profileText}>
          Soy un desarrollador web full stack con cinco años de experiencia en
          desarrollo correctivo y evolutivo, QA y soporte. He trabajado con .NET
          y C# en el backend, y React y JavaScript en el frontend. Mi enfoque se
          centra en escribir código limpio y mantenible, pensando siempre en la
          persona que lo mantendrá después.
        </p>
      </div>
    </div>
  </section>
);
};

export default Profile;
