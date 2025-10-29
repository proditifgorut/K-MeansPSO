import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, AlertTriangle, Award } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Akurasi Prediksi Meningkat',
      description: 'PSO optimization meningkatkan akurasi clustering hingga 95% dibanding K-Means standar',
      stat: '+35%',
      color: 'bg-blue-500',
    },
    {
      icon: Clock,
      title: 'Waktu Analisis Lebih Cepat',
      description: 'Proses analisis data kompleks dapat diselesaikan dalam hitungan menit',
      stat: '3x Faster',
      color: 'bg-purple-500',
    },
    {
      icon: DollarSign,
      title: 'Efisiensi Biaya',
      description: 'Alokasi sumber daya kesehatan lebih tepat sasaran berdasarkan zona prioritas',
      stat: '-45%',
      color: 'bg-green-500',
    },
    {
      icon: Users,
      title: 'Jangkauan Lebih Luas',
      description: 'Mampu menganalisis data dari ratusan ribu titik geografis sekaligus',
      stat: '100K+',
      color: 'bg-orange-500',
    },
    {
      icon: AlertTriangle,
      title: 'Deteksi Dini',
      description: 'Identifikasi pola penyebaran penyakit sejak tahap awal untuk tindakan preventif',
      stat: 'Early Warning',
      color: 'bg-red-500',
    },
    {
      icon: Award,
      title: 'Standar Internasional',
      description: 'Mengikuti protokol WHO dan standar epidemiologi internasional',
      stat: 'WHO Standard',
      color: 'bg-cyan-500',
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
            Manfaat & Keunggulan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi komprehensif untuk pengelolaan dan pencegahan penyakit menular
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl ${benefit.color} mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {benefit.stat}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Meningkatkan Sistem Kesehatan Anda?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Bergabunglah dengan ratusan institusi kesehatan yang telah menggunakan teknologi kami
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Mulai Konsultasi Gratis
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
