
import React from 'react';
import type { InvestmentProposal } from '../types';
import { ICONS } from '../constants';

interface InvestmentSectionProps {
  investmentProposal: InvestmentProposal;
}

const InvestmentSection: React.FC<InvestmentSectionProps> = ({ investmentProposal }) => {
  return (
    <section id="investment" className="py-20 bg-brand-secondary">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
            {ICONS.Investment} Propuesta de Inversión
          </h2>
          <p className="text-brand-light mt-4 max-w-2xl mx-auto">
            Una oportunidad única para ser parte de un ecosistema de marcas con potencial de valoración de 100M€.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-accent p-6 rounded-lg animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h3 className="text-xl font-semibold text-white">Valoración (pre-money)</h3>
                <p className="text-4xl font-bold my-2 text-white">{investmentProposal.preMoneyValuation}M €</p>
            </div>
            <div className="bg-brand-accent p-6 rounded-lg animate-fade-in-up" style={{animationDelay: '200ms'}}>
                 <h3 className="text-xl font-semibold text-white">Potencial a 3 años</h3>
                <p className="text-4xl font-bold my-2 text-white">{investmentProposal.potentialValuation}M €</p>
            </div>
            <div className="bg-brand-accent p-6 rounded-lg animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <h3 className="text-xl font-semibold text-white">Retorno Esperado (ROI)</h3>
                <p className="text-4xl font-bold my-2 text-white">{investmentProposal.expectedROI}</p>
            </div>
        </div>
        <div className="mt-8 bg-brand-primary p-8 rounded-lg max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <p className="text-lg text-brand-text">{investmentProposal.investmentOptions}</p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
