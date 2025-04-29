
import React from 'react';
import { CheckCircle, Leaf, Shield, Award } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-600">
            Our innovative platform combines the best of blockchain technology with user-friendly design to create a truly next-generation payment experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="Affordable" 
            description="Transaction fees as low as 1-2%, significantly lower than traditional solutions." 
            icon={<CheckCircle className="h-12 w-12" />}
            delay={1}
          />
          <FeatureCard 
            title="Rewards" 
            description="Customers earn rewards by contributing to the ReLeaf network through their phones." 
            icon={<Award className="h-12 w-12" />}
            delay={2}
          />
          <FeatureCard 
            title="Green" 
            description="Our consensus mechanism minimizes energy consumption, making ReLeaf an environmentally friendly choice." 
            icon={<Leaf className="h-12 w-12" />}
            delay={3}
          />
          <FeatureCard 
            title="Security" 
            description="Enjoy secure transactions with our distributed ledger technology, at a fraction of the cost." 
            icon={<Shield className="h-12 w-12" />}
            delay={4}
          />
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 opacity-0 animate-fade-in">The ReLeaf Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="opacity-0 animate-fade-in animate-delay-100 border-l-4 border-releaf-green shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p>No other payment network pays users for participating.</p>
              </CardContent>
            </Card>
            <Card className="opacity-0 animate-fade-in animate-delay-200 border-l-4 border-releaf-yellow shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p>No special hardware needed—just an average, connected phone.</p>
              </CardContent>
            </Card>
            <Card className="opacity-0 animate-fade-in animate-delay-300 border-l-4 border-releaf-green shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p>Built for low-energy infrastructure and low-connectivity environments.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
