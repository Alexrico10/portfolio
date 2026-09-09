"use client";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ img, title, description }: { img: string; title: string; description: string }) => {
  return (
    <div className={styles.projectCardContainer}>
      <Image
        src={img}
        alt={title}
        width={300}
        height={2000}
        className={styles.projectImage}
      />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
    </div>
  );
};

export default ProjectCard;