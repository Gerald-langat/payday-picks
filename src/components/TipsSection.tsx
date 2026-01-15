import { Flame, Crown } from "lucide-react";
import TipCard from "./TipCard";

const freeTips = [
  {
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    league: "Premier League",
    prediction: "Over 2.5 Goals",
    odds: "1.85",
    confidence: 78,
    time: "Today, 17:30",
    status: "pending" as const,
  },
  {
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    league: "La Liga",
    prediction: "BTTS - Yes",
    odds: "1.72",
    confidence: 82,
    time: "Today, 21:00",
    status: "pending" as const,
  },
  {
    homeTeam: "PSG",
    awayTeam: "Lyon",
    league: "Ligue 1",
    prediction: "PSG Win",
    odds: "1.45",
    confidence: 88,
    time: "Tomorrow, 19:00",
    status: "pending" as const,
  },
];

const vipTips = [
  {
    homeTeam: "Man United",
    awayTeam: "Liverpool",
    league: "Premier League",
    prediction: "★★★ VIP Pick ★★★",
    odds: "2.10",
    confidence: 92,
    time: "Today, 16:00",
    isVip: true,
  },
  {
    homeTeam: "Juventus",
    awayTeam: "Inter Milan",
    league: "Serie A",
    prediction: "★★★ VIP Pick ★★★",
    odds: "3.25",
    confidence: 85,
    time: "Today, 20:45",
    isVip: true,
  },
];

const TipsSection = () => {
  return (
    <section id="tips" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(142_76%_45%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Free Tips */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Flame className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Today's Free Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeTips.map((tip, index) => (
              <TipCard key={index} {...tip} />
            ))}
          </div>
        </div>

        {/* VIP Tips Preview */}
        <div id="vip">
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              VIP Exclusive Picks
            </h2>
            <span className="px-3 py-1 gradient-gold rounded-full text-xs font-bold text-primary-foreground">
              LOCKED
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {vipTips.map((tip, index) => (
              <TipCard key={index} {...tip} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
