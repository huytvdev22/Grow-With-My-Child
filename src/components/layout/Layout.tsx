import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-stone-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-stone-200 bg-white/80 px-4 backdrop-blur-md md:hidden">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
            <span className="font-serif text-lg font-bold">G</span>
          </div>
          <span className="font-serif text-lg font-semibold tracking-tight text-stone-800">
            Grow With My Child
          </span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="rounded-lg p-2 text-stone-600 hover:bg-stone-100"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-stone-900/20 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl md:hidden"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute right-4 top-4 z-50 rounded-lg p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-600"
              >
                <X className="h-6 w-6" />
              </button>
              <Sidebar className="h-full w-full border-none" onClick={() => setIsMobileMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <Sidebar className="fixed inset-y-0 left-0 z-50 hidden md:block" />

      {/* Main Content */}
      <main className="md:pl-64">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mx-auto max-w-5xl p-4 sm:p-8 lg:p-12"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
