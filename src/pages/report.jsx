import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const Report = () => {
  // Data untuk grafik
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Jumlah Laporan",
        data: [30, 50, 45, 60, 70, 55, 40, 45, 65, 70, 80, 90],
        fill: true,
        backgroundColor: "rgba(72, 207, 173, 0.2)",
        borderColor: "rgba(72, 207, 173, 1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Reports</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">Monitoring Lubang</h3>
        <Line data={data} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Monitoring Berlubang</h3>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="border-b">
              <th className="py-2">Lokasi</th>
              <th className="py-2">Keterangan</th>
              <th className="py-2">Tingkat Kepadatan</th>
              <th className="py-2">Completion</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                lokasi: "Jalan Madiun - Terminal Madiun",
                keterangan: "Lubang sedang",
                kepadatan: "Sedang",
                completion: "60%",
              },
              {
                lokasi: "Jalan Madiun - Terminal Madiun",
                keterangan: "Lubang kecil",
                kepadatan: "Tinggi",
                completion: "80%",
              },
              {
                lokasi: "Jalan Madiun - Terminal Madiun",
                keterangan: "Lubang besar",
                kepadatan: "Rendah",
                completion: "100%",
              },
            ].map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.lokasi}</td>
                <td className="py-2">{item.keterangan}</td>
                <td className="py-2">{item.kepadatan}</td>
                <td className="py-2">
                  <div className="w-full bg-gray-200 h-2 rounded-lg">
                    <div
                      className="h-2 rounded-lg"
                      style={{
                        width: item.completion,
                        backgroundColor: "rgba(72, 207, 173, 1)",
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-500">
                    {item.completion}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
