const CompanyCard = ({ c }) => (
  <div className="border p-4 rounded shadow bg-white">
    <h2 className="font-semibold text-lg">{c.name}</h2>
    <p className="text-sm mt-1">{c.location} • {c.industry}</p>
    <p className="text-sm mt-1">Employees: {c.employees}</p>

    <a
      href={c.website}
      target="_blank"
      className="text-blue-600 text-sm underline mt-2 inline-block"
    >
      Visit Website
    </a>
  </div>
);

export default CompanyCard;
