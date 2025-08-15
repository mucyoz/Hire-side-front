import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Shield, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Don't Let Great Candidates Go to Faster Competitors
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Beat the résumé lottery. Make direct human connections. 
          First event satisfaction guaranteed or full refund.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/get-started?type=employer"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all hover:transform hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            <span>Schedule Your Hiring Event</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          
          <Link
            to="/get-started?type=jobseeker"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all hover:transform hover:scale-105"
          >
            <Users className="h-5 w-5" />
            <span>Join Our Talent Network</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Guarantee */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-blue-200" />
            <h3 className="text-2xl font-bold">Value Reversal Guarantee</h3>
          </div>
          <p className="text-blue-100 text-lg">
            First event satisfaction guaranteed or <strong>full refund</strong>. 
            Missing out means losing great candidates to faster competitors.
          </p>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-200 mb-2">500+</div>
            <div className="text-blue-100">Successful Events</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-200 mb-2">10,000+</div>
            <div className="text-blue-100">Hires Made</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-200 mb-2">95%</div>
            <div className="text-blue-100">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;