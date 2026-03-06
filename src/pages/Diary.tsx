import { useState } from 'react';
import { format } from 'date-fns';
import { diaryEntries } from '../data/mockData';
import { Input } from '../components/ui/Input';
import { Search, PenLine } from 'lucide-react';
import { motion } from 'motion/react';

export function Diary() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEntries = diaryEntries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-24 sm:space-y-12">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
            Parent's Diary
          </h1>
          <p className="mt-2 text-base text-stone-500 sm:text-lg">
            Daily thoughts, little moments, and big feelings.
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <Input
            type="text"
            placeholder="Search entries..."
            className="pl-10 rounded-full bg-white/50 focus:bg-white transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-full min-h-[200px] flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-stone-300 bg-stone-50/50 p-6 text-stone-500 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 sm:min-h-[240px] sm:p-8"
        >
          <div className="rounded-full bg-white p-4 shadow-sm ring-1 ring-stone-200/50">
            <PenLine className="h-6 w-6" />
          </div>
          <span className="font-medium">Write a new entry</span>
        </motion.button>

        {filteredEntries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200/50 transition-all hover:-translate-y-1 hover:shadow-md sm:p-8"
          >
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-orange-50 opacity-0 transition-opacity group-hover:opacity-100 sm:h-32 sm:w-32" />
            
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2 text-xs font-medium text-orange-600 sm:text-sm">
                {format(new Date(entry.date), 'EEEE, MMMM d')}
              </div>
              <h3 className="mb-3 font-serif text-xl font-medium leading-tight text-stone-900 sm:mb-4 sm:text-2xl">
                {entry.title}
              </h3>
              <p className="line-clamp-4 text-sm leading-relaxed text-stone-600 sm:text-base">
                {entry.content}
              </p>
            </div>
            
            <div className="relative z-10 mt-6 flex items-center justify-between border-t border-stone-100 pt-4 text-xs text-stone-400 sm:mt-8 sm:text-sm">
              <span>{format(new Date(entry.date), 'h:mm a')}</span>
              <button className="font-medium text-orange-600 opacity-0 transition-opacity group-hover:opacity-100">
                Read more &rarr;
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center sm:py-24">
          <div className="mb-4 rounded-full bg-stone-100 p-4">
            <Search className="h-8 w-8 text-stone-400" />
          </div>
          <h3 className="font-serif text-xl font-medium text-stone-900">No entries found</h3>
          <p className="mt-2 text-stone-500">Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  );
}
