import React from 'react';
import { CheckCircle, Users, Calendar, Award, Clock } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Solution: <span className="gradient-text">Three-Pillar Value Architecture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Velocity, Quality, and Retention through same-day decisions, face-to-face meetings, and guaranteed show-up rates.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-blue-50 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Velocity</h3>
            <p className="text-gray-600 mb-4">4x faster hiring through focused, batch-efficient events</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 44 days → 10 days average</li>
              <li>• Same-day decisions</li>
              <li>• Dedicated event design</li>
            </ul>
          </div>
          
          <div className="text-center bg-orange-50 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600 mb-4">Complete pre-qualification and cultural fit screening</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Skills & background vetting</li>
              <li>• Behavioral assessments</li>
              <li>• Industry-matched events</li>
            </ul>
          </div>
          
          <div className="text-center bg-green-50 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Retention</h3>
            <p className="text-gray-600 mb-4">Human-first connections with 40% lower early turnover</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 85%+ retention rate</li>
              <li>• Face-to-face meetings</li>
              <li>• Cultural alignment focus</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Employer Benefits */}
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">For Employers</h3>
              <p className="text-gray-600">Connect with pre-vetted talent instantly</p>
            </div>
            
            <div className="space-y-4">
              {[
                'Meet 15-50 pre-qualified candidates in focused sessions',
                'Complete pre-qualification process handles vetting',
                'Batch efficiency for dozens of hires simultaneously',
                'Same-day decisions with guaranteed show-up rates',
                'Industry-matched events with cultural fit screening'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Job Seeker Benefits */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">For Job Seekers</h3>
              <p className="text-gray-600">Skip the black hole, talk to decision makers</p>
            </div>
            
            <div className="space-y-4">
              {[
                'Skip dehumanizing algorithms, talk to real decision makers',
                'Face-to-face meetings that showcase your full potential',
                'Access multiple opportunities in industry-matched events',
                'Same-day offers from employers ready to hire',
                'Beat the résumé lottery with direct human connections'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefit Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Clock className="h-8 w-8 mb-2" />
              </div>
              <div className="text-3xl font-bold mb-1">4x</div>
              <div className="text-sm opacity-90">Faster Hiring</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-8 w-8 mb-2" />
              </div>
              <div className="text-3xl font-bold mb-1">70%</div>
              <div className="text-sm opacity-90">Same-Day Offers</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-8 w-8 mb-2" />
              </div>
              <div className="text-3xl font-bold mb-1">85%</div>
              <div className="text-sm opacity-90">Retention Rate</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 mb-2" />
              </div>
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm opacity-90">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;