import styles from './Profile.module.css';
import SectionIndicator from '../SectionIndicator/SectionIndicator';

const Profile = () => {
  return (
    <section className={styles.profile} id="profile">
      <div className={styles.profileContent}>
        <div className={styles.profileLeft}>
          <SectionIndicator>01 - PERFIL</SectionIndicator>
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
