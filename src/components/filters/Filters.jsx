const Filters = ({ filters, setFilters, locations, industries }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow flex flex-wrap gap-4">
      
      <input
        className="border p-2 rounded w-60"
        placeholder="Search by name"
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value, page: 1 })
        }
      />

      <select
        className="border p-2 rounded"
        value={filters.location}
        onChange={(e) =>
          setFilters({ ...filters, location: e.target.value, page: 1 })
        }
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc}>{loc}</option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        value={filters.industry}
        onChange={(e) =>
          setFilters({ ...filters, industry: e.target.value, page: 1 })
        }
      >
        <option value="">All Industries</option>
        {industries.map((ind) => (
          <option key={ind}>{ind}</option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="name_asc">Name ↑</option>
        <option value="name_desc">Name ↓</option>
        <option value="employees_asc">Employees ↑</option>
        <option value="employees_desc">Employees ↓</option>
      </select>

    </div>
  );
};

export default Filters;
