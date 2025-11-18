
// import Filters from "../components/filters/Filters";
// import CompanyCard from "../components/company/CompanyCard";
// import CompanyTable from "../components/company/CompanyTable";
// import Pagination from "../components/company/Pagination";
// import { useCompanies } from "../hooks/useCompanies";
// import Navbar from "../components/layout/Navbar";

// const CompaniesPage = () => {
//   const { loading, filters, setFilters, companies, total } = useCompanies();

//   const locations = ["Bengaluru", "Mumbai", "San Francisco", "Berlin"];
//   const industries = ["Media", "AI", "Sustainability", "Fintech"];

//   return (
//     <div className="min-h-screen  bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#57534e] via-[#a8a29e] to-[#e7e5e4] py-10">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Header Section */}
//         <div className="flex flex-col items-center text-center mb-10">
        
//           <Navbar/>
//         </div>

//         {/* Filters Box */}
//         <div className="mb-8 transform hover:scale-[1.01] transition-all duration-300">
//           <Filters
//             filters={filters}
//             setFilters={setFilters}
//             locations={locations}
//             industries={industries}
//           />
//         </div>

//         {/* Content */}
//         {loading ? (
//           <div className="flex justify-center py-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-60" />
//           </div>
//         ) : filters.view === "cards" ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {companies.map((c) => (
//               <div
//                 key={c.id}
//                 className="transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
//               >
//                 <CompanyCard c={c} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="rounded-xl overflow-hidden shadow-lg bg-white">
//             <CompanyTable companies={companies} />
//           </div>
//         )}

//         {/* Pagination */}
//         <div className="flex justify-center mt-10">
//           <Pagination
//             page={filters.page}
//             total={total}
//             perPage={filters.perPage}
//             setFilters={setFilters}
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CompaniesPage;



import React from 'react';
import { useCompanies } from "../hooks/useCompanies";
import Navbar from "../components/layout/Navbar";
import Filters from "../components/filters/Filters";
import CompanyCard from "../components/company/CompanyCard";
import CompanyTable from "../components/company/CompanyTable";
import Pagination from "../components/company/Pagination";
import { Building2, TrendingUp, Globe, Sparkles } from 'lucide-react';

const CompaniesPage = () => {
  const { loading, filters, setFilters, companies, total } = useCompanies();

  const locations = ["Bengaluru", "Mumbai", "San Francisco", "Berlin", "Guwahati"];
  const industries = ["Media", "AI", "Sustainability", "Fintech", "Healthcare"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Header Section */}
          <div className="text-center mb-16 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
              <div className="flex items-center justify-center space-x-2 opacity-60">
                <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse animation-delay-300" />
                <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse animation-delay-700" />
              </div>
            </div>

            {/* Main Title */}
            <div className="inline-flex items-center justify-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-black">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  Companies
                </span>
                <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-gray-700 to-gray-900 text-transparent bg-clip-text">
                  Directory
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Discover and explore innovative companies from around the world. 
              <span className="font-semibold text-indigo-600"> Filter, search, and connect</span> with industry leaders.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <div className="text-left">
                    <p className="text-2xl font-bold text-gray-900">{total}+</p>
                    <p className="text-xs text-gray-600">Companies</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <div className="text-left">
                    <p className="text-2xl font-bold text-gray-900">{industries.length}+</p>
                    <p className="text-xs text-gray-600">Industries</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-purple-600" />
                  <div className="text-left">
                    <p className="text-2xl font-bold text-gray-900">{locations.length}+</p>
                    <p className="text-xs text-gray-600">Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="mb-10">
            <div className="transform hover:scale-[1.005] transition-all duration-300">
              <Filters
                filters={filters}
                setFilters={setFilters}
                locations={locations}
                industries={industries}
              />
            </div>
          </div>

          {/* Content Section */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="relative">
                <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-600"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Building2 className="w-8 h-8 text-blue-600 animate-pulse" />
                </div>
              </div>
              <p className="mt-6 text-gray-600 font-medium animate-pulse">Loading companies...</p>
            </div>
          ) : companies.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <Building2 className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No companies found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results</p>
            </div>
          ) : filters.view === "cards" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {companies.map((c, index) => (
                <div
                  key={c.id}
                  className="group transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    opacity: 0
                  }}
                >
                  <CompanyCard c={c} />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm border border-white/20 animate-fadeIn">
              <CompanyTable companies={companies} />
            </div>
          )}

          {/* Pagination */}
          {!loading && companies.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-2 border border-white/20">
                <Pagination
                  page={filters.page}
                  total={total}
                  perPage={filters.perPage}
                  setFilters={setFilters}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CompaniesPage;