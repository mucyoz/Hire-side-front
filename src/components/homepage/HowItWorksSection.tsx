import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, UserCheck, Video, Handshake, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Share Hiring Goals',
    description: 'Recruiters share hiring goals, timeline, and ideal candidate profile',
    icon: FileText,
    color: 'bg-blue-500',
  },
  {
    number: 2,
    title: 'Complete Vetting',
    description: 'We handle skills, background, and behavioral vetting for perfect matches',
    icon: UserCheck,
    color: 'bg-green-500',
  },
  {
    number: 3,
    title: 'Focused Live Event',
    description: 'Meet 15-50 pre-qualified candidates in structured, efficient sessions',
    icon: Video,
    color: 'bg-purple-500',
  },
  {
    number: 4,
    title: 'Same-Day Offers',
    description: 'Make offers the same day, dramatically cutting time and cost',
    icon: Handshake,
    color: 'bg-orange-500',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to revolutionize your hiring process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl p-6 shadow-lg hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 ${step.color} rounded-lg mb-4`}>
                <step.icon className="h-6 w-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              
              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/how-it-works"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;