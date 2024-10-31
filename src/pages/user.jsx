

const users = [
  {
    name: "Eubera Jackson",
    email: "eubera@simpmle.xm",
    function: "Manager Organization",
    status: "Online",
    date: "15/03/21",
  },
  {
    name: "Alexa Liras",
    email: "alexa@simpmle.xm",
    function: "Programmer Developer",
    status: "Offline",
    date: "15/03/21",
  },
  {
    name: "Lawrent Micheal",
    email: "lawrent@simpmle.xm",
    function: "Executive Projects",
    status: "Online",
    date: "15/03/21",
  },
  {
    name: "Freedrick Hill",
    email: "freedrick@simpmle.xm",
    function: "Manager Organization",
    status: "Online",
    date: "15/03/21",
  },
  {
    name: "Daniel Thomas",
    email: "daniel@simpmle.xm",
    function: "Programmer Developer",
    status: "Offline",
    date: "15/03/21",
  },
  {
    name: "Mark Wilson",
    email: "mark@simpmle.xm",
    function: "Designer UI/UX Design",
    status: "Offline",
    date: "15/03/21",
  },
];

const User = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Main Content */}
        <div className="w-4/5 p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Authors User</h2>
          <div className="mt-6 bg-white shadow rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                    Author
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                    Function
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                    Imported
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-4 px-4 text-sm text-gray-800">
                      {user.name} <br />
                      <span className="text-xs text-gray-500">
                        {user.email}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-800">
                      {user.function}
                    </td>
                    <td className="py-4 px-4 text-sm">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-white ${
                          user.status === "Online"
                            ? "bg-green-500"
                            : "bg-gray-400"
                        }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-800">
                      {user.date}
                    </td>
                    <td className="py-4 px-4 text-sm text-blue-600 cursor-pointer hover:underline">
                      Edit
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

export default User;
