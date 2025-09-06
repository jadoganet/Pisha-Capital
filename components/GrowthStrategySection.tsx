
import React from 'react';
import { ICONS } from '../constants';

interface GrowthStrategySectionProps {
  growthStrategy: string[];
}

const GrowthStrategySection: React.FC<GrowthStrategySectionProps> = ({ growthStrategy }) => {
  return (
    <section id="strategy" className="py-20 bg-brand-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
            {ICONS.Strategy} Estrategia de Crecimiento (36 meses)
          </h2>
          <p className="text-brand-light mt-4 max-w-2xl mx-auto">
            Un plan de acción claro para la expansión y consolidación en mercados clave.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {growthStrategy.map((step, index) => (
            <div key={index} className="flex items-start mb-6 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex-shrink-0 w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-white">{index + 1}</span>
              </div>
              <p className="text-lg text-brand-text pt-1.5">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthStrategySection;
