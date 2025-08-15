import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const notifications = [
  { name: 'Anna', company: 'MedCore Health', role: 'Registered Nurse' },
  { name: 'Marcus', company: 'Swift Logistics', role: 'Warehouse Manager' },
  { name: 'Sarah', company: 'BuildPro', role: 'Electrician' },
  { name: 'James', company: 'TechCorp', role: 'Software Engineer' },
  { name: 'Maria', company: 'HealthFirst', role: 'Physical Therapist' },
];

const SocialProof: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4000);
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const notification = notifications[currentNotification];

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {notification.name} was hired at {notification.company}
            </p>
            <p className="text-sm text-gray-600">
              {notification.role} • Just now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;