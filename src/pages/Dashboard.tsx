import { formatDistanceToNow } from 'date-fns';
import { childProfile, timelineEvents, diaryEntries } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Plus, Heart, Calendar } from 'lucide-react';

export function Dashboard() {
  const age = formatDistanceToNow(new Date(childProfile.birthDate));

  return (
    <div className="space-y-12">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-900">
            Welcome back, Mama
          </h1>
          <p className="mt-2 text-lg text-stone-500">
            Here's what's happening in {childProfile.name}'s world.
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            <Plus className="mr-2 h-4 w-4" />
            Add Memory
          </Button>
        </div>
      </header>

      <div className="relative overflow-hidden rounded-[2rem] bg-stone-100 shadow-sm ring-1 ring-stone-200/50">
        <div className="absolute inset-0">
          <img
            src={childProfile.coverPhoto}
            alt="Cover"
            className="h-full w-full object-cover opacity-60 mix-blend-multiply grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
        </div>
        
        <div className="relative flex items-end gap-6 p-8 pt-48 sm:p-12">
          <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white/20 bg-white shadow-xl backdrop-blur-sm">
            <img
              src={childProfile.photo}
              alt={childProfile.name}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="pb-2 text-white">
            <h2 className="font-serif text-5xl font-semibold tracking-tight">
              {childProfile.name}
            </h2>
            <div className="mt-3 flex items-center gap-4 text-white/80">
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-md">
                <Heart className="h-4 w-4 text-orange-400" />
                {age} old
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-md">
                <Calendar className="h-4 w-4" />
                Born {new Date(childProfile.birthDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-2xl font-medium text-stone-800">Recent Milestones</h3>
              <Button variant="ghost" className="text-orange-600 hover:text-orange-700">View all</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {timelineEvents.slice(0, 2).map((event) => (
                <Card key={event.id} className="group overflow-hidden border-stone-200/60 bg-white/50 transition-all hover:bg-white hover:shadow-md">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={event.photo}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardHeader className="p-5">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-orange-500">
                      {new Date(event.date).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
                    </div>
                    <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-medium text-stone-800">Today in History</h3>
            </div>
            <Card className="overflow-hidden border-orange-200/60 bg-gradient-to-br from-orange-50 to-orange-100/50">
              <CardContent className="flex items-center gap-6 p-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm">
                  <Calendar className="h-8 w-8" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-medium text-orange-600">1 year ago today</div>
                  <h4 className="font-serif text-xl font-medium text-stone-900">First Birthday</h4>
                  <p className="mt-1 text-sm text-stone-600">We celebrated Leo's first birthday with family and friends. He loved the cake!</p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-2xl font-medium text-stone-800">Latest Diary</h3>
              <Button variant="ghost" size="icon" className="text-stone-400 hover:text-stone-600">
                <Plus className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-4">
              {diaryEntries.slice(0, 3).map((entry) => (
                <Card key={entry.id} className="border-stone-200/60 bg-[#FDFBF7] transition-colors hover:bg-white">
                  <CardHeader className="p-5 pb-3">
                    <div className="mb-1 text-xs font-medium text-stone-400">
                      {new Date(entry.date).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
                    </div>
                    <CardTitle className="text-base font-medium">{entry.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <p className="line-clamp-2 text-sm text-stone-500 leading-relaxed">
                      {entry.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
