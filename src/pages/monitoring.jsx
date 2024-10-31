

const reports = [
  { route: "jalan madiun - terminal madiun", progress: 60 },
  { route: "jalan madiun - terminal madiun", progress: 10 },
  { route: "jalan madiun - terminal madiun", progress: 100 },
  { route: "jalan madiun - terminal madiun", progress: 10 },
  { route: "jalan madiun - terminal madiun", progress: 50 },
];

const Monitoring = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}


        {/* Main Content */}
        <div className="w-4/5 p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Reports</h2>

          {/* Layar Monitoring Section */}
          <div className="mt-6 bg-black text-white shadow rounded-lg">
            <h3 className="p-4 text-lg font-semibold">Layar Monitoring</h3>
            <div className="relative">
              <img
                src="public/images/about/Yolo.gif" // Placeholder image for map; replace with actual map image or component
                alt="Map"
                className="w-full rounded-b-lg opacity-75"
              />
              {/* Optionally, overlay content can be added here */}
            </div>
          </div>

          {/* Monitoring Section */}
          <div className="mt-6 bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Monitoring Berlubang
            </h3>
            <p className="text-sm text-gray-500 mb-4">38 data this month</p>

            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                    Proses
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                    Berlubang
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                    Tanggal Update
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                    Completion
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600"></th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-4 text-sm text-gray-800">
                      {report.route}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-800">
                      jalan madiun
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-800">
                      terminal madiun
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-800">
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                          <div
                            className="bg-green-500 h-2.5 rounded-full"
                            style={{ width: `${report.progress}%` }}></div>
                        </div>
                        <span className="text-gray-600">
                          {report.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-800 text-blue-600 cursor-pointer hover:underline">
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
