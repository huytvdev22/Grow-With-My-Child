import { addDays, subDays, subMonths, subYears } from 'date-fns';

export const childProfile = {
  name: 'Leo',
  birthDate: subYears(new Date(), 2).toISOString(), // 2 years old
  photo: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
  coverPhoto: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1600',
};

export const timelineEvents = [
  {
    id: '1',
    title: 'First Smile',
    date: subMonths(new Date(), 22).toISOString(),
    description: 'Leo smiled for the first time today! It was the most beautiful thing I have ever seen.',
    photo: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'First Word',
    date: subMonths(new Date(), 14).toISOString(),
    description: 'He said "Mama" today. My heart melted.',
    photo: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'First Steps',
    date: subMonths(new Date(), 10).toISOString(),
    description: 'Leo took his first 3 steps independently! He was so proud of himself.',
    photo: 'https://images.unsplash.com/photo-1503454537195-1dc534baf3fc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'First Birthday',
    date: subYears(new Date(), 1).toISOString(),
    description: "We celebrated Leo's first birthday with family and friends. He loved the cake!",
    photo: 'https://images.unsplash.com/photo-1530103862676-de8892b12fa0?auto=format&fit=crop&q=80&w=800',
  },
];

export const diaryEntries = [
  {
    id: '1',
    date: subDays(new Date(), 2).toISOString(),
    title: 'A quiet morning',
    content: 'We spent the morning reading books. Leo is really into the dinosaur book right now. He tries to roar like a T-Rex.',
  },
  {
    id: '2',
    date: subDays(new Date(), 5).toISOString(),
    title: 'Park adventure',
    content: 'Took Leo to the new park down the street. He loved the swings but was a bit scared of the big slide. We will try again next time.',
  },
  {
    id: '3',
    date: subDays(new Date(), 12).toISOString(),
    title: 'Sleep regression?',
    content: 'Rough night last night. Woke up 3 times. Hoping it is just a phase or maybe a new tooth coming in.',
  },
  {
    id: '4',
    date: subDays(new Date(), 20).toISOString(),
    title: 'Painting day',
    content: 'We tried finger painting today. It got everywhere, but the joy on his face was worth the cleanup.',
  },
];

export const galleryPhotos = [
  { id: '1', url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800', title: 'Newborn days' },
  { id: '2', url: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=800', title: 'First smile' },
  { id: '3', url: 'https://images.unsplash.com/photo-1503454537195-1dc534baf3fc?auto=format&fit=crop&q=80&w=800', title: 'Park time' },
  { id: '4', url: 'https://images.unsplash.com/photo-1530103862676-de8892b12fa0?auto=format&fit=crop&q=80&w=800', title: 'Birthday cake' },
  { id: '5', url: 'https://images.unsplash.com/photo-1471286174890-9c11241eb988?auto=format&fit=crop&q=80&w=800', title: 'Sleeping peacefully' },
  { id: '6', url: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=800', title: 'Bath time fun' },
  { id: '7', url: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=800', title: 'Playing with blocks' },
  { id: '8', url: 'https://images.unsplash.com/photo-1434389678369-182bf28f494c?auto=format&fit=crop&q=80&w=800', title: 'Beach day' },
];

export const growthData = [
  { month: 0, weight: 3.2, height: 50 },
  { month: 2, weight: 5.1, height: 57 },
  { month: 4, weight: 6.8, height: 63 },
  { month: 6, weight: 7.9, height: 67 },
  { month: 9, weight: 8.9, height: 71 },
  { month: 12, weight: 9.8, height: 75 },
  { month: 18, weight: 11.2, height: 81 },
  { month: 24, weight: 12.5, height: 87 },
];

export const futureLetters = [
  {
    id: '1',
    title: 'Open when you turn 18',
    dateWritten: subYears(new Date(), 1).toISOString(),
    openDate: addDays(new Date(childProfile.birthDate), 18 * 365).toISOString(),
    content: 'My dearest Leo, if you are reading this, you are 18 years old. I cannot believe how fast time has flown. I want you to know how incredibly proud I am of the person you have become...',
    isOpened: false,
  },
  {
    id: '2',
    title: 'For your graduation day',
    dateWritten: subMonths(new Date(), 6).toISOString(),
    openDate: addDays(new Date(childProfile.birthDate), 22 * 365).toISOString(),
    content: 'Congratulations on your graduation! All your hard work has paid off...',
    isOpened: false,
  },
  {
    id: '3',
    title: 'A letter for a rainy day',
    dateWritten: subDays(new Date(), 10).toISOString(),
    openDate: new Date().toISOString(), // Can open now
    content: 'Sometimes life gets tough, and that is okay. I want you to remember that you are loved unconditionally. Take a deep breath, and know that tomorrow is a new day.',
    isOpened: true,
  },
];
