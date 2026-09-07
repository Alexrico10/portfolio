import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Alejandro Rico
        </Link>
        <ul className={styles.ul}>
          <li className={styles.li}><Link href="#perfil" className={styles.a}>perfil</Link></li>
          <li className={styles.li}><Link href="#stack" className={styles.a}>stack</Link></li>
          <li className={styles.li}><Link href="#experiencia" className={styles.a}>experiencia</Link></li>
          <li className={styles.li}><Link href="#proyectos" className={styles.a}>proyectos</Link></li>
          <li className={styles.li}><Link href="#contacto" className={styles.a}>contacto</Link></li>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
};

export default Navbar;
