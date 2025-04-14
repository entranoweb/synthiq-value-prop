import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, LineChart, Line } from 'recharts';

const ValuePropositionDashboard = () => {
  // Data for call handling capacity comparison
  const callHandlingData = [
    { name: 'Traditional', capacity: 3, fill: '#8884d8' },
    { name: 'AI Voice Agent', capacity: 10, fill: '#82ca9d' },
  ];

  // Data for call abandonment rate
  const abandonmentData = [
    { name: 'Traditional', rate: 20, fill: '#FF8042' },
    { name: 'AI Voice Agent', rate: 5, fill: '#82ca9d' },
  ];

  // Data for staff allocation
  const traditionalStaffData = [
    { name: 'Call Handling', value: 70, fill: '#0088FE' },
    { name: 'Core Operations', value: 30, fill: '#00C49F' },
  ];

  const aiStaffData = [
    { name: 'Call Handling', value: 20, fill: '#0088FE' },
    { name: 'Core Operations', value: 80, fill: '#00C49F' },
  ];

  // Data for monthly operational costs
  const costProjectionData = [
    { month: 'Month 1', traditional: 5000, ai: 3500 },
    { month: 'Month 2', traditional: 5100, ai: 3400 },
    { month: 'Month 3', traditional: 5200, ai: 3300 },
    { month: 'Month 4', traditional: 5300, ai: 3200 },
    { month: 'Month 5', traditional: 5400, ai: 3100 },
    { month: 'Month 6', traditional: 5500, ai: 3000 },
  ];

  // Feature comparison data
  const features = [
    { feature: 'Concurrent Calls', traditional: '2-3', ai: '10+' },
    { feature: 'Availability', traditional: 'Business Hours', ai: '24/7' },
    { feature: 'Response Time', traditional: 'Variable', ai: 'Instant' },
    { feature: 'API Integration', traditional: 'Manual', ai: 'Automated' },
    { feature: 'Scalability', traditional: 'Limited', ai: 'High' },
    { feature: 'Analytics', traditional: 'Basic', ai: 'Advanced' },
  ];

  // ROI timeline data
  const roiData = [
    { month: 1, value: -7500 },
    { month: 2, value: -5500 },
    { month: 3, value: -3500 },
    { month: 4, value: -1500 },
    { month: 5, value: 500 },
    { month: 6, value: 2500 },
    { month: 7, value: 4500 },
    { month: 8, value: 6500 },
    { month: 9, value: 8500 },
    { month: 10, value: 10500 },
    { month: 11, value: 12500 },
    { month: 12, value: 14500 },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto p-4 sm:p-6 md:p-8 bg-white">
      {/* Header with Logo */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 sm:gap-0">
        <div className="flex items-center justify-center sm:justify-start">
          {/* Using a simple text-based logo representation since the SVG approach isn't working */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-2">
              <div className="absolute w-10 h-10 bg-blue-500 rounded-lg transform rotate-12 opacity-80"></div>
              <div className="absolute w-10 h-10 bg-cyan-400 rounded-lg transform -rotate-12 translate-x-2 translate-y-1 opacity-80"></div>
              <div className="absolute top-2 left-2 w-6 h-6 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-blue-600 text-2xl sm:text-3xl font-bold">Synthiq</span>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 text-center sm:text-left">FastDrop AI Voice Agent Value Proposition</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
        {/* Concurrent Call Capacity */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">Concurrent Call Capacity</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={callHandlingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{fontSize: 14}} />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip />
              <Legend wrapperStyle={{fontSize: 12, marginTop: 10}} />
              <Bar dataKey="capacity" fill="#4F46E5" name="Calls" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm sm:text-base text-gray-600 mt-4 font-medium">AI Voice Agent can handle 3x more concurrent calls than traditional systems.</p>
        </div>

        {/* Call Abandonment Rate */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">Call Abandonment Rate (%)</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={abandonmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{fontSize: 14}} />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip />
              <Legend wrapperStyle={{fontSize: 12, marginTop: 10}} />
              <Bar dataKey="rate" fill="#F97316" name="Abandonment %" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm sm:text-base text-gray-600 mt-4 font-medium">AI Voice Agent reduces call abandonment rate from 20% to approximately 5%.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
        {/* Staff Allocation Comparison */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">Staff Resource Allocation</h2>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="w-full sm:w-1/2 sm:pr-4 mb-4 sm:mb-0">
              <p className="text-center font-medium text-base sm:text-lg mb-2">Traditional</p>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie 
                    data={traditionalStaffData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={70} 
                    label
                    labelLine={true}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-4">
              <p className="text-center font-medium text-base sm:text-lg mb-2">With AI Voice Agent</p>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie 
                    data={aiStaffData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={70} 
                    label
                    labelLine={true}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-4 font-medium">AI Voice Agent frees up staff from handling calls to focus on high-value core operations.</p>
        </div>

        {/* Cost Projection Comparison */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">Cost Projection (6 Months)</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={costProjectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{fontSize: 12}} />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip />
              <Legend wrapperStyle={{fontSize: 12, marginTop: 10}} />
              <Line type="monotone" dataKey="traditional" stroke="#8B5CF6" strokeWidth={2} name="Traditional" />
              <Line type="monotone" dataKey="ai" stroke="#10B981" strokeWidth={2} name="AI Voice Agent" />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm sm:text-base text-gray-600 mt-4 font-medium">AI Voice Agent significantly reduces operational costs over time.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
        {/* Feature Comparison */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow text-xs sm:text-base border-collapse border border-gray-300">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-3 px-3 sm:px-6 border-b border-gray-300 text-left text-base sm:text-lg font-semibold text-gray-700">Feature</th>
                  <th className="py-3 px-3 sm:px-6 border-b border-gray-300 text-center text-base sm:text-lg font-semibold text-gray-700">Traditional</th>
                  <th className="py-3 px-3 sm:px-6 border-b border-gray-300 text-center text-base sm:text-lg font-semibold text-blue-700">AI Voice Agent</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-3 sm:px-6 border border-gray-300 font-medium">{item.feature}</td>
                    <td className="py-3 px-3 sm:px-6 border border-gray-300 text-center">{item.traditional}</td>
                    <td className="py-3 px-3 sm:px-6 border border-gray-300 text-center font-medium text-green-600">{item.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ROI Timeline */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">ROI Timeline (12 Months)</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={roiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tick={{fontSize: 12}}
                label={{ value: 'Month', position: 'insideBottom', offset: -5, fontSize: 12 }} 
              />
              <YAxis 
                tick={{fontSize: 12}}
                label={{ value: 'ROI (€)', angle: -90, position: 'insideLeft', fontSize: 12, dy: 40 }} 
              />
              <Tooltip formatter={(value) => [`€${value}`, 'ROI']} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2563EB" 
                strokeWidth={2}
                dot={{ r: 4, fill: '#2563EB' }} 
                name="ROI (€)" 
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm sm:text-base text-gray-600 mt-4 font-medium">Break-even in Month 5, with continuous ROI growth afterward.</p>
          <p className="text-xs text-gray-500 mt-2 italic">* ROI calculations are speculative/illustrative rather than definitive.</p>
        </div>
      </div>

      {/* Key Business Benefits */}
      <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-lg border border-blue-100 mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-blue-800 text-center">Key Business Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
            <div className="flex items-center mb-3">
              {/* Efficiency Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <h3 className="font-semibold text-lg sm:text-xl text-blue-700">Operational Efficiency</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700">Reduce manual call handling by 75%, allowing staff to focus on core warehouse operations</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
            <div className="flex items-center mb-3">
              {/* Customer Experience Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <h3 className="font-semibold text-lg sm:text-xl text-blue-700">Enhanced Customer Experience</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700">Immediate response to inquiries with consistent accuracy and 24/7 availability</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
            <div className="flex items-center mb-3">
              {/* Scalability Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
              <h3 className="font-semibold text-lg sm:text-xl text-blue-700">Scalable Solution</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700">Easily expand capacity for peak periods and future growth across all FastDrop services</p>
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-lg border border-blue-100">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-blue-800 text-center">Implementation Timeline</h2>
        
        {/* Mobile Timeline (visible only on small screens) */}
        <div className="block sm:hidden">
          <div className="space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mr-4">1</div>
              <div>
                <p className="font-medium text-base text-gray-800">Week 1</p>
                <p className="text-sm text-gray-600">Kickoff</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mr-4">2</div>
              <div>
                <p className="font-medium text-base text-gray-800">Week 2</p>
                <p className="text-sm text-gray-600">Setup</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mr-4">3</div>
              <div>
                <p className="font-medium text-base text-gray-800">Week 3-4</p>
                <p className="text-sm text-gray-600">Testing</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mr-4">4</div>
              <div>
                <p className="font-medium text-base text-gray-800">Week 5</p>
                <p className="text-sm text-gray-600">QA</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mr-4">5</div>
              <div>
                <p className="font-medium text-base text-gray-800">Week 6</p>
                <p className="text-sm text-gray-600">Launch</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Timeline (hidden on small screens) */}
        <div className="hidden sm:block max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12 relative">
            {/* Timeline bar */}
            <div className="absolute w-full h-3 bg-gray-200 top-4 left-0 rounded-full"></div>
            <div className="absolute h-3 bg-blue-600 top-4 left-0 rounded-full" style={{ width: '100%' }}></div>
            
            {/* Timeline points */}
            <div className="relative z-10 flex-1 flex flex-col items-center min-w-[70px]">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mb-4">1</div>
              <p className="font-medium text-base sm:text-lg text-gray-800">Week 1</p>
              <p className="text-sm sm:text-base text-gray-600 text-center">Kickoff</p>
            </div>
            <div className="relative z-10 flex-1 flex flex-col items-center min-w-[70px]">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mb-4">2</div>
              <p className="font-medium text-base sm:text-lg text-gray-800">Week 2</p>
              <p className="text-sm sm:text-base text-gray-600 text-center">Setup</p>
            </div>
            <div className="relative z-10 flex-1 flex flex-col items-center min-w-[70px]">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mb-4">3</div>
              <p className="font-medium text-base sm:text-lg text-gray-800">Week 3-4</p>
              <p className="text-sm sm:text-base text-gray-600 text-center">Testing</p>
            </div>
            <div className="relative z-10 flex-1 flex flex-col items-center min-w-[70px]">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mb-4">4</div>
              <p className="font-medium text-base sm:text-lg text-gray-800">Week 5</p>
              <p className="text-sm sm:text-base text-gray-600 text-center">QA</p>
            </div>
            <div className="relative z-10 flex-1 flex flex-col items-center min-w-[70px]">
              <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold mb-4">5</div>
              <p className="font-medium text-base sm:text-lg text-gray-800">Week 6</p>
              <p className="text-sm sm:text-base text-gray-600 text-center">Launch</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-2 text-blue-800 font-medium text-base sm:text-lg">Rapid 6-week deployment to meet FastDrop's growing TEMU package volume</div>
      </div>

      {/* Footer with Synthiq Branding */}
      <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">&copy; 2025 Synthiq - AI Solutions for Business</div>
        <div className="text-xs sm:text-sm text-blue-600 font-medium text-center sm:text-left">Contact: sahil@synthiq.io | www.synthiq.io</div>
      </div>
    </div>
  );
};

export default ValuePropositionDashboard;