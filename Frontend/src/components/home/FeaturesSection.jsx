// Sub-component for individual features
import React from 'react';
import { Leaf, ShieldCheck, Droplet } from 'lucide-react';

const Feature = ({ icon: Icon, title, text }) => (
  <div className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300">
    <div className="mb-6 p-4 rounded-full bg-stone-100">
      <Icon size={28} color="#7D3E42" strokeWidth={1.5} />
    </div>
    <h3 className="font-serif text-xl mb-3" style={{ color: '#2F3B32' }}>{title}</h3>
    <p className="text-sm leading-relaxed opacity-70 max-w-xs" style={{ color: '#2F3B32' }}>{text}</p>
  </div>
);

const FeaturesSection = () => (
  <section className="py-24 px-6 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: '#2F3B32' }}>Pure Ingredients. Powerful Results.</h2>
        <div className="h-1 w-20 mx-auto rounded-full opacity-20" style={{ backgroundColor: '#7D3E42' }} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature 
          icon={Leaf} 
          title="100% Grass-Fed" 
          text="Sourced from regenerative family farms. Our tallow is rich in Vitamins A, D, E, and K, mimicking your skin's biology."
        />
        <Feature 
          icon={ShieldCheck} 
          title="Bio-Identical" 
          text="Unlike plant oils, tallow is molecularly similar to human skin lipids, allowing for deep, non-greasy absorption."
        />
        <Feature 
          icon={Droplet} 
          title="Hand-Rendered" 
          text="Purified slowly in small batches to preserve nutrient density. No preservatives, no synthetics, no compromise."
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;