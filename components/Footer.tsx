
import React from 'react';

interface FooterProps {
  conclusion: string;
  holdingName: string;
}

const Footer: React.FC<FooterProps> = ({ conclusion, holdingName }) => {
  return (
    <footer className="bg-brand-secondary text-brand-light">
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Conclusión</h2>
        <p className="max-w-4xl mx-auto mb-8 text-lg">{conclusion}</p>
        <div className="border-t border-brand-accent pt-6">
          <p>&copy; {new Date().getFullYear()} {holdingName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
