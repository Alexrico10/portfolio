import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Profile from "@/components/Profile/Profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
      </main>
    </>
  );
}
