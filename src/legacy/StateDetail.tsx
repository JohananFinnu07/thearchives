import { useParams, useNavigate } from "react-router-dom";
import { getStateInfo } from "@/data/stateInfo";
import { ArrowLeft, MapPin, Users, Languages, Ruler } from "lucide-react";

const StateDetail = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const navigate = useNavigate();
  const state = stateId ? getStateInfo(stateId) : undefined;

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-display font-bold">State not found</h1>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft size={18} /> Back to Map
        </button>
      </div>
    );
  }

  const infoCards = [
    { icon: MapPin, label: "Capital", value: state.capital },
    { icon: Ruler, label: "Area", value: state.area },
    { icon: Users, label: "Population", value: state.population },
    { icon: Languages, label: "Language", value: state.language },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary/10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8 md:py-14">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} /> Back to Map
          </button>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            {state.name}
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl text-lg leading-relaxed">
            {state.description}
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <Icon size={22} className="text-primary mb-3" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {label}
              </p>
              <p className="text-lg font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateDetail;
