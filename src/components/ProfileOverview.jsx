import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, MoreVertical } from 'lucide-react';
import personimage from "../assets/personal-dummy.png"
import { useNavigate } from 'react-router-dom';
export default function ProfileOverview() {
    const navigate = useNavigate();
    
      const goToDashboard = () => {
        navigate('/');
      };
  const [activeTab, setActiveTab] = useState('Overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = ['Overview', 'Portfolio', 'Experience', 'Media'];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header - Desktop */}
      <header className="hidden md:flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
              <div className="text-black transform rotate-180">▼</div>
            </div>
            <span className="ml-2 font-semibold">Vertxlabs, Inc</span>
            <button className="px-5 py-2 text-white ml-10 font-bold ">Profile</button>
          </div>
        </div>
        <div className="flex items-center">
         
          <button className="px-5 py-2 text-white">Activity</button>
          <button className="ml-4 px-6 py-2 text-white">Log out</button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden flex justify-between items-center px-4 py-4">
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="text-white transform rotate-180">▼</div>
        </div>
        <div className="w-8 h-8">
          <MoreVertical size={24} />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex flex-col w-48 border-r border-gray-800">
          <div className="flex flex-col py-4 space-y-6 px-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute -right-1 bottom-1 w-3 h-3 bg-green-500 rounded-full border border-black"></div>
              </div>
              <span  onClick={goToDashboard} className="text-gray-300 cursor-pointer">Dashboard</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute -right-1 bottom-1 w-3 h-3 bg-green-500 rounded-full border border-black"></div>
              </div>
              <span className="text-gray-300">Analytics</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute -right-1 bottom-1 w-3 h-3 bg-orange-500 rounded-full border border-black"></div>
              </div>
              <span className="text-gray-300">Connect</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-300 ml-11">Dealroom</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-300 ml-11">Profile</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-300 ml-11">Settings</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="border-b border-gray-800">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-500 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="md:block hidden ml-auto px-6 py-4">
                <button className="text-gray-400">More</button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 md:p-8">
            <h1 className="text-2xl font-semibold mb-6">Overview</h1>

            {/* Profile Card */}
            <div className="bg-gray-900 w-[100%] rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row items-start md:items-start">
                <div className="w-24 h-24 bg-black rounded-lg mb-4 md:mb-0 md:mr-6">
                  <img src={personimage} className='rounded-lg' alt="" />
                </div>
                
                <div className="flex flex-col items-center md:items-start">
                  
                  <div>
                  <div className="flex items-center mb-1">
                    <h2 className="text-xl font-semibold mr-2">Mr.ABC</h2>
                    <CheckCircle size={20} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-300 mb-2">Co-Founder & CEO @ Vertx <span className="ml-1 p-1 bg-black rounded text-xs">↗</span></p>
                 
                  </div>
                  <div className='gap-1 flex md:flex-col items-center justify-between' >
                  <div className="bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded mb-4">
                    Entrepreneur
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-blue-600 flex items-center justify-center rounded">
                      <span className="text-white font-bold">in</span>
                    </div>
                    <div className="w-6 h-6 bg-black flex items-center justify-center rounded">
                      <span className="text-white font-bold">𝕏</span>
                    </div>
                    <div className="w-6 h-6 bg-red-500 flex items-center justify-center rounded">
                      <span className="text-white">M</span>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Two Column Layout - on larger screens */}
            <div className="flex flex-col md:flex-row md:space-x-6">
              {/* Founded Companies */}
              <div className="bg-gray-900 rounded-lg p-6 mb-6 md:mb-0 md:w-1/2">
                <h3 className="text-lg font-semibold mb-4">Founded Companies</h3>
                <div className="flex items-center mb-8">
                  <span className="text-5xl font-bold">02</span>
                </div>

                {/* Company 1 */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded mr-3">
                      <div className="text-white transform rotate-180 text-xs">▼</div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">Vertx</span>
                        <span className="ml-2 text-xs bg-green-600 text-white px-1 rounded">NEW</span>
                      </div>
                      <p className="text-xs text-gray-400">Founded in 2025, in Fintech</p>
                    </div>
                  </div>
                  <button className="text-xs text-gray-400">View Profile</button>
                </div>

                {/* Company 2 */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded mr-3"></div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">Comp 1</span>
                        <span className="ml-2 text-xs bg-purple-600 text-white px-1 rounded">ACQUIRED</span>
                      </div>
                      <p className="text-xs text-gray-400">Founded in 2023, Acquired by abc in QuickCommerce</p>
                    </div>
                  </div>
                  <button className="text-xs text-gray-400">View Profile</button>
                </div>
              </div>

              {/* Experience - only visible on desktop */}
              <div className="hidden md:block bg-gray-900 rounded-lg p-6 md:w-1/2">
                <h3 className="text-lg font-semibold mb-4">Experience</h3>
                <div className="flex items-center mb-8">
                  <span className="text-5xl font-bold">03</span>
                </div>

                {/* Company 1 */}
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded mr-3"></div>
                    <span className="font-medium">Company 1</span>
                  </div>
                  <button className="text-xs text-gray-400">View Profile</button>
                </div>

                {/* Company 2 */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded mr-3"></div>
                    <span className="font-medium">Company 2</span>
                  </div>
                  <button className="text-xs text-gray-400">View Profile</button>
                </div>

                {/* Company 3 */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded mr-3"></div>
                    <span className="font-medium">Company 3</span>
                  </div>
                  <button className="text-xs text-gray-400">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Footer Navigation */}
      <footer className="md:hidden flex justify-around items-center border-t border-gray-800 py-4">
        <button className="flex flex-col items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-lg">□</span>
          </div>
          <span className="text-xs mt-1">Dashboard</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-lg">📈</span>
          </div>
          <span className="text-xs mt-1">Analytics</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-lg">👥</span>
          </div>
          <span className="text-xs mt-1">Connect</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-lg">🔔</span>
          </div>
          <span className="text-xs mt-1">Activity</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-lg">⚙️</span>
          </div>
          <span className="text-xs mt-1">Dealroom</span>
        </button>
      </footer>
    </div>
  );
}