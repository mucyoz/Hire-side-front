import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Shield, TrendingUp, Users, Clock } from 'lucide-react';

const objections = [
  {
    id: 'why-not-indeed',
    question: 'Why Not Just Use Indeed?',
    answer: 'We deliver 50 real conversations, not 1,000 résumés. Job boards create black holes where qualified candidates disappear into ATS systems. We facilitate face-to-face meetings between pre-qualified talent and decision makers who are ready to hire. 70% of our placements receive same-day offers vs. the industry average of 6+ weeks.',
    icon: TrendingUp,
    stat: '50 conversations > 1,000 résumés',
  },
  {
    id: 'speed-hiring',
    question: 'Is This Just Speed Hiring?',
    answer: 'Yes, but also quality—proven by 85% retention and custom fit. We pre-qualify every candidate through comprehensive skills assessments, background checks, behavioral screening, and cultural fit evaluation. Faster doesn\'t mean compromising quality; it means eliminating inefficient, dehumanizing processes that waste everyone\'s time.',
    icon: Shield,
    stat: 'Speed + Quality = 85% retention',
  },
  {
    id: 'no-show-up',
    question: 'What if no one shows up to my event?',
    answer: '80%+ show-up or your event is free. Our multi-touch confirmation system, pre-event engagement, and commitment verification ensure serious participants only. We\'ve never missed our attendance guarantee because we pre-qualify for genuine interest and readiness.',
    icon: Users,
    stat: '80%+ show-up or free event',
  },
  {
    id: 'time-commitment',
    question: 'How much time does this require from my team?',
    answer: 'Much less than traditional hiring. Instead of weeks of screening calls and endless interviews, invest 2-4 hours in one focused event to meet 15-50 pre-qualified candidates. Our batch-efficient approach saves an average of 40 hours per hire while delivering better matches.',
    icon: Clock,
    stat: '2-4 hours vs. weeks of screening',
  },
];

const ObjectionHandling: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>('why-not-indeed');

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Common Questions Answered
          </h2>
          <p className="text-xl text-gray-600">
            We understand your concerns. Here's how we address them.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {objections.map((objection) => (
            <div
              key={objection.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenItem(openItem === objection.id ? null : objection.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <objection.icon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">{objection.question}</span>
                </div>
                {openItem === objection.id ? (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openItem === objection.id && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 mb-4">{objection.answer}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      {objection.stat}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-green-100 border border-green-200 rounded-full px-6 py-3">
            <Shield className="h-6 w-6 text-green-600" />
            <span className="text-green-800 font-semibold">
              80%+ show-up guarantee or you don't pay
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;