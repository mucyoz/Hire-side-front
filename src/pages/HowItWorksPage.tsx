import React from 'react';
import { FileText, UserCheck, Video, Handshake, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Share Your Needs',
    description: 'Tell us about your hiring requirements or job preferences through our simple intake form.',
    details: [
      'Complete a 5-minute requirements form',
      'Specify your ideal candidate profile or job criteria',
      'Set your timeline and budget preferences',
      'Choose your preferred event format and timing'
    ],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: FileText,
  },
  {
    number: '02',
    title: 'We Prequalify Everyone',
    description: 'Our expert team matches and verifies all participants before the event.',
    details: [
      'Skills assessment and background verification',
      'Reference checks and experience validation',
      'Cultural fit evaluation and interview readiness',
      'Final confirmation 24 hours before event'
    ],
    image: 'https://images.pexels.com/photos/7688103/pexels-photo-7688103.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: UserCheck,
  },
  {
    number: '03',
    title: 'Live Hiring Event',
    description: 'Connect in real-time with qualified matches in a focused, productive environment.',
    details: [
      '2-4 hour focused hiring session',
      'Meet 15-50 pre-qualified participants',
      'Structured interviews with decision makers',
      'Real-time Q&A and immediate feedback'
    ],
    image: 'https://images.pexels.com/photos/7688103/pexels-photo-7688103.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Video,
  },
  {
    number: '04',
    title: 'Make Offers Today',
    description: 'Complete the hiring process with same-day offers and immediate next steps.',
    details: [
      'Same-day offer decisions and negotiations',
      'Immediate contract and paperwork completion',
      'Start date coordination and onboarding',
      'Ongoing support for successful placement'
    ],
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Handshake,
  },
];

const faqs = [
  {
    question: 'How long does the entire process take?',
    answer: 'From initial signup to making offers typically takes 5-7 business days. The actual hiring event is 2-4 hours, and many clients make same-day offers.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We specialize in Healthcare, Logistics & Warehousing, and Skilled Trades, with plans to expand to more industries based on demand.'
  },
  {
    question: 'How do you ensure candidate quality?',
    answer: 'Every candidate goes through skills assessment, background checks, reference verification, and a screening interview before being invited to events.'
  },
  {
    question: 'What if I don\'t find the right fit?',
    answer: 'We offer a satisfaction guarantee. If you\'re not satisfied with your first event, we\'ll provide a full refund and work with you to improve the next one.'
  },
  {
    question: 'Can I participate remotely?',
    answer: 'Yes! We offer both in-person and virtual hiring events to accommodate different preferences and geographic requirements.'
  }
];

const HowItWorksPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How <span className="gradient-text">Hireside Chat</span> Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A step-by-step guide to revolutionizing your hiring process with live, focused events that connect the right people at the right time.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => (
            <div key={step.number} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}>
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-3 mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our process</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ArrowRight
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the hiring revolution and connect with your perfect match today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-started?type=employer"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:transform hover:scale-105"
            >
              Start Hiring Today
            </a>
            <a
              href="/get-started?type=jobseeker"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:transform hover:scale-105"
            >
              Find Your Next Job
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;