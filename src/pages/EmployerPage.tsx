import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, Users, CheckCircle, TrendingUp, Award, AlertCircle } from 'lucide-react';

const EmployerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Hire <span className="gradient-text">4x Faster</span> with Pre-Qualified Talent
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stop wasting time on unqualified candidates. Connect with pre-vetted professionals who are ready to work and eager to join your team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/get-started?type=employer"
                  className="btn-primary"
                >
                  Schedule Your First Event
                </Link>
                <Link
                  to="/how-it-works"
                  className="btn-outline"
                >
                  See How It Works
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4x</div>
                  <div className="text-sm text-gray-600">Faster Hiring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">70%</div>
                  <div className="text-sm text-gray-600">Same-Day Offers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">85%</div>
                  <div className="text-sm text-gray-600">Retention Rate</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional hiring meeting"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Hidden Costs of Traditional Hiring
            </h2>
            <p className="text-xl text-gray-600">
              Every day a position stays open costs your business money and productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <DollarSign className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">$500+ Daily Cost</h3>
              <p className="text-gray-600">
                Each open position costs your company hundreds in lost productivity every single day
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">45+ Days to Fill</h3>
              <p className="text-gray-600">
                Traditional hiring takes 6-8 weeks on average, leaving critical roles unfilled
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Poor Quality Hires</h3>
              <p className="text-gray-600">
                30% of hires leave within 90 days, forcing you to restart the entire process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Employers Choose Hireside Chat
            </h2>
            <p className="text-xl text-gray-600">
              Transform your hiring process with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-Qualified Candidates Only</h3>
                  <p className="text-gray-600">Every candidate is background-checked, skills-verified, and interview-ready before your event.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Offers</h3>
                  <p className="text-gray-600">70% of our employers make offers on the same day as their hiring event.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Retention Rates</h3>
                  <p className="text-gray-600">85% of our placements are still with the company after one year.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost-Effective Solution</h3>
                  <p className="text-gray-600">Save thousands in recruiting fees and lost productivity costs.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Story</h3>
              <blockquote className="text-gray-700 mb-4">
                "We filled 12 nursing positions in one week using Hireside Chat. Previously, it would take us 2-3 months per position. The quality of candidates was outstanding."
              </blockquote>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-600">HR Director, MedCore Health</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple Process, Powerful Results
            </h2>
            <p className="text-xl text-gray-600">
              From signup to hire in just days, not weeks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Share Requirements', description: 'Tell us about your ideal candidate' },
              { step: 2, title: 'We Pre-qualify', description: 'We find and verify qualified candidates' },
              { step: 3, title: 'Live Event', description: 'Meet 15-50 candidates in one session' },
              { step: 4, title: 'Make Offers', description: 'Complete hiring on the same day' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of employers who've revolutionized their hiring process
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/get-started?type=employer"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Schedule Your First Event
            </Link>
          </div>

          <p className="text-blue-200">
            <Award className="inline h-5 w-5 mr-2" />
            Satisfaction guaranteed or full refund
          </p>
        </div>
      </section>
    </div>
  );
};

export default EmployerPage;