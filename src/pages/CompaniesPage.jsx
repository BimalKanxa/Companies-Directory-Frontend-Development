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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Companies Directory</h1>

      <Filters
        filters={filters}
        setFilters={setFilters}
        locations={locations}
        industries={industries}
      />

      {loading ? (
        <p className="mt-6 text-gray-600">Loading companies...</p>
      ) : filters.view === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {companies.map((c) => (
            <CompanyCard key={c.id} c={c} />
          ))}
        </div>
      ) : (
        <CompanyTable companies={companies} />
      )}

      <Pagination
        page={filters.page}
        total={total}
        perPage={filters.perPage}
        setFilters={setFilters}
      />
    </div>
  );
};

export default CompaniesPage;
