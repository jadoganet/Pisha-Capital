
export interface Brand {
  name: string;
  url: string;
  model: string;
  market: string;
  advantage: string;
  projection: string;
  revenue: number; // in millions
  icon: JSX.Element;
}

export interface MarketPoint {
  title: string;
  description: string;
}

export enum BusinessModelType {
    SUBSCRIPTION = 'Suscripción (B2B SaaS)',
    COMMISSION = 'Comisiones por reserva',
    ECOMMERCE = 'E-commerce',
    PREMIUM_SERVICES = 'Servicios premium',
}

export interface BusinessModel {
    type: BusinessModelType;
    brands: string[];
}

export interface FinancialProjections {
    totalRevenue: number; // in millions
    ebitda: number; // in millions
    initialInvestment: number; // in millions
}

export interface InvestmentProposal {
    preMoneyValuation: number; // in millions
    potentialValuation: number; // in millions
    investmentOptions: string;
    expectedROI: string;
}

export interface HoldingData {
  holdingName: string;
  founder: string;
  vision: string;
  threeYearGoal: string;
  portfolio: Brand[];
  marketAnalysis: MarketPoint[];
  businessModels: BusinessModel[];
  growthStrategy: string[];
  financials: FinancialProjections;
  investmentProposal: InvestmentProposal;
  team: {
    founder: string;
    partners: string;
    talentPlan: string;
  };
  risks: {
    title: string;
    mitigation: string;
  }[];
  conclusion: string;
}
