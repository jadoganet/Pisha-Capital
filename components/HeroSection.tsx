
import React from 'react';

interface HeroSectionProps {
    holdingName: string;
    founder: string;
    vision: string;
    threeYearGoal: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ holdingName, founder, vision, threeYearGoal }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary z-10 opacity-70"></div>
        <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Abstract Background" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="relative z-20 container mx-auto px-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
                {holdingName}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8">
                Fundador: {founder}
            </p>
            <div className="max-w-4xl mx-auto space-y-6">
                 <p className="text-lg md:text-xl text-brand-text bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                    <strong>Visión:</strong> {vision}
                </p>
                 <p className="text-lg md:text-xl text-brand-text bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                    <strong>Meta a 3 años:</strong> {threeYearGoal}
                </p>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
