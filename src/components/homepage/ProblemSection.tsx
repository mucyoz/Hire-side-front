import React from "react";
import { AlertCircle, Clock, FileX, Users, Target, Zap } from "lucide-react";
import Section from "../common/Section";

const ProblemSection: React.FC = () => {
  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <h2 className="text-display-md font-bold text-slate-900 mb-4">
          The Problem We Solve
        </h2>
        <p className="text-xl text-slate-700 max-w-3xl mx-auto">
          Traditional hiring creates lose-lose scenarios. Communities suffer
          when critical roles go unfilled.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Employer Problems */}
        <div className="animate-slide-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertCircle
                className="h-8 w-8 text-red-600"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-display-sm font-bold text-slate-900 mb-2">
              Employer Frustrations
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <Clock
                className="h-6 w-6 text-red-500 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Lost Productivity Daily
                </h4>
                <p className="text-slate-700">
                  Critical roles unfilled for 44+ days on average
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <FileX
                className="h-6 w-6 text-red-500 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  High Costs, Unqualified Candidates
                </h4>
                <p className="text-slate-700">
                  Sifting through hundreds of irrelevant applications
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <Users
                className="h-6 w-6 text-red-500 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Expensive Turnover Cycle
                </h4>
                <p className="text-slate-700">
                  Poor matches quit within 90 days, restarting the process
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Seeker Problems */}
        <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Target className="h-8 w-8 text-red-600" aria-hidden="true" />
            </div>
            <h3 className="text-display-sm font-bold text-slate-900 mb-2">
              Job Seeker Struggles
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <FileX
                className="h-6 w-6 text-red-500 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Dehumanizing Algorithms
                </h4>
                <p className="text-slate-700">
                  Résumés disappear into ATS black holes forever
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <Clock
                className="h-6 w-6 text-red-500 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Endless, Silent Waiting
                </h4>
                <p className="text-slate-700">
                  Months without responses, even for perfect matches
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <Zap
                className="h-6 w-6 text-red-500 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <h4 className="font-semibold text-slate-900">
                  Overqualified, Overlooked
                </h4>
                <p className="text-slate-700">
                  Perfect candidates rejected by broken systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Ticker */}
      <div className="bg-slate-700 text-white rounded-lg p-6 text-center">
        <div className="flex items-center justify-center space-x-4">
          <AlertCircle className="h-6 w-6 animate-pulse" aria-hidden="true" />
          <p className="text-lg font-semibold">
            Communities suffer when critical roles go unfilled • Open positions
            cost <span className="text-yellow-300">$500+ daily</span> in lost
            productivity
          </p>
          <AlertCircle className="h-6 w-6 animate-pulse" aria-hidden="true" />
        </div>
      </div>
    </Section>
  );
};

export default ProblemSection;
