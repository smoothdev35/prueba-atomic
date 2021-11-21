import Hero from "./homepage-components/Hero";
import Highlights from "./homepage-components/Highlights";
import Onboarding from "./homepage-components/Onboarding";
import Perks from "./homepage-components/Perks";

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
