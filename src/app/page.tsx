import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Profile from "@/components/Profile/Profile";
import Stack from "@/components/Stack/Stack";
import Divider from "@/components/Divider/Divider";
import Experience from "@/components/Experience/Experience";

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
      </main>
    </>
  );
}
