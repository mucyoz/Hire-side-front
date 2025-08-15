import React, { useState } from 'react';
import { Heart, Truck, Wrench } from 'lucide-react';

const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Heart,
    title: 'Healthcare Professionals',
    description: 'Connect with background-checked nurses, therapists, and medical staff ready to start immediately.',
    features: ['Background-checked professionals', 'Licensed and certified', 'Immediate availability'],
    image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'logistics',
    name: 'Logistics & Warehousing',
    icon: Truck,
    title: 'Warehouse-Ready Talent',
    description: 'Access experienced warehouse workers, drivers, and logistics professionals who are ready to work.',
    features: ['Experience verified', 'Safety certified', 'Immediate start dates'],
    image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'trades',
    name: 'Skilled Trades',
    icon: Wrench,
    title: 'Certified Tradespeople',
    description: 'Find skilled electricians, plumbers, and construction workers with verified certifications.',
    features: ['Licensed professionals', 'Proven experience', 'Quality guaranteed'],
    image: 'https://images.pexels.com/photos/9492299/pexels-photo-9492299.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const IndustryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('healthcare');
  const activeIndustry = industries.find((industry) => industry.id === activeTab)!;

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Specialized for Your Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-specific expertise and tailored solutions for your hiring needs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-2 sm:space-y-0 sm:space-x-2">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === industry.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <industry.icon className="h-5 w-5" />
              <span>{industry.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-4">
                <activeIndustry.icon className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">{activeIndustry.title}</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">{activeIndustry.description}</p>
              
              <ul className="space-y-3">
                {activeIndustry.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTabs;