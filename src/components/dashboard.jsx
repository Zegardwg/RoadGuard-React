function Dashboard() {
  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Dashboard</h1>

      {/* Statistik Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Hari" icon="🌞" />
        <StatCard title="Total User" icon="👥" />
        <StatCard title="Laporan" icon="🗂️" />
      </div>

      {/* Konten Utama */}
      <div className="mt-8 p-8 bg-white shadow-lg rounded-lg">
        <p className="text-lg font-semibold text-gray-700">Built by developers</p>
        <h2 className="text-xl font-bold mt-4">ROAD GUARD DASHBOARD</h2>
        <p className="text-gray-500 mt-2">Rules Road Guard</p>
        <div className="mt-6 text-blue-500 cursor-pointer">Baca Lengkap &rarr;</div>
      </div>
    </div>
  );
};

// Komponen Kartu Statistik
const StatCard = ({ title, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-2xl">{icon}</div>
    <h2 className="text-lg font-semibold text-gray-600 mt-2">{title}</h2>
  </div>
);

export default Dashboard;
