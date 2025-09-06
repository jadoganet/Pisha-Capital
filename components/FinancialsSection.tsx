import React from 'react';
import type { FinancialProjections, Brand } from '../types';
import { ICONS } from '../constants';

const COLORS = ['#415A77', '#778DA9', '#1B263B', '#E0E1DD', '#0D1B2A'];

interface FinancialsSectionProps {
  financials: FinancialProjections;
  portfolio: Brand[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-brand-primary p-2 border border-brand-light rounded-lg">
        <p className="label text-white">{`${label} : ${payload[0].value}M €`}</p>
      </div>
    );
  }
  return null;
};

const FinancialsSection: React.FC<FinancialsSectionProps> = ({ financials, portfolio }) => {
  // Access Recharts from the window object inside the component
  const Recharts = (window as any).Recharts;

  // Render a loading state if Recharts is not yet available
  if (!Recharts) {
    return (
      <section id="financials" className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
              {ICONS.Financials} Proyecciones Financieras
            </h2>
            <p className="text-brand-light mt-4 max-w-2xl mx-auto">
              Proyecciones agregadas a 36 meses, mostrando un sólido potencial de rentabilidad.
            </p>
          </div>
          <div className="bg-brand-secondary p-8 rounded-lg shadow-xl h-96 flex items-center justify-center">
            <p className="text-brand-light text-xl">Cargando gráficos...</p>
          </div>
        </div>
      </section>
    );
  }

  // Destructure all components once Recharts is confirmed to exist
  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } = Recharts;
  
  const chartData = portfolio.map(brand => ({ name: brand.name.replace('.com','').replace('.es', ''), revenue: brand.revenue }));

  const pieData = [
      { name: 'EBITDA', value: financials.ebitda },
      { name: 'Otros Costos/Inversión', value: financials.totalRevenue - financials.ebitda },
  ];

  return (
    <section id="financials" className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
            {ICONS.Financials} Proyecciones Financieras
          </h2>
          <p className="text-brand-light mt-4 max-w-2xl mx-auto">
            Proyecciones agregadas a 36 meses, mostrando un sólido potencial de rentabilidad.
          </p>
        </div>

        <div className="bg-brand-secondary p-8 rounded-lg shadow-xl animate-fade-in-up">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Ingresos Proyectados por Marca (36 meses)</h3>
            <div className="w-full h-80">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#415A77" />
                        <XAxis dataKey="name" stroke="#E0E1DD" angle={-20} textAnchor="end" height={60} interval={0} />
                        <YAxis stroke="#E0E1DD" label={{ value: 'M €', angle: -90, position: 'insideLeft', fill: '#E0E1DD' }} />
                        <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(119, 141, 169, 0.2)'}}/>
                        <Bar dataKey="revenue" fill="#778DA9" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
             <div className="bg-brand-secondary p-6 rounded-lg animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h4 className="text-brand-light text-lg">Ingresos Totales</h4>
                <p className="text-4xl font-bold text-white">{financials.totalRevenue}M €/año</p>
             </div>
             <div className="bg-brand-secondary p-6 rounded-lg animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <h4 className="text-brand-light text-lg">EBITDA Esperado</h4>
                <p className="text-4xl font-bold text-white">{financials.ebitda}M €/año</p>
             </div>
             <div className="bg-brand-secondary p-6 rounded-lg animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <h4 className="text-brand-light text-lg">Inversión Necesaria</h4>
                <p className="text-4xl font-bold text-white">{financials.initialInvestment}M €</p>
                <span className="text-brand-light">(12-18 meses)</span>
             </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialsSection;