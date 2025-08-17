import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkipToContent from "./components/common/SkipToContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
// import SocialProof from './components/SocialProof';
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import EmployerPage from "./pages/EmployerPage";
import JobSeekerPage from "./pages/JobSeekerPage";
import GetStartedPage from "./pages/GetStartedPage";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <SkipToContent />
          <Header />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/employers" element={<EmployerPage />} />
              <Route path="/job-seekers" element={<JobSeekerPage />} />
              <Route path="/get-started" element={<GetStartedPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingChat />
          {/* <SocialProof /> */}
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
