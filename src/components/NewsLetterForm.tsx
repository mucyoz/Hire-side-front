import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email address is required.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // --- START OF REFACTORED CODE ---

      // 1. Define the new, specific API endpoint
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/newsletter`;

      // 2. Call the backend with only the necessary data (the email)
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // The body is now much simpler!
        body: JSON.stringify({ email: email }),
      });

      // --- END OF REFACTORED CODE ---

      if (!response.ok) {
        // Try to get a specific error message from the backend, or use a default
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Could not subscribe. Please try again."
        );
      }

      setSubmitted(true);
      setEmail("");
    } catch (error: any) {
      console.error("Newsletter submission error:", error);
      setError(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center p-3 bg-green-900 border border-green-700 rounded-md text-white text-sm">
        <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
        <span>Thank you for subscribing!</span>
      </div>
    );
  }

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          aria-label="Email address for newsletter"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-brandBlue hover:bg-blue-700 text-white rounded-r-md transition-colors disabled:opacity-50 flex items-center justify-center w-16"
          aria-label="Subscribe to newsletter"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Mail className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </form>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default NewsletterForm;
