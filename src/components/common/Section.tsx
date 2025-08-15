import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue' | 'orange';
  padding?: 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'lg'
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-brandBlue',
    orange: 'bg-brandOrange',
  };

  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
  };

  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;