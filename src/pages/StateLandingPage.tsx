import StateHeader from "@/components/StateHeader";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import HiddenGems from "@/components/HiddenGems";
import ODOPDiscovery from "@/components/ODOPDiscovery";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SubmitGemForm from "@/components/SubmitGemForm";

import { useParams } from "react-router-dom";
import { stateConfig } from "@/data/stateConfig";
import { stateData } from "@/data/stateInfo";
import { getDestinationsByState } from "@/data/destinations";

import NotFound from "./NotFound";
import StateComingSoon from "./StateComingSoon";

const StateHomePage = () => {
  const { state } = useParams<{ state: string }>();

  if (!state) return <NotFound />;

  // Check if state exists in India dataset
  const stateInfo = stateData[state];

  if (!stateInfo) {
    return <NotFound />;
  }

  // Check if state is launched
  const launchedState = stateConfig[state];

  if (!launchedState) {
    return <StateComingSoon state={stateInfo} />;
  }

  const stateDestinations = getDestinationsByState(state);

  return (
    <div className="min-h-screen bg-background">
      <StateHeader />

      <main>
        <Hero state={launchedState} />
        <Destinations destinations={stateDestinations} />
        <HiddenGems state={state} />
        <ODOPDiscovery state={state} />
        <About />
      </main>

      <Footer />
      <SubmitGemForm />
    </div>
  );
};

export default StateHomePage;
