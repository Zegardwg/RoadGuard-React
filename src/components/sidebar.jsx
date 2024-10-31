import {
  FaHome,
  FaUser,
  FaClipboard,
  FaSignInAlt,
  FaQuestionCircle,
  FaFolder,
  FaChartBar,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen shadow-lg p-6">
      <div className="text-2xl font-bold text-gray-800 mb-8">ROAD GUARD</div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-6">
        <MenuItem icon={<FaHome />} title="Dashboard" />
        <MenuItem icon={<FaChartBar />} title="Monitoring" />
        <MenuItem icon={<FaUser />} title="User" />
        <MenuItem icon={<FaClipboard />} title="Reports" />

        {/* Section Title */}
        <div className="text-gray-600 text-sm mt-6">ACCOUNT PAGES</div>

        <MenuItem icon={<FaFolder />} title="Profile" />
        <MenuItem icon={<FaSignInAlt />} title="Sign In" />
        <MenuItem icon={<FaSignInAlt />} title="Sign Up" />
      </nav>

      {/* Help Button */}
      <div className="mt-auto pt-10">
        <div className="bg-teal-500 text-white p-4 rounded-lg shadow-md text-center">
          <FaQuestionCircle className="mx-auto mb-2 text-xl" />
          <p className="text-sm font-semibold">Butuh bantuan?</p>
          <button className="mt-2 bg-white text-teal-500 px-3 py-1 rounded-full font-bold text-sm">
            DOKUMENTASI
          </button>
        </div>
      </div>
    </div>
  );
}

// Komponen Item Menu Sidebar
const MenuItem = ({ icon, title }) => (
  <div className="flex items-center text-gray-800 text-lg hover:text-teal-500 cursor-pointer">
    <div className="mr-3 text-teal-500">{icon}</div>
    <span>{title}</span>
  </div>
);

export default Sidebar;
