
import React, { useState } from 'react';
import { AppTab } from './types';
import Hero from './components/Hero';
import Planner from './components/Planner';
import Explorer from './components/Explorer';
import LiveGuide from './components/LiveGuide';
import { MapPin, Plane, Compass, Mic, Home as HomeIcon } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Hero onNavigate={(tab) => setActiveTab(tab)} />;
      case AppTab.PLANNER:
        return <Planner />;
      case AppTab.EXPLORER:
        return <Explorer />;
      case AppTab.LIVE_GUIDE:
        return <LiveGuide />;
      default:
        return <Hero onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setActiveTab(AppTab.HOME)}
          >
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <Compass size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-indigo-900">AuraGuide<span className="text-indigo-600">AI</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <button 
              onClick={() => setActiveTab(AppTab.HOME)}
              className={`hover:text-indigo-600 transition ${activeTab === AppTab.HOME ? 'text-indigo-600' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab(AppTab.PLANNER)}
              className={`hover:text-indigo-600 transition ${activeTab === AppTab.PLANNER ? 'text-indigo-600' : ''}`}
            >
              Itinerary
            </button>
            <button 
              onClick={() => setActiveTab(AppTab.EXPLORER)}
              className={`hover:text-indigo-600 transition ${activeTab === AppTab.EXPLORER ? 'text-indigo-600' : ''}`}
            >
              Explorer
            </button>
            <button 
              onClick={() => setActiveTab(AppTab.LIVE_GUIDE)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition flex items-center gap-2"
            >
              <Mic size={18} />
              Live Guide
            </button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex gap-4">
             <button onClick={() => setActiveTab(AppTab.LIVE_GUIDE)} className="p-2 text-indigo-600"><Mic size={24} /></button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>

      {/* Persistent Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass border-t flex justify-around p-3 z-50">
        <button onClick={() => setActiveTab(AppTab.HOME)} className={`flex flex-col items-center ${activeTab === AppTab.HOME ? 'text-indigo-600' : 'text-slate-500'}`}>
          <HomeIcon size={20} />
          <span className="text-xs">Home</span>
        </button>
        <button onClick={() => setActiveTab(AppTab.PLANNER)} className={`flex flex-col items-center ${activeTab === AppTab.PLANNER ? 'text-indigo-600' : 'text-slate-500'}`}>
          <Plane size={20} />
          <span className="text-xs">Plan</span>
        </button>
        <button onClick={() => setActiveTab(AppTab.EXPLORER)} className={`flex flex-col items-center ${activeTab === AppTab.EXPLORER ? 'text-indigo-600' : 'text-slate-500'}`}>
          <MapPin size={20} />
          <span className="text-xs">Explore</span>
        </button>
      </div>
    </div>
  );
};

export default App;
