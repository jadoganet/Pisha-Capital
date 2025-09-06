
import React from 'react';
import type { Brand } from '../types';
import BrandCard from './BrandCard';
import { ICONS } from '../constants';

interface PortfolioSectionProps {
  portfolio: Brand[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolio }) => {
  return (
    <section id="portfolio" className="py-20 bg-brand-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
            {ICONS.Portfolio} Portafolio de Marcas
          </h2>
          <p className="text-brand-light mt-4 max-w-2xl mx-auto">
            Un ecosistema diversificado de marcas innovadoras con alto potencial de crecimiento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((brand, index) => (
            <div key={brand.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
