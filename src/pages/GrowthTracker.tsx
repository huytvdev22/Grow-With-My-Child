import { growthData } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'motion/react';
import { Ruler, Scale } from 'lucide-react';

export function GrowthTracker() {
  return (
    <div className="space-y-8 pb-24 sm:space-y-12">
      <header>
        <h1 className="font-serif text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
          Growth Tracker
        </h1>
        <p className="mt-2 text-base text-stone-500 sm:text-lg">
          Watching them grow, one inch at a time.
        </p>
      </header>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="overflow-hidden border-stone-200/60 bg-white shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-stone-500">Current Weight</CardTitle>
              <div className="rounded-full bg-orange-50 p-2 text-orange-600">
                <Scale className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
                {growthData[growthData.length - 1].weight} <span className="text-lg text-stone-400 sm:text-xl">kg</span>
              </div>
              <p className="mt-1 text-xs text-stone-500">
                +1.3kg from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="overflow-hidden border-stone-200/60 bg-white shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-stone-500">Current Height</CardTitle>
              <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                <Ruler className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
                {growthData[growthData.length - 1].height} <span className="text-lg text-stone-400 sm:text-xl">cm</span>
              </div>
              <p className="mt-1 text-xs text-stone-500">
                +2cm from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card className="border-stone-200/60 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-xl font-medium sm:text-2xl">Weight Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    tickFormatter={(value) => `${value}m`}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    tickFormatter={(value) => `${value}kg`}
                  />
                  <Tooltip
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`${value} kg`, 'Weight']}
                    labelFormatter={(label) => `Month ${label}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#f97316"
                    strokeWidth={3}
                    dot={{ r: 4, fill: '#f97316', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Card className="border-stone-200/60 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-xl font-medium sm:text-2xl">Height Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    tickFormatter={(value) => `${value}m`}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    tickFormatter={(value) => `${value}cm`}
                  />
                  <Tooltip
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`${value} cm`, 'Height']}
                    labelFormatter={(label) => `Month ${label}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="height"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
