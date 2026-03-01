import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StateInfo } from "@/data/stateInfo";

interface Props {
  state: StateInfo;
}

const StateComingSoon = ({ state }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-display font-bold mb-4">{state.name}</h1>

      <p className="text-muted-foreground max-w-md mb-6">
        The Archive for {state.name} is under development. We’re documenting its
        hidden gems, heritage crafts, and local food systems.
      </p>

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-primary hover:underline"
      >
        <ArrowLeft size={18} /> Back to India Map
      </button>
    </div>
  );
};

export default StateComingSoon;
