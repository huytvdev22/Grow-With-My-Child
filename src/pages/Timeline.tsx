import { timelineEvents } from '../data/mockData';
import { format } from 'date-fns';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function Timeline() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 pb-24">
      <header className="text-center">
        <h1 className="font-serif text-5xl font-medium tracking-tight text-stone-900">
          The Journey
        </h1>
        <p className="mt-4 text-lg text-stone-500">
          Every step, every smile, every milestone.
        </p>
      </header>

      <div className="relative mt-16">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-[27px] top-0 w-px bg-stone-200 sm:left-1/2 sm:-ml-px" />

        <div className="space-y-16">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`relative flex items-center justify-between sm:w-full ${
                  isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#FDFBF7] bg-orange-100 shadow-sm sm:left-1/2 sm:-ml-7">
                  <div className="h-4 w-4 rounded-full bg-orange-500" />
                </div>

                {/* Content */}
                <div className={`w-full pl-20 sm:w-[calc(50%-3rem)] sm:pl-0 ${
                  isEven ? 'sm:text-left' : 'sm:text-right'
                }`}>
                  <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200/50 transition-all hover:shadow-md">
                    <div className="mb-4 flex items-center gap-2 text-sm font-medium text-orange-600 sm:justify-start">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(event.date), 'MMMM d, yyyy')}
                    </div>
                    
                    <h3 className="mb-3 font-serif text-2xl font-medium text-stone-900">
                      {event.title}
                    </h3>
                    
                    <p className="mb-6 leading-relaxed text-stone-600">
                      {event.description}
                    </p>

                    {event.photo && (
                      <div className="relative aspect-video overflow-hidden rounded-2xl bg-stone-100">
                        <img
                          src={event.photo}
                          alt={event.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
