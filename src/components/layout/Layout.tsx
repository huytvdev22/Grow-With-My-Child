import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { motion } from 'motion/react';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-stone-900 selection:bg-orange-100 selection:text-orange-900">
      <Sidebar />
      <main className="pl-64">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mx-auto max-w-5xl p-8 lg:p-12"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
