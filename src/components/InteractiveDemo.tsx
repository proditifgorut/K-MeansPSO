import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { Play, RefreshCw, Download, Info } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [clusterData, setClusterData] = useState(generateClusterData());

  function generateClusterData() {
    const clusters = [
      { name: 'Risiko Tinggi', color: '#ef4444', count: Math.floor(Math.random() * 20 + 10) },
      { name: 'Risiko Sedang', color: '#f59e0b', count: Math.floor(Math.random() * 30 + 20) },
      { name: 'Risiko Rendah', color: '#10b981', count: Math.floor(Math.random() * 40 + 30) },
    ];

    const scatter = clusters.flatMap((cluster, idx) =>
      Array.from({ length: cluster.count }, () => [
        Math.random() * 100,
        Math.random() * 100,
        idx,
      ])
    );

    return { clusters, scatter };
  }

  const handleRunSimulation = () => {
    setIsRunning(true);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setIteration(count);
      setClusterData(generateClusterData());
      if (count >= 10) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 500);
  };

  const handleReset = () => {
    setIteration(0);
    setClusterData(generateClusterData());
  };

  const scatterOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        const clusterNames = ['Risiko Tinggi', 'Risiko Sedang', 'Risiko Rendah'];
        return `${clusterNames[params.value[2]]}<br/>Lokasi: (${params.value[0].toFixed(2)}, ${params.value[1].toFixed(2)})`;
      },
    },
    xAxis: {
      type: 'value',
      name: 'Longitude',
      nameLocation: 'middle',
      nameGap: 30,
      splitLine: { show: true, lineStyle: { color: '#e5e7eb' } },
    },
    yAxis: {
      type: 'value',
      name: 'Latitude',
      nameLocation: 'middle',
      nameGap: 40,
      splitLine: { show: true, lineStyle: { color: '#e5e7eb' } },
    },
    series: [
      {
        name: 'Risiko Tinggi',
        type: 'scatter',
        data: clusterData.scatter.filter((d) => d[2] === 0),
        symbolSize: 12,
        itemStyle: { color: '#ef4444' },
      },
      {
        name: 'Risiko Sedang',
        type: 'scatter',
        data: clusterData.scatter.filter((d) => d[2] === 1),
        symbolSize: 12,
        itemStyle: { color: '#f59e0b' },
      },
      {
        name: 'Risiko Rendah',
        type: 'scatter',
        data: clusterData.scatter.filter((d) => d[2] === 2),
        symbolSize: 12,
        itemStyle: { color: '#10b981' },
      },
    ],
  };

  const pieOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} daerah ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'middle',
    },
    series: [
      {
        name: 'Distribusi Cluster',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          formatter: '{b}\n{d}%',
        },
        data: clusterData.clusters.map((c) => ({
          value: c.count,
          name: c.name,
          itemStyle: { color: c.color },
        })),
      },
    ],
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Demo Interaktif
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat bagaimana algoritma K-Means PSO bekerja dalam mengidentifikasi zona endemik
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Visualisasi Cluster</h3>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Info className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  Iterasi: {iteration}/10
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <ReactECharts option={scatterOption} style={{ height: '400px' }} />
            </div>
            <div className="flex gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRunSimulation}
                disabled={isRunning}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  isRunning
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                }`}
              >
                <Play className="w-5 h-5" />
                {isRunning ? 'Memproses...' : 'Jalankan Simulasi'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Reset
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Distribusi Cluster</h3>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <ReactECharts option={pieOption} style={{ height: '300px' }} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-600" />
                Statistik Analisis
              </h4>
              <div className="space-y-3">
                {clusterData.clusters.map((cluster, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: cluster.color }}
                      ></div>
                      <span className="text-gray-700 font-medium">{cluster.name}</span>
                    </div>
                    <span className="text-gray-900 font-bold">{cluster.count} daerah</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Total Daerah</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {clusterData.clusters.reduce((sum, c) => sum + c.count, 0)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
