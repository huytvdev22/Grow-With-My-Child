import { useState } from 'react';
import { futureLetters } from '../data/mockData';
import { format, isBefore } from 'date-fns';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, Unlock, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Letters() {
  const [selectedLetter, setSelectedLetter] = useState<typeof futureLetters[0] | null>(null);

  return (
    <div className="space-y-8 pb-24 sm:space-y-12">
      <header>
        <h1 className="font-serif text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
          Letters to the Future
        </h1>
        <p className="mt-2 text-base text-stone-500 sm:text-lg">
          Words of love, sealed until the time is right.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {futureLetters.map((letter, index) => {
          const canOpen = isBefore(new Date(letter.openDate), new Date()) || letter.isOpened;

          return (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => canOpen && setSelectedLetter(letter)}
              className={cn(
                'group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl p-6 shadow-sm ring-1 transition-all hover:-translate-y-1 hover:shadow-md sm:p-8',
                canOpen
                  ? 'bg-orange-50/50 ring-orange-200/50 hover:bg-orange-50'
                  : 'bg-stone-100 ring-stone-200/50 opacity-80 cursor-not-allowed'
              )}
            >
              <div className="absolute -right-4 -top-4 text-orange-100/50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <Mail className="h-24 w-24 sm:h-32 sm:w-32" />
              </div>
              
              <div className="relative z-10">
                <div className={cn(
                  'mb-6 inline-flex items-center justify-center rounded-full p-3 shadow-sm',
                  canOpen ? 'bg-orange-100 text-orange-600' : 'bg-stone-200 text-stone-500'
                )}>
                  {canOpen ? <Unlock className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
                </div>
                
                <h3 className="mb-2 font-serif text-xl font-medium leading-tight text-stone-900 sm:text-2xl">
                  {letter.title}
                </h3>
                
                <div className="space-y-1 text-xs text-stone-500 sm:text-sm">
                  <p>Written: {format(new Date(letter.dateWritten), 'MMM d, yyyy')}</p>
                  <p className={cn('font-medium', canOpen ? 'text-orange-600' : 'text-stone-500')}>
                    Open on: {format(new Date(letter.openDate), 'MMM d, yyyy')}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/40 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[#FDFBF7] p-6 shadow-2xl sm:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute right-4 top-4 rounded-full bg-stone-100 p-2 text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-900 sm:right-6 sm:top-6"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="mb-6 text-center sm:mb-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 sm:h-16 sm:w-16">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h2 className="font-serif text-2xl font-medium text-stone-900 sm:text-3xl">
                  {selectedLetter.title}
                </h2>
                <p className="mt-2 text-xs text-stone-500 sm:text-sm">
                  Written on {format(new Date(selectedLetter.dateWritten), 'MMMM d, yyyy')}
                </p>
              </div>

              <div className="prose prose-stone prose-base mx-auto font-serif leading-relaxed text-stone-700 sm:prose-lg">
                <p className="whitespace-pre-wrap">{selectedLetter.content}</p>
              </div>
              
              <div className="mt-8 text-center font-serif italic text-stone-400 sm:mt-12">
                With all my love.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
