import { useEffect, useMemo, useState } from "react";
import { fetchCompanies } from "../api/companiesApi";

export const useCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    location: "",
    industry: "",
    sort: "name_asc",
    page: 1,
    perPage: 6,
  });

  useEffect(() => {
    fetchCompanies()
      .then((res) => setCompanies(res))
      .finally(() => setLoading(false));
  }, []);

  const filteredCompanies = useMemo(() => {
    let list = [...companies];

    // Search
    if (filters.search) {
      list = list.filter(c =>
        c.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Location filter
    if (filters.location) {
      list = list.filter(c => c.location === filters.location);
    }

    // Industry filter
    if (filters.industry) {
      list = list.filter(c => c.industry === filters.industry);
    }

    // Sorting
    if (filters.sort === "name_asc") list.sort((a,b)=>a.name.localeCompare(b.name));
    if (filters.sort === "name_desc") list.sort((a,b)=>b.name.localeCompare(a.name));

    if (filters.sort === "employees_asc") list.sort((a,b)=>a.employees - b.employees);
    if (filters.sort === "employees_desc") list.sort((a,b)=>b.employees - a.employees);

    return list;
  }, [companies, filters]);

  // Pagination
  const start = (filters.page - 1) * filters.perPage;
  const paginatedCompanies = filteredCompanies.slice(start, start + filters.perPage);

  return {
    loading,
    filters,
    setFilters,
    companies: paginatedCompanies,
    total: filteredCompanies.length,
  };
};
