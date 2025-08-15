import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Clock, TrendingUp } from 'lucide-react';
import { STATS, BRAND_MESSAGE, COMPANY_INFO } from '../../config/constants';
import Section from '../common/Section';

const HeroSection: React.FC = () => {
  const [stats, setStats] = useState({ hiring: 0, offers: 0, retention: 0 });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setStats({
          hiring: Math.round(STATS.fasterHiring.value * easeOut),
          offers: Math.round(STATS.sameDayOffers.value * easeOut),
          retention: Math.round(STATS.retention.value * easeOut),
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
    };

    animateStats();
  }, []);

  return (
    <>
      <Helmet>
        <title>{COMPANY_INFO.name} - {BRAND_MESSAGE}</title>
        <meta name="description" content={COMPANY_INFO.description} />
        <meta property="og:title" content={`${COMPANY_INFO.name} - ${BRAND_MESSAGE}`} />
        <meta property="og:description" content={COMPANY_INFO.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${COMPANY_INFO.name} - ${BRAND_MESSAGE}`} />
        <meta name="twitter:description" content={COMPANY_INFO.description} />
      </Helmet>
      
      <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-display-lg sm:text-display-xl font-bold text-slate-900 leading-tight mb-6">
              Where Great Hires{' '}
              <span className="gradient-text">Happen Fast</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-2xl">
              Transform hiring from a numbers game into human connections that stick. We cut time-to-hire from 44 days to 10, delivering 85%+ retention through face-to-face meetings that matter.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="text-center animate-counter">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-brandBlue mr-2" aria-hidden="true" />
                  <span className="text-4xl font-bold text-brandBlue">{stats.hiring}{STATS.fasterHiring.suffix}</span>
                </div>
                <p className="text-base font-semibold text-slate-800">{STATS.fasterHiring.label}</p>
                <p className="text-sm text-slate-700">{STATS.fasterHiring.detail}</p>
              </div>
              
              <div className="text-center animate-counter" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-brandOrange mr-2" aria-hidden="true" />
                  <span className="text-4xl font-bold text-brandOrange">{stats.offers}{STATS.sameDayOffers.suffix}</span>
                </div>
                <p className="text-base font-semibold text-slate-800">{STATS.sameDayOffers.label}</p>
                <p className="text-sm text-slate-700">{STATS.sameDayOffers.detail}</p>
              </div>
              
              <div className="text-center animate-counter" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-green-500 mr-2" aria-hidden="true" />
                  <span className="text-4xl font-bold text-green-500">{stats.retention}{STATS.retention.suffix}</span>
                </div>
                <p className="text-base font-semibold text-slate-800">{STATS.retention.label}</p>
                <p className="text-sm text-slate-700">{STATS.retention.detail}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NavLink
                to="/get-started?type=employer"
                className="btn-primary flex items-center justify-center space-x-2 hover-lift"
              >
                <span>Start Hiring Today</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </NavLink>
              
              <NavLink
                to="/get-started?type=jobseeker"
                className="btn-secondary flex items-center justify-center space-x-2 hover-lift"
              >
                <span>Find Your Next Job</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </NavLink>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover-lift">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-4">
                  <div className="text-2xl font-bold text-brandBlue">HC</div>
                </div>
                <h3 className="text-display-sm font-bold text-slate-900 mb-2">Live Hiring Event</h3>
                <p className="text-slate-700">Healthcare Professionals</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    <span className="font-medium">15 Candidates</span>
                  </div>
                  <span className="text-green-600 text-sm font-semibold">Ready to Interview</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brandBlue rounded-full"></div>
                    <span className="font-medium">8 Employers</span>
                  </div>
                  <span className="text-brandBlue text-sm font-semibold">Hiring Now</span>
                </div>
                
                <div className="text-center pt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-brandOrange">
                    🔥 Event starts in 2 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;