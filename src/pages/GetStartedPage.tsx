import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Users,
  Briefcase,
} from "lucide-react";

import emailjs from "@emailjs/browser";

const GetStartedPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState<"employer" | "jobseeker" | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "employer" || type === "jobseeker") {
      setUserType(type);
    }
  }, [searchParams]);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const updateFormData = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
  };

  const handleFinalSubmit = async (data: any) => {
    console.log("=== FORM SUBMISSION STARTED ===");
    setIsSubmitting(true);
    setErrors({});

    // --- REFACTORED CODE ---
    // Determine the correct API endpoint based on userType
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
    const endpoint =
      userType === "employer" ? "/api/employer" : "/api/jobseeker";

    try {
      const response = await fetch(`${apiBaseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Send only the raw form data. The backend will handle the rest.
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.message || "Failed to submit form");
      }

      handleNext(); // Success!
    } catch (error: any) {
      console.error("Form submission error:", error);
      setErrors({
        general: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      console.log("=== FORM SUBMISSION Ended ===");
    }
  };

  // User Type Selection
  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-display-lg font-bold text-slate-900 mb-4">
              Get Started with Hireside Chat
            </h1>
            <p className="text-xl text-slate-700">
              Choose your path to revolutionize hiring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button
              onClick={() => setUserType("employer")}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105 text-left focus-visible"
              aria-label="Sign up as an employer"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase
                    className="h-8 w-8 text-brandBlue"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-display-sm font-bold text-slate-900">
                    I'm an Employer
                  </h2>
                  <p className="text-slate-700">
                    Looking to hire qualified candidates
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Meet 15-50 pre-qualified candidates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Make same-day offers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Reduce time-to-hire by 4x</span>
                </li>
              </ul>
            </button>

            <button
              onClick={() => setUserType("jobseeker")}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105 text-left focus-visible"
              aria-label="Sign up as a job seeker"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users
                    className="h-8 w-8 text-brandOrange"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-display-sm font-bold text-slate-900">
                    I'm a Job Seeker
                  </h2>
                  <p className="text-slate-700">
                    Ready to find my next opportunity
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Skip the résumé black hole</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Talk directly to hiring managers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Receive same-day offers</span>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-display-md font-bold text-slate-900 mb-4">
            {userType === "employer"
              ? "Schedule Your Hiring Event"
              : "Join Our Talent Network"}
          </h1>
          <p className="text-lg text-slate-700">
            {userType === "employer"
              ? "Tell us about your hiring needs and we'll set up your first event"
              : "Let us know about your career goals and we'll connect you with opportunities"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep
                      ? "bg-brandBlue text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step < currentStep ? (
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      step < currentStep ? "bg-brandBlue" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {userType === "employer" ? (
            <EmployerForm
              currentStep={currentStep}
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
              onPrev={handlePrev}
              errors={errors}
              isSubmitting={isSubmitting}
              onFinalSubmit={handleFinalSubmit}
            />
          ) : (
            <JobSeekerForm
              currentStep={currentStep}
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
              onPrev={handlePrev}
              errors={errors}
              isSubmitting={isSubmitting}
              onFinalSubmit={handleFinalSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Employer Form Component
const EmployerForm: React.FC<{
  currentStep: number;
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
  onFinalSubmit: (data: any) => void;
}> = ({
  currentStep,
  formData,
  updateFormData,
  onNext,
  onPrev,
  errors,
  isSubmitting,
  onFinalSubmit,
}) => {
  const [localData, setLocalData] = useState<any>({
    preferredDay: "Any day",
    preferredTime: "Any time",
  });
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!localData.companyName)
        newErrors.companyName = "Company name is required";
      if (!localData.industry) newErrors.industry = "Please select an industry";
      if (!localData.contactName)
        newErrors.contactName = "Your name is required";
      if (!localData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(localData.email))
        newErrors.email = "Please enter a valid email";
    }

    setValidationErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      updateFormData(localData);
      if (currentStep !== 3) {
        onNext();
      } else {
        onFinalSubmit({ ...formData, ...localData });
      }
    }
  };

  switch (currentStep) {
    case 1:
      return (
        <form onSubmit={handleSubmit}>
          <h2 className="text-display-sm font-bold text-slate-900 mb-6">
            Company Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandBlue ${
                  validationErrors.companyName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Your company name"
                onChange={(e) =>
                  setLocalData({ ...localData, companyName: e.target.value })
                }
              />
              {validationErrors.companyName && (
                <p className="mt-1 text-sm text-red-600">
                  {validationErrors.companyName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Industry
              </label>
              <select
                id="industry"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandBlue ${
                  validationErrors.industry
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onChange={(e) =>
                  setLocalData({ ...localData, industry: e.target.value })
                }
              >
                <option value="">Select industry</option>
                <option value="healthcare">Healthcare</option>
                <option value="logistics">Logistics & Warehousing</option>
                <option value="trades">Skilled Trades</option>
                <option value="other">Other</option>
              </select>
              {validationErrors.industry && (
                <p className="mt-1 text-sm text-red-600">
                  {validationErrors.industry}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contactName"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Your Name
              </label>
              <input
                id="contactName"
                type="text"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandBlue ${
                  validationErrors.contactName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Full name"
                onChange={(e) =>
                  setLocalData({ ...localData, contactName: e.target.value })
                }
              />
              {validationErrors.contactName && (
                <p className="mt-1 text-sm text-red-600">
                  {validationErrors.contactName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandBlue ${
                  validationErrors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="your@email.com"
                onChange={(e) =>
                  setLocalData({ ...localData, email: e.target.value })
                }
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {validationErrors.email}
                </p>
              )}
            </div>
          </div>

          {errors.general && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{errors.general}</p>
            </div>
          )}

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50"
            >
              <span>{isSubmitting ? "Processing..." : "Continue"}</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </form>
      );

    case 2:
      return (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Hiring Requirements
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position Title
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g., Registered Nurse, Warehouse Worker"
                onChange={(e) =>
                  setLocalData({ ...localData, positionTitle: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Positions
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  onChange={(e) =>
                    setLocalData({ ...localData, positions: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="1-5">1-5 positions</option>
                  <option value="6-10">6-10 positions</option>
                  <option value="11-25">11-25 positions</option>
                  <option value="25+">25+ positions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  onChange={(e) =>
                    setLocalData({ ...localData, urgency: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="immediate">Immediate (1-2 weeks)</option>
                  <option value="soon">Soon (2-4 weeks)</option>
                  <option value="flexible">Flexible (1-2 months)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Requirements
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="List the most important qualifications, certifications, or experience needed"
                onChange={(e) =>
                  setLocalData({ ...localData, requirements: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={onPrev}
              className="btn-outline flex items-center space-x-2"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <button
              type="submit"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Continue</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </form>
      );

    case 3:
      return (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Event Preferences
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Preferred Event Format
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="format"
                    value="in-person"
                    className="mr-3"
                    onChange={(e) =>
                      setLocalData({ ...localData, format: e.target.value })
                    }
                  />
                  <span>In-person event at our facility</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="format"
                    value="virtual"
                    className="mr-3"
                    onChange={(e) =>
                      setLocalData({ ...localData, format: e.target.value })
                    }
                  />
                  <span>Virtual event (video calls)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="format"
                    value="hybrid"
                    className="mr-3"
                    onChange={(e) =>
                      setLocalData({ ...localData, format: e.target.value })
                    }
                  />
                  <span>Hybrid (both options available)</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Day
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={localData.preferredDay || "Any day"} // Make it a controlled component
                  onChange={(e) =>
                    setLocalData({ ...localData, preferredDay: e.target.value })
                  }
                >
                  <option value="Any day">Any day</option> {/* Changed value */}
                  <option value="Weekday">Weekday</option>
                  <option value="Weekend">Weekend</option>
                  <option value="Specific day (we'll follow up)">
                    Specific day (we'll follow up)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={localData.preferredTime || "Any time"} // Make it a controlled component
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      preferredTime: e.target.value,
                    })
                  }
                >
                  <option value="Any time">Any time</option>{" "}
                  {/* Changed value */}
                  <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                  <option value="Afternoon (1pm-5pm)">
                    Afternoon (1pm-5pm)
                  </option>
                  <option value="Evening (6pm-8pm)">Evening (6pm-8pm)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={onPrev}
              className="btn-outline flex items-center space-x-2"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <button
              type="submit"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Continue</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </form>
      );

    case 4:
      return (
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle
              className="h-12 w-12 text-green-600"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-display-md font-bold text-slate-900 mb-4">
            You're All Set!
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Thank you for choosing Hireside Chat. Our team will review your
            requirements and contact you within 24 hours to schedule your first
            hiring event.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-slate-900 mb-2">
              What happens next:
            </h3>
            <ul className="text-slate-700 space-y-1 text-left">
              <li>• Our team reviews your hiring requirements</li>
              <li>• We source and pre-qualify candidates</li>
              <li>• You'll receive event details and candidate profiles</li>
              <li>• Connect with qualified talent in your live event</li>
            </ul>
          </div>

          <p className="text-sm text-slate-700">
            Questions? Contact us at{" "}
            <a
              href="mailto:hello@hiresidechat.com"
              className="text-brandBlue hover:underline focus-visible"
            >
              hello@hiresidechat.com
            </a>
          </p>
        </div>
      );

    default:
      return null;
  }
};

// Job Seeker Form Component
const JobSeekerForm: React.FC<{
  currentStep: number;
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
  onFinalSubmit: (data: any) => void;
}> = ({
  currentStep,
  formData,
  updateFormData,
  onNext,
  onPrev,
  errors,
  isSubmitting,
  onFinalSubmit,
}) => {
  const [localData, setLocalData] = useState<any>({});
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!localData.fullName) newErrors.fullName = "Full name is required";
      if (!localData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(localData.email))
        newErrors.email = "Please enter a valid email";
      if (!localData.phone) newErrors.phone = "Phone number is required";
      if (!localData.location) newErrors.location = "Location is required";
    }

    setValidationErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      updateFormData(localData);
      if (currentStep < 3) {
        onNext();
      } else {
        onFinalSubmit({ ...formData, ...localData });
      }
    }
  };

  switch (currentStep) {
    case 1:
      return (
        <form onSubmit={handleSubmit}>
          <h2 className="text-display-sm font-bold text-slate-900 mb-6">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandBlue ${
                  validationErrors.fullName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Your full name"
                onChange={(e) =>
                  setLocalData({ ...localData, fullName: e.target.value })
                }
              />
              {validationErrors.fullName && (
                <p className="mt-1 text-sm text-red-600">
                  {validationErrors.fullName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandBlue ${
                  validationErrors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="your@email.com"
                onChange={(e) =>
                  setLocalData({ ...localData, email: e.target.value })
                }
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {validationErrors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandBlue ${
                  validationErrors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="(555) 123-4567"
                onChange={(e) =>
                  setLocalData({ ...localData, phone: e.target.value })
                }
              />
              {validationErrors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {validationErrors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandBlue ${
                  validationErrors.location
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="City, State"
                onChange={(e) =>
                  setLocalData({ ...localData, location: e.target.value })
                }
              />
              {validationErrors.location && (
                <p className="mt-1 text-sm text-red-600">
                  {validationErrors.location}
                </p>
              )}
            </div>
          </div>

          {errors.general && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{errors.general}</p>
            </div>
          )}

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50"
            >
              <span>{isSubmitting ? "Processing..." : "Continue"}</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </form>
      );

    case 2:
      return (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Are You Ready to Interview?
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our hiring events connect you directly with employers who are
                ready to make offers. To ensure the best experience for
                everyone, we need to know if you're prepared to interview and
                potentially start work soon.
              </p>

              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="radio"
                    name="ready"
                    value="yes"
                    className="mr-3 mt-1"
                    onChange={(e) =>
                      setLocalData({ ...localData, readyToInterview: true })
                    }
                  />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Yes, I'm ready to interview
                    </span>
                    <p className="text-sm text-gray-600">
                      I'm actively job searching and can start within 2-4 weeks
                    </p>
                  </div>
                </label>

                <label className="flex items-start">
                  <input
                    type="radio"
                    name="ready"
                    value="no"
                    className="mr-3 mt-1"
                    onChange={(e) =>
                      setLocalData({ ...localData, readyToInterview: false })
                    }
                  />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Not quite yet
                    </span>
                    <p className="text-sm text-gray-600">
                      I'm exploring options but not ready to interview
                      immediately
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {localData.readyToInterview === false && (
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800">
                  No problem! We'll add you to our talent network and notify you
                  about opportunities when you're ready.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={onPrev}
              className="btn-outline flex items-center space-x-2"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <button
              type="submit"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Continue</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </form>
      );

    case 3:
      return (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Career Preferences
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry Interest
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setLocalData({ ...localData, industry: e.target.value })
                }
              >
                <option value="">Select primary interest</option>
                <option value="healthcare">Healthcare</option>
                <option value="logistics">Logistics & Warehousing</option>
                <option value="trades">Skilled Trades</option>
                <option value="multiple">Multiple industries</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title/Role Seeking
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g., Registered Nurse, Warehouse Associate, Electrician"
                onChange={(e) =>
                  setLocalData({ ...localData, targetRole: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  onChange={(e) =>
                    setLocalData({ ...localData, experience: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (2-5 years)</option>
                  <option value="senior">Senior Level (5+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Type
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      employmentType: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Skills & Certifications
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="List your relevant skills, certifications, licenses, or qualifications"
                onChange={(e) =>
                  setLocalData({ ...localData, skills: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={onPrev}
              className="btn-outline flex items-center space-x-2"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <button
              type="submit"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Complete Profile</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </form>
      );

    case 4:
      return (
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle
              className="h-12 w-12 text-green-600"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-display-md font-bold text-slate-900 mb-4">
            Welcome to the Network!
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            You're now part of our talent network. We'll match you with relevant
            opportunities and notify you about upcoming hiring events in your
            field.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-slate-900 mb-2">
              What happens next:
            </h3>
            <ul className="text-slate-700 space-y-1 text-left">
              <li>• We'll review your profile and qualifications</li>
              <li>• You'll receive invitations to relevant hiring events</li>
              <li>• Get matched with employers in your industry</li>
              <li>• Connect directly with hiring managers</li>
            </ul>
          </div>

          <p className="text-sm text-slate-700">
            Keep an eye on your inbox! We'll send you event invitations and job
            matches soon.
          </p>
        </div>
      );

    default:
      return null;
  }
};

export default GetStartedPage;
