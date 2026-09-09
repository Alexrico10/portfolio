"use client";

import Divider from "../ui/Divider/Divider";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import Section from "../ui/Section/Section";
import SectionIndicator from "../ui/SectionIndicator/SectionIndicator";
import { useTranslations } from "use-intl";

const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <Section id="experience">
      <div className="experienceContent">
        <SectionIndicator>{t("indicator")}</SectionIndicator>
      </div>
      <Divider />
      <ExperienceItem
        period={t("job1.period")}
        company={t("job1.company")}
        location={t("job1.location")}
        role={t("job1.role")}
        bullets={t.raw("job1.bullets")}
        tags={[
          "WordPress",
          "Elementor",
          "PHP",
          "JavaScript",
          "HTML5",
          "CSS3",
          "SEO",
          "Zoho Forms",
        ]}
      />
      <Divider />
      <ExperienceItem
        period={t("job2.period")}
        company={t("job2.company")}
        location={t("job2.location")}
        role={t("job2.role")}
        bullets={t.raw("job2.bullets")}
        tags={[
          "WordPress",
          "Elementor",
          "Divi Builder",
          "CSS3",
          "SEO",
        ]}
      />
      <Divider />
      <ExperienceItem
        period={t("job3.period")}
        company={t("job3.company")}
        location={t("job3.location")}
        role={t("job3.role")}
        bullets={t.raw("job3.bullets")}
        tags={[
          "C#",
          ".NET",
          "SQL Server",
          "React",
          "Redux",
          "JavaScript",
          "Jira",
          "Confluence",
        ]}
      />
      <Divider />
      <ExperienceItem
        period={t("job4.period")}
        company={t("job4.company")}
        location={t("job4.location")}
        role={t("job4.role")}
        bullets={t.raw("job4.bullets")}
        tags={[
          "Zephyr",
          "Jira",
          "SQL Server"
        ]}
      />
    </Section>
  );
};

export default Experience;
