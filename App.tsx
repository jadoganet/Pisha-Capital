
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import MarketAnalysisSection from './components/MarketAnalysisSection';
import FinancialsSection from './components/FinancialsSection';
import GrowthStrategySection from './components/GrowthStrategySection';
import InvestmentSection from './components/InvestmentSection';
import TeamAndRisksSection from './components/TeamAndRisksSection';
import Footer from './components/Footer';

import { BUSINESS_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-brand-primary text-brand-text font-sans antialiased">
      <Header />
      <main className="pt-16">
        <HeroSection 
          holdingName={BUSINESS_DATA.holdingName}
          founder={BUSINESS_DATA.founder}
          vision={BUSINESS_DATA.vision}
          threeYearGoal={BUSINESS_DATA.threeYearGoal}
        />
        <PortfolioSection portfolio={BUSINESS_DATA.portfolio} />
        <MarketAnalysisSection marketAnalysis={BUSINESS_DATA.marketAnalysis} businessModels={BUSINESS_DATA.businessModels} />
        <GrowthStrategySection growthStrategy={BUSINESS_DATA.growthStrategy} />
        <FinancialsSection financials={BUSINESS_DATA.financials} portfolio={BUSINESS_DATA.portfolio} />
        <InvestmentSection investmentProposal={BUSINESS_DATA.investmentProposal} />
        <TeamAndRisksSection team={BUSINESS_DATA.team} risks={BUSINESS_DATA.risks} />
        <Footer conclusion={BUSINESS_DATA.conclusion} holdingName={BUSINESS_DATA.holdingName} />
      </main>
    </div>
  );
};

export default App;
