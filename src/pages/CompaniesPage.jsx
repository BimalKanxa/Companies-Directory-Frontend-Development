// import Filters from "../components/filters/Filters";
// import CompanyCard from "../components/company/CompanyCard";
// import CompanyTable from "../components/company/CompanyTable";
// import Pagination from "../components/company/Pagination";
// import { useCompanies } from "../hooks/useCompanies";

// const CompaniesPage = () => {
//   const { loading, filters, setFilters, companies, total } = useCompanies();

//   const locations = ["Bengaluru", "Mumbai", "San Francisco", "Berlin"];
//   const industries = ["Media", "AI", "Sustainability", "Fintech"];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Companies Directory</h1>

//       <Filters
//         filters={filters}
//         setFilters={setFilters}
//         locations={locations}
//         industries={industries}
//       />

//       {loading ? (
//         <p className="mt-6 text-gray-600">Loading companies...</p>
//       ) : filters.view === "cards" ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//           {companies.map((c) => (
//             <CompanyCard key={c.id} c={c} />
//           ))}
//         </div>
//       ) : (
//         <CompanyTable companies={companies} />
//       )}

//       <Pagination
//         page={filters.page}
//         total={total}
//         perPage={filters.perPage}
//         setFilters={setFilters}
//       />
//     </div>
//   );
// };

// export default CompaniesPage;



import Filters from "../components/filters/Filters";
import CompanyCard from "../components/company/CompanyCard";
import CompanyTable from "../components/company/CompanyTable";
import Pagination from "../components/company/Pagination";
import { useCompanies } from "../hooks/useCompanies";

const CompaniesPage = () => {
  const { loading, filters, setFilters, companies, total } = useCompanies();

  const locations = ["Bengaluru", "Mumbai", "San Francisco", "Berlin"];
  const industries = ["Media", "AI", "Sustainability", "Fintech"];

  return (
    <div className="min-h-screen  bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#57534e] via-[#a8a29e] to-[#e7e5e4] py-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text drop-shadow-sm">
            Companies Directory
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl">
            Browse and filter companies based on location, industry & more.
          </p>
        </div>

        {/* Filters Box */}
        <div className="mb-8 transform hover:scale-[1.01] transition-all duration-300">
          <Filters
            filters={filters}
            setFilters={setFilters}
            locations={locations}
            industries={industries}
          />
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-60" />
          </div>
        ) : filters.view === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {companies.map((c) => (
              <div
                key={c.id}
                className="transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                <CompanyCard c={c} />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <CompanyTable companies={companies} />
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <Pagination
            page={filters.page}
            total={total}
            perPage={filters.perPage}
            setFilters={setFilters}
          />
        </div>

      </div>
    </div>
  );
};

export default CompaniesPage;
