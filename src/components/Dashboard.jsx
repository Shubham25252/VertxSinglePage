import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChevronRight, ArrowRight, Menu, MoreVertical, Plus, ChevronDown } from 'lucide-react';
import personalimage from "../assets/personal-dummy.png"
import { useNavigate } from 'react-router-dom';
const chartData = [
  { name: 'Mar 1', value: 400 },
  { name: 'Mar 5', value: 800 },
  { name: 'Mar 10', value: 1200 },
  { name: 'Mar 15', value: 900 },
  { name: 'Mar 20', value: 1400 },
  { name: 'Mar 25', value: 1000 },
  { name: 'Mar 30', value: 1200 },
];

const countryData = [
  { name: 'India', flag: '🇮🇳', percentage: 40 },
  { name: 'USA', flag: '🇺🇸', percentage: 25 },
  { name: 'CANADA', flag: '🇨🇦', percentage: 10 },
  { name: 'UAE', flag: '🇦🇪', percentage: 7 },
];

export default function Dashboard() {
    const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/Profile');
  };
  const [activeTab, setActiveTab] = useState('Overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Top Navigation - Desktop */}
      <div className="hidden md:flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-2">
              <div className="bg-black rounded-full w-4 h-4 flex items-center justify-center">
                <div className="h-1 w-2 bg-white"></div>
              </div>
            </div>
            <span className="font-bold">Vertxlabs, Inc</span>
          </div>
          <div className="ml-8">
            <span className="text-white">Analytics</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>Activity</span>
          <span>Log out</span>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <img src="/api/placeholder/40/40" alt="Profile" className="rounded-full" />
          <div className="bg-white rounded-full p-2">
            <div className="bg-black rounded-full w-4 h-4 flex items-center justify-center">
              <div className="h-1 w-2 bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MoreVertical size={20} />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Desktop Only */}
        <div className="hidden md:flex flex-col w-64 border-r border-gray-800">
          <div className="p-4 flex items-center gap-3">
            <img src={personalimage} alt="Profile" className="rounded-full h-5" />
            <span className="text-gray-400  cursor-not-allowed ">Dashboard</span>
          </div>
          <div className="p-4 bg-gray-900 flex items-center gap-3">
            <span>Analytics</span>
          </div>
          <div className="p-4 flex items-center gap-3">
            <span className="text-gray-400 cursor-not-allowed ">Connect</span>
          </div>
          <div className="p-4 flex items-center gap-3">
            <span className="text-gray-400 cursor-not-allowed">Dealroom</span>
          </div>
          <div className="p-4 flex items-center gap-3">
            <span onClick={goToProfile} className="text-gray-400 cursor-pointer">Profile</span>
          </div>
          <div className="p-4 flex items-center gap-3">
            <span className="text-gray-400 cursor-not-allowed">Settings</span>
          </div>
          <div className="mt-auto p-4">
            <button className="text-white text-2xl">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-800">
            <button
              className={`px-4 py-3 font-medium ${activeTab === 'Overview' ? 'border-b-2 border-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('Overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-3 font-medium ${activeTab === 'Demographics' ? 'border-b-2 border-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('Demographics')}
            >
              Demographics
            </button>
            <div className="ml-auto hidden md:block px-4 py-3">
              <span>More</span>
            </div>
          </div>

          {/* Overview Section */}
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Overview</h1>

            {/* Visitors Chart */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span>Visitors</span>
                  <ChevronDown size={16} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Last 30 days</span>
                  <ChevronDown size={16} />
                  <button className="ml-2 text-sm bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                    <Plus size={12} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline">
                  <h2 className="text-3xl font-bold">13.49K</h2>
                  <span className="ml-2 text-green-400 text-sm">+489%</span>
                </div>
                <span className="text-gray-400 text-xs">(891)</span>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <YAxis 
                      domain={['dataMin', 'dataMax']} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                      width={30}
                    />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#FFFFFF" 
                      strokeWidth={2} 
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Insights Section */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Insights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Founders</div>
                  <div className="flex items-baseline">
                    <h3 className="text-2xl font-bold">7.4K</h3>
                    <span className="ml-2 text-green-400 text-sm">+000%</span>
                  </div>
                  <span className="text-gray-400 text-xs">(000)</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Investors</div>
                  <div className="flex items-baseline">
                    <h3 className="text-2xl font-bold">6.09K</h3>
                    <span className="ml-2 text-green-400 text-sm">+000%</span>
                  </div>
                  <span className="text-gray-400 text-xs">(000)</span>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="text-sm flex items-center gap-1 text-white">
                  <span>View detailed insights</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Demographics Section */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Demographics</h2>
              <div className="mb-6">
                <div className="w-full bg-gray-800 rounded-lg mb-6">
                  <img src="/api/placeholder/800/300" alt="World Map" className="w-full opacity-60" />
                </div>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">India</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                    <span className="text-sm">USA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm">CANADA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-sm">UAE</span>
                  </div>
                </div>
              </div>

              {/* Country List */}
              <div className="space-y-4">
                {countryData.map((country) => (
                  <div key={country.name} className="flex items-center">
                    <div className="w-8 text-xl">{country.flag}</div>
                    <div className="flex-1 mx-2">{country.name}</div>
                    <div className="w-8 text-right">{country.percentage}%</div>
                    <div className="w-full max-w-48 ml-4">
                      <div className="bg-gray-800 h-2 rounded-full w-full">
                        <div 
                          className={`h-full rounded-full ${
                            country.name === 'India' ? 'bg-blue-500' : 
                            country.name === 'USA' ? 'bg-orange-500' : 
                            country.name === 'CANADA' ? 'bg-yellow-500' : 'bg-green-500'
                          }`} 
                          style={{ width: `${country.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <button className="text-sm flex items-center gap-1 text-white">
                  <span>View all countries</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden flex items-center justify-around p-4 border-t border-gray-800">
        <button className="flex flex-col items-center text-xs text-gray-400">
          <div className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Dashboard</span>
        </button>
        <button className="flex flex-col items-center text-xs text-white">
          <div className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Analytics</span>
        </button>
        <button className="flex flex-col items-center text-xs text-gray-400">
          <div className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5286 20 9.13504 19.6916 7.9154 19.1413L3 20L4.3303 15.6089C3.46756 14.4191 3 13.0444 3 12C3 7.58172 7.02944 4 12 4C16.97 4 21 7.58172 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Connect</span>
        </button>
        <button className="flex flex-col items-center text-xs text-gray-400">
          <div className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Activity</span>
        </button>
        <button className="flex flex-col items-center text-xs text-gray-400">
          <div className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}