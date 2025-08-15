import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setError(null); // Clear previous errors

    try {
      // --- START: REFACTORED SECTION ---

      // 1. Define the new, specific API endpoint
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/contact-us`;

      // 2. Call your Next.js backend with only the raw form data
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // The body is now much simpler and more secure
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      // --- END: REFACTORED SECTION ---

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to send message. Please try again later."
        );
      }

      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        // Reset all state after the component closes
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 3000); // Wait 3 seconds before closing
    } catch (err: any) {
      console.error("Chat submission error:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of your JSX remains the same
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brandBlue hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 focus-visible"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl border w-80 h-auto">
          {" "}
          {/* Changed to h-auto */}
          <div className="flex items-center justify-between p-4 border-b bg-brandBlue text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span className="font-semibold">Live Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-blue-700 rounded focus-visible"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {!submitted ? (
                <>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-slate-700">
                      Hi! Have a question? Fill out the form below and we'll get
                      back to you.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-brandBlue"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-brandBlue"
                      required
                    />
                    <textarea
                      placeholder="How can we help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-brandBlue resize-none"
                      required
                    />
                    {error && <p className="text-red-500 text-xs">{error}</p>}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 bg-brandBlue text-white rounded-md hover:bg-blue-700 text-sm focus-visible disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="bg-green-50 p-3 rounded-lg text-center h-64 flex flex-col justify-center">
                  <p className="text-sm text-green-800 font-semibold mb-2">
                    Message Sent!
                  </p>
                  <p className="text-sm text-green-700">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;
