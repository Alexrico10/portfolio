"use client";

import Section from "../ui/Section/Section";
import SectionIndicator from "../ui/SectionIndicator/SectionIndicator";
import Button from "../ui/Button/Button";
import styles from "./Contact.module.css";
import { useTranslations } from "use-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <Section id="contact">
      <div className={styles.contactContainer}>
        <SectionIndicator>{t("indicator")}</SectionIndicator>
        <div className={styles.contactCentered}>
          <div className={styles.contactLeft}>
            <h2 className={styles.contactTitle}>
              {t("title")} <span>{t("titleHighlight")}</span>
            </h2>
            <p className={styles.contactSubtitle}>{t("subtitle")}</p>
          </div>

          <form className={styles.contactForm} action="https://formspree.io/f/xeaqvllk" method="POST">
          <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />

            <div className={styles.formField}>
              <label htmlFor="name">{t("nameLabel")}</label>
              <input id="name" name="name" type="text" placeholder={t("namePlaceholder")} required />
            </div>

            <div className={styles.formField}>
              <label htmlFor="email">{t("emailLabel")}</label>
              <input id="email" name="email" type="email" placeholder={t("emailPlaceholder")} required />
            </div>

            <div className={styles.formField}>
              <label htmlFor="message">{t("messageLabel")}</label>
              <textarea id="message" name="message" placeholder={t("messagePlaceholder")} required />
            </div>

            <Button type="submit">{t("submit")}</Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
