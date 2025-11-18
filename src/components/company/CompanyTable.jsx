const CompanyTable = ({ companies }) => (
  <table className="w-full bg-white rounded shadow mt-4">
    <thead className="bg-gray-100">
      <tr>
        <th className="p-2 text-left">Name</th>
        <th className="p-2 text-left">Industry</th>
        <th className="p-2 text-left">Location</th>
        <th className="p-2 text-left">Employees</th>
        <th className="p-2 text-left">Website</th>
      </tr>
    </thead>

    <tbody>
      {companies.map((c) => (
        <tr key={c.id} className="border-t">
          <td className="p-2">{c.name}</td>
          <td className="p-2">{c.industry}</td>
          <td className="p-2">{c.location}</td>
          <td className="p-2">{c.employees}</td>
          <td className="p-2">
            <a href={c.website} className="text-blue-600 underline text-sm">
              Visit
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CompanyTable;
