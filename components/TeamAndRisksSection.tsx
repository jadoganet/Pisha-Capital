
import React from 'react';

interface TeamAndRisksSectionProps {
  team: {
    founder: string;
    partners: string;
    talentPlan: string;
  };
  risks: {
    title: string;
    mitigation: string;
  }[];
}

const TeamAndRisksSection: React.FC<TeamAndRisksSectionProps> = ({ team, risks }) => {
  return (
    <section id="team-risks" className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-8 text-white">Equipo y Talento</h2>
          <div className="space-y-6">
            <div className="bg-brand-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Fundador</h3>
              <p className="text-brand-light">{team.founder}</p>
            </div>
            <div className="bg-brand-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Red de Colaboradores</h3>
              <p className="text-brand-light">{team.partners}</p>
            </div>
            <div className="bg-brand-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Plan de Atracción de Talento</h3>
              <p className="text-brand-light">{team.talentPlan}</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl font-bold mb-8 text-white">Riesgos y Mitigación</h2>
          <div className="space-y-6">
            {risks.map((risk, index) => (
              <div key={index} className="bg-brand-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">{risk.title}</h3>
                <p className="text-brand-light mt-2"><strong className="text-white">Mitigación:</strong> {risk.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAndRisksSection;
