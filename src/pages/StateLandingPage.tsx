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

  // Check if state exists in full India list
  const stateInfo = state ? stateData[state] : undefined;

  // Check if state is launched (exists in stateConfig)
  const launchedState = state ? stateConfig[state] : undefined;

  if (!stateInfo) {
    return <NotFound />;
  }

  if (!launchedState) {
    return <StateComingSoon state={stateInfo} />;
  }
  if (!state) {
    return <NotFound />;
  }
  const stateDestinations = getDestinationsByState(state!);

  return (
    <div className="min-h-screen bg-background">
      <StateHeader />

      <main>
        <Hero state={launchedState} />
        <Destinations destinations={stateDestinations} />
        <HiddenGems />
        <ODOPDiscovery state={state} />
        <About />
      </main>

      <Footer />
      <SubmitGemForm />
    </div>
  );
};

export default StateHomePage;
