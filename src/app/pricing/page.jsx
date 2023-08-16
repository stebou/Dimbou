import React from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex flex-col justify-center items-center py-10">
      <div className="flex items-start space-x-10 w-full max-w-6xl">
        <div className="bg-white border-emerald-500 border-2 rounded-lg shadow-lg p-8 w-1/2">
          <h1 className="text-2xl font-bold mb-4">Pricing plans that scale with you</h1>
          <p className="mb-6">
            Build, preview, and go live for free today. And as you expand, choose one of our scalable pricing plans to move faster and fuel sustainable growth.
          </p>
          <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Start building for free</h2>
            <p className="mb-4">
              Build custom pages, edit existing pages, and publish to your site faster than ever.
            </p>
            <div className="text-4xl font-bold mb-4">$0</div>
            <p>space/mo</p>
          </div>
          <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg mb-6 hover:bg-emerald-600 transition-colors duration-300">
            Get started free
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          <img src="/hero.png" alt="Hero" className="h-full w-full object-cover mb-4" />
          <div className="grid grid-cols-2 gap-4">
            <FeatureItem text="Up to 10 Users" />
            <FeatureItem text="10K monthly visual views" />
            <FeatureItem text="Drag and drop visual editor" />
            <FeatureItem text="Template library" />
            <FeatureItem text="Import from Figma" />
            <FeatureItem text="Headless CMS" />
            <FeatureItem text="Unlimited content models" />
            <FeatureItem text="Unlimited content entries" />
            <FeatureItem text="Unlimited API Requests" />
            <FeatureItem text="Unlimited data sources" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center space-x-2 mb-2">
        <svg className="h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <span className="text-indigo-500">{text}</span>
      </div>
  );
}
