import Hero from "./homepage/Hero";
import Highlights from "./homepage/Highlights";
import Onboarding from "./homepage/Onboarding";
import Perks from "./homepage/Perks";

function Homepage() {
  return (
    <>
      <Hero />
      <main>
        <Highlights />
        <Onboarding />
        <Perks />
      </main>
    </>
  );
}

export default Homepage;
