import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, MapPinned, LineChart } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500K+',
      label: 'Data Pasien Dianalisis',
      description: 'Setiap bulan',
    },
    {
      icon: Building2,
      value: '150+',
      label: 'Institusi Kesehatan',
      description: 'Menggunakan sistem kami',
    },
    {
      icon: MapPinned,
      value: '34',
      label: 'Provinsi Tercakup',
      description: 'Di seluruh Indonesia',
    },
    {
      icon: LineChart,
      value: '95%',
      label: 'Tingkat Akurasi',
      description: 'Dalam prediksi zona endemik',
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dipercaya oleh Profesional Kesehatan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Statistik penggunaan dan dampak sistem kami dalam pengendalian penyakit menular
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Waktu Respons Rata-rata', value: '< 2 menit' },
            { label: 'Uptime Sistem', value: '99.9%' },
            { label: 'Rating Kepuasan', value: '4.9/5.0' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
