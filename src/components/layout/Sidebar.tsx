import { NavLink } from 'react-router-dom';
import { Home, Clock, BookOpen, Image as ImageIcon, LineChart, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Timeline', href: '/timeline', icon: Clock },
  { name: 'Diary', href: '/diary', icon: BookOpen },
  { name: 'Gallery', href: '/gallery', icon: ImageIcon },
  { name: 'Growth Tracker', href: '/growth', icon: LineChart },
  { name: 'Letters', href: '/letters', icon: Mail },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-stone-200 bg-stone-50/50 backdrop-blur-xl">
      <div className="flex h-full flex-col gap-6 p-6">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
            <span className="font-serif text-xl font-bold">G</span>
          </div>
          <span className="font-serif text-lg font-semibold tracking-tight text-stone-800">
            Grow With My Child
          </span>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-white text-orange-600 shadow-sm ring-1 ring-stone-200/50'
                    : 'text-stone-600 hover:bg-stone-100/80 hover:text-stone-900'
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="rounded-2xl bg-orange-50 p-4 text-center">
          <p className="font-serif text-sm italic text-orange-800">
            "Every small moment today becomes a beautiful memory tomorrow."
          </p>
        </div>
      </div>
    </aside>
  );
}
