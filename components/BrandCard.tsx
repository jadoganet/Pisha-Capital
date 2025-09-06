
import React from 'react';
import type { Brand } from '../types';

interface BrandCardProps {
  brand: Brand;
}

const Stat: React.FC<{ label: string; value: string | number; currency?: string }> = ({ label, value, currency }) => (
    <div className="text-center">
        <p className="text-sm text-brand-light">{label}</p>
        <p className="text-lg font-bold text-white">{value}{currency}</p>
    </div>
);


const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <div className="bg-brand-accent rounded-lg shadow-lg h-full flex flex-col p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center mb-4">
        <div className="bg-brand-primary p-2 rounded-full mr-4">
            {brand.icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white">{brand.name}</h3>
            <a href={`https://${brand.url}`} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-light hover:text-white transition-colors">{brand.url}</a>
        </div>
      </div>
      <p className="text-brand-text mb-4 flex-grow">{brand.model}</p>
      <div className="space-y-3 text-sm mb-4">
          <p><strong className="text-brand-light">Mercado:</strong> {brand.market}</p>
          <p><strong className="text-brand-light">Ventaja:</strong> {brand.advantage}</p>
      </div>
       <div className="mt-auto border-t border-brand-light/20 pt-4 grid grid-cols-2 gap-4">
          <Stat label="Proyección (3 años)" value={brand.projection} />
          <Stat label="Ingresos (3 años)" value={`+${brand.revenue}`} currency="M €/año" />
        </div>
    </div>
  );
};

export default BrandCard;
