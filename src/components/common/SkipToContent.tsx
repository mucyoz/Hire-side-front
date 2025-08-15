import React from 'react';

const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brandBlue text-white px-4 py-2 rounded-md font-medium z-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brandBlue"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;