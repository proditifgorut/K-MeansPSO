import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Target, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Database,
      title: 'Pengumpulan Data',
      description: 'Mengumpulkan data epidemiologi penyakit menular dari berbagai sumber terpercaya termasuk jumlah kasus, lokasi geografis, dan faktor demografis.',
    },
    {
      icon: Cpu,
      title: 'K-Means Clustering',
      description: 'Mengelompokkan daerah berdasarkan karakteristik penyebaran penyakit menggunakan algoritma K-Means untuk membentuk cluster awal.',
    },
    {
      icon: Target,
      title: 'Optimasi PSO',
      description: 'Mengoptimalkan posisi centroid cluster menggunakan Particle Swarm Optimization untuk meningkatkan akurasi dan konvergensi.',
    },
    {
      icon: TrendingUp,
      title: 'Analisis & Hasil',
      description: 'Menghasilkan visualisasi zona endemik, rekomendasi intervensi, dan laporan analisis komprehensif untuk pengambilan keputusan.',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cara Kerja Sistem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proses analisis yang sistematis dan teroptimasi untuk hasil yang akurat
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 relative">
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-blue-50 px-6 py-3 rounded-full">
            <p className="text-blue-700 font-medium">
              💡 Proses lengkap dapat diselesaikan dalam hitungan menit
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
