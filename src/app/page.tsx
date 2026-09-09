import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Profile from "@/components/Profile/Profile";
import Stack from "@/components/Stack/Stack";
import Divider from "@/components/ui/Divider/Divider";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Profile />
        <Divider />
        <Stack />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
