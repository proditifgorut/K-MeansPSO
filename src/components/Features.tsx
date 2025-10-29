import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Shield, BarChart3, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'K-Means Clustering',
      description: 'Algoritma clustering yang powerful untuk mengelompokkan daerah berdasarkan tingkat endemik penyakit',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'PSO Optimization',
      description: 'Particle Swarm Optimization meningkatkan akurasi dan kecepatan konvergensi algoritma',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Target,
      title: 'Akurasi Tinggi',
      description: 'Identifikasi zona endemik dengan presisi hingga 95% melalui optimasi berkelanjutan',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Shield,
      title: 'Data Terpercaya',
      description: 'Analisis berbasis data epidemiologi terkini dan terverifikasi dari berbagai sumber',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'Visualisasi Interaktif',
      description: 'Dashboard analitik dengan grafik dan peta interaktif untuk pemahaman yang lebih baik',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Globe,
      title: 'Cakupan Luas',
      description: 'Mampu menganalisis data dari berbagai wilayah geografis dengan skala yang berbeda',
      color: 'from-cyan-500 to-cyan-600',
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
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teknologi terdepan untuk identifikasi dan analisis daerah endemik penyakit menular
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl" 
                   style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
