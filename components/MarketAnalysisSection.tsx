
import React from 'react';
import type { MarketPoint, BusinessModel } from '../types';
import { ICONS } from '../constants';

interface MarketAnalysisSectionProps {
  marketAnalysis: MarketPoint[];
  businessModels: BusinessModel[];
}

const MarketAnalysisSection: React.FC<MarketAnalysisSectionProps> = ({ marketAnalysis, businessModels }) => {
  return (
    <section id="market" className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
            {ICONS.Market} Análisis de Mercado y Modelo de Negocio
          </h2>
          <p className="text-brand-light mt-4 max-w-2xl mx-auto">
            Operamos en sectores de alto crecimiento con modelos de negocio diversificados y escalables.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h3 className="text-2xl font-semibold mb-6 text-white">Tendencias Clave del Mercado</h3>
                <div className="space-y-4">
                    {marketAnalysis.map((point, index) => (
                        <div key={index} className="bg-brand-secondary p-4 rounded-lg">
                            <h4 className="font-bold text-white">{point.title}</h4>
                            <p className="text-brand-light">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-2xl font-semibold mb-6 text-white">Modelos de Ingreso</h3>
                <div className="space-y-4">
                    {businessModels.map((model, index) => (
                        <div key={index} className="bg-brand-secondary p-4 rounded-lg">
                            <h4 className="font-bold text-white">{model.type}</h4>
                            <p className="text-brand-light text-sm">{model.brands.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysisSection;
