
export const newsData = [
  {
    image: '/photos/action2.jpeg',
    aiHint: 'rugby team huddle',
    category: 'Tournament',
    title: 'Pirates Clinch National Sevens Title in Thrilling Final',
    excerpt: 'The Pirates defeated the Heathens in a nail-biting final to be crowned champions of the National Sevens Series.',
    date: 'June 30, 2025',
    link: '#',
  },
  {
    image: '/photos/minet.jpeg',
    aiHint: 'charity event handshake',
    category: 'Community',
    title: 'Foundation Partners with Local Schools for Youth Clinic',
    excerpt: 'We successfully hosted a rugby clinic for over 200 children, promoting the sport and its values.',
    date: 'June 15, 2025',
    link: '#',
  },
  {
    image: '/photos/wokos.jpeg',
    aiHint: 'player signing autograph',
    category: 'Player Spotlight',
    title: 'Rising Star: A Conversation with Adrian Kasito',
    excerpt: 'We sat down with the Kobs scrum-half to discuss his journey, ambitions, and player welfare.',
    date: 'July 11, 2025',
    link: '#',
  },
   {
    image: '/photos/jjuko.jpeg',
    aiHint: 'rugby player action',
    category: 'Fundraiser',
    title: 'Annual Fundraising Gala Exceeds Expectations',
    excerpt: 'Thanks to our generous donors, we raised a record amount to support player insurance for the next season.',
    date: 'September 10, 2024',
    link: '#',
  },
];

export type NewsItem = typeof newsData[0];
