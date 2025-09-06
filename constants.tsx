import React from 'react';
import { HoldingData, BusinessModelType } from './types';

// SVG Icons for Brands and Sections
const AlwaysFullIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const Bnb65Icon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12a5.995 5.995 0 00-3-5.197M15 21a2 2 0 002-2v-1a2 2 0 00-2-2h-3.172a1 1 0 00-.707.293l-2.414 2.414A1 1 0 016 15.314V13a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2h9a2 2 0 002-2v-1" /></svg>;
const CannaViajesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l3.536 3.536M12.879 19.5l-3.536-3.536" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l.343-.343a2 2 0 012.828 0l2.829 2.829a2 2 0 002.828 0L20 17" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9.343V5.5a2.5 2.5 0 00-5 0V9.343" /></svg>;
const SalsaVRIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M13 20l-3-3-3 3M13 4l-3 3-3-3" /></svg>;
const Reto360Icon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.252 15.252c-2.348-2.348-2.348-6.142 0-8.49s6.142-2.348 8.49 0c.293.293.565.602.815.922m9.443 3.568c-2.348 2.348-6.142 2.348-8.49 0-.293-.293-.565-.602-.815-.922m-8.628-.001c2.348 2.348 6.142 2.348 8.49 0 .293-.293.565-.602.815-.922M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>;
const CadizAvanzaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 19a7 7 0 100-14 7 7 0 000 14zm-4-4a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" /></svg>;
const ChorizoPortuanoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const GibraltarGateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 14.5l-3-3m0 0l-3 3m3-3v9.5a2.5 2.5 0 01-5 0V12a2.5 2.5 0 015 0v.5m0 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>;
const TuRinconGourmetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12l-1.41-1.41C16.76 8.76 14.59 8 12 8s-4.76.76-6.59 2.59L4 12v5a2 2 0 002 2h12a2 2 0 002-2v-5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4m0 0L8 8m4-4l4 4" /></svg>;


export const ICONS = {
    Portfolio: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    Market: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    Strategy: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 10V7" /></svg>,
    Financials: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
    Investment: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
};


export const BUSINESS_DATA: HoldingData = {
  holdingName: "Pisha Capital S.L.",
  founder: "Javier Domínguez",
  vision: "Crear un ecosistema de marcas innovadoras en turismo, hostelería, entretenimiento y tecnología con potencial de escalado internacional.",
  threeYearGoal: "Alcanzar valoraciones conjuntas superiores a 100M € con potencial de exit (adquisición) por grandes players.",
  portfolio: [
    { name: "Siemprelleno.com", url: "Siemprelleno.com", model: "App que garantiza clientes en la apertura y primeras horas de los negocios mediante promociones dinámicas.", market: "Restauración, retail, gimnasios y ocio.", advantage: "Genera consumo inmediato → “llenar desde el minuto 1”.", projection: "50.000 negocios activos en España y LATAM.", revenue: 15, icon: <AlwaysFullIcon /> },
    { name: "BNB65.com", url: "BNB65.com", model: "Alojamiento + experiencias para +65 años.", market: "Turismo sénior (uno de los de mayor crecimiento en Europa).", advantage: "Especialización en accesibilidad, seguridad y actividades adaptadas.", projection: "20.000 reservas mensuales en Europa.", revenue: 12, icon: <Bnb65Icon /> },
    { name: "Cannaviajes.com", url: "Cannaviajes.com", model: "Agencia de viajes temática en torno al turismo cannábico y experiencias relacionadas.", market: "Turismo alternativo y emergente en países con legislación favorable.", advantage: "Primer player en España y LATAM.", projection: "10.000 reservas anuales.", revenue: 5, icon: <CannaViajesIcon /> },
    { name: "SalsaVR.com", url: "SalsaVR.com", model: "Plataforma de clases y experiencias de baile en realidad virtual.", market: "Entretenimiento, fitness y e-learning.", advantage: "Experiencias inmersivas, comunidad global.", projection: "1M usuarios activos.", revenue: 8, icon: <SalsaVRIcon /> },
    { name: "Reto360.com", url: "Reto360.com", model: "Experiencias de retos y gamificación en 360º y VR para eventos, ocio y turismo.", market: "Eventos, formación, turismo de experiencias.", advantage: "Producto viral y adaptable a sectores B2B y B2C.", projection: "500 clientes B2B + 100k usuarios B2C.", revenue: 6, icon: <Reto360Icon /> },
    { name: "CadizAvanza.com", url: "CadizAvanza.com", model: "Gestión de alquileres turísticos + agencia de marketing y consultoría con IA.", market: "Propietarios de viviendas turísticas + pymes locales.", advantage: "Branding local + digitalización con IA.", projection: "1.000 propiedades gestionadas.", revenue: 4, icon: <CadizAvanzaIcon /> },
    { name: "ChorizoPortuano.es", url: "ChorizoPortuano.es", model: "Marca humorística de merchandising y regalos.", market: "E-commerce y B2B para campañas.", advantage: "Disruptivo, viral, posicionamiento de humor ácido.", projection: "100k ventas anuales.", revenue: 2, icon: <ChorizoPortuanoIcon /> },
    { name: "GibraltarGate.com", url: "GibraltarGate.com", model: "Plataforma de servicios de gestoría y consultoría para empresas y particulares en Gibraltar.", market: "Servicios financieros, creación de empresas, asesoría fiscal.", advantage: "Agiliza la burocracia transfronteriza y ofrece acceso a expertos locales.", projection: "500 operaciones anuales.", revenue: 3, icon: <GibraltarGateIcon /> },
    { name: "Tu Rincón Gourmet", url: "TuRinconGourmet.com", model: "Club de suscripción y e-commerce de productos artesanales y gourmet seleccionados.", market: "Amantes de la gastronomía, regalos corporativos, mercado premium.", advantage: "Curación experta de productos exclusivos y storytelling de productores locales.", projection: "10.000 suscriptores activos.", revenue: 4, icon: <TuRinconGourmetIcon /> },
  ],
  marketAnalysis: [
    { title: "Turismo y hostelería", description: "En plena recuperación post-COVID, con crecimiento anual >7%." },
    { title: "Turismo sénior", description: "Segmento que crecerá un 60% en 10 años." },
    { title: "Experiencias inmersivas (VR/AR)", description: "Mercado global proyectado a 400B$ en 2030." },
    { title: "Consumo experiencial", description: "Tendencia clara en nuevas generaciones." },
  ],
  businessModels: [
      { type: BusinessModelType.SUBSCRIPTION, brands: ["Siemprelleno", "SalsaVR", "Reto360", "Tu Rincón Gourmet"] },
      { type: BusinessModelType.COMMISSION, brands: ["BNB65", "Cannaviajes", "CadizAvanza"] },
      { type: BusinessModelType.ECOMMERCE, brands: ["ChorizoPortuano"] },
      { type: BusinessModelType.PREMIUM_SERVICES, brands: ["CadizAvanza", "GibraltarGate"] },
  ],
  growthStrategy: [
    "Lanzamiento y captación de clientes iniciales en España.",
    "Escalado a LATAM y Europa (mercados clave: Portugal, Francia, Alemania, México, Colombia).",
    "Alianzas estratégicas con players del sector (ej. Airbnb, Booking, Meta, agencias de eventos).",
    "Creación de comunidad digital fuerte alrededor de VR, turismo y experiencias.",
    "Roadmap de inversión: consolidar cada marca en verticales → integración en el holding."
  ],
  financials: {
    totalRevenue: 59, // Sum of individual brand revenues
    ebitda: 15,
    initialInvestment: 2.5,
  },
  investmentProposal: {
    preMoneyValuation: 10,
    potentialValuation: 100,
    investmentOptions: "Entrada directa en equity en Pisha Capital Holding o en marcas individuales. Opciones desde 100k € hasta 1M €.",
    expectedROI: "x5 – x10 en 3-5 años vía exit o M&A.",
  },
  team: {
    founder: "Javier Domínguez – Fundador (visión, estrategia, business development).",
    partners: "Red de partners y colaboradores en turismo, VR, marketing y real estate.",
    talentPlan: "Plan de atracción de talento: CTO, CMO y advisors senior.",
  },
  risks: [
    { title: "Entrada de competidores", mitigation: "Ventaja: rapidez y nicho." },
    { title: "Escalado tecnológico", mitigation: "Partnerships y CTO especializado." },
    { title: "Financiación", mitigation: "Fases de inversión + diversificación por marca." },
  ],
  conclusion: "Pisha Capital no es solo un holding, es un ecosistema de marcas con capacidad de disrupción en sectores con gran crecimiento. Con inversión estratégica, puede convertirse en un player internacional en turismo, hostelería y entretenimiento en menos de 5 años."
};