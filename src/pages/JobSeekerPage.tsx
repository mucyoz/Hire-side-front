import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, CheckCircle, TrendingUp, MessageCircle, Award, FileX } from 'lucide-react';

const JobSeekerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Skip the <span className="text-orange-500">Black Hole</span><br />
                Talk to <span className="gradient-text">Real Employers</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                No more résumé uploads that disappear forever. Connect directly with hiring managers who are ready to make offers today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/get-started?type=jobseeker"
                  className="btn-secondary"
                >
                  Join Our Talent Network
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
                  <div className="text-2xl font-bold text-orange-500">70%</div>
                  <div className="text-sm text-gray-600">Same-Day Offers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4x</div>
                  <div className="text-sm text-gray-600">Faster Process</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">95%</div>
                  <div className="text-sm text-gray-600">Job Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7688103/pexels-photo-7688103.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional job interview"
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
              Tired of the Traditional Job Search?
            </h2>
            <p className="text-xl text-gray-600">
              You're not alone. The current system is broken for job seekers too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <FileX className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Résumé Black Hole</h3>
              <p className="text-gray-600">
                Your applications disappear into ATS systems, never to be seen by human eyes
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Endless Waiting</h3>
              <p className="text-gray-600">
                Weeks or months without responses, leaving you in limbo about your career
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <TrendingUp className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lost Opportunities</h3>
              <p className="text-gray-600">
                Perfect matches never connect due to broken processes and poor communication
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
              Why Job Seekers Love Hireside Chat
            </h2>
            <p className="text-xl text-gray-600">
              Finally, a hiring process that puts you first
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Skip the ATS</h3>
                  <p className="text-gray-600">Talk directly to hiring managers and decision makers, not computer algorithms.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Immediate Feedback</h3>
                  <p className="text-gray-600">Get real-time responses and know where you stand instantly.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple Opportunities</h3>
                  <p className="text-gray-600">Meet 8-15 employers in one event, maximizing your chances of finding the perfect fit.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Offers</h3>
                  <p className="text-gray-600">70% of our candidates receive job offers on the same day as their event.</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Story</h3>
              <blockquote className="text-gray-700 mb-4">
                "I was unemployed for 6 months before finding Hireside Chat. Within one week, I attended an event and received 3 job offers. I started my new role the following Monday!"
              </blockquote>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Marcus Thompson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Marcus Thompson</div>
                  <div className="text-gray-600">Warehouse Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Specialize in High-Demand Industries
            </h2>
            <p className="text-xl text-gray-600">
              Connect with employers who are actively hiring in these growing fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Nurses, therapists, medical assistants, and other healthcare professionals
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Competitive salaries</li>
                <li>• Flexible schedules</li>
                <li>• Career advancement</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Logistics & Warehousing</h3>
              <p className="text-gray-600 mb-4">
                Warehouse workers, drivers, supervisors, and logistics coordinators
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Immediate start dates</li>
                <li>• Growth opportunities</li>
                <li>• Comprehensive benefits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Skilled Trades</h3>
              <p className="text-gray-600 mb-4">
                Electricians, plumbers, HVAC technicians, and construction workers
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Premium wages</li>
                <li>• Union opportunities</li>
                <li>• Skill development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of job seekers who've found their perfect match through live hiring events
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/get-started?type=jobseeker"
              className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Join Our Talent Network
            </Link>
          </div>

          <p className="text-orange-200">
            <CheckCircle className="inline h-5 w-5 mr-2" />
            It's completely free for job seekers
          </p>
        </div>
      </section>
    </div>
  );
};

export default JobSeekerPage;