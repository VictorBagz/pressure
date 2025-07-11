
export type NewsItem = {
    image: string;
    aiHint: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    link: string;
    slug: string;
    content: string;
};

// This file is now primarily for defining the type.
// The actual data is fetched from Firestore.
// You can remove the static data array if you wish, or keep it for reference.

export const newsData: NewsItem[] = [
  {
    image: '/photos/action2.jpeg',
    aiHint: 'rugby team huddle',
    category: 'Tournament',
    title: 'Pirates Clinch National Sevens Title in Thrilling Final',
    excerpt: 'The Pirates defeated the Heathens in a nail-biting final to be crowned champions of the National Sevens Series.',
    date: 'June 30, 2025',
    link: '/news/pirates-clinch-title',
    slug: 'pirates-clinch-title',
    content: `In a spectacular conclusion to the National Sevens Series, the Pirates emerged victorious after a hard-fought battle against their rivals, the Heathens. The final, held at the Kyadondo Rugby Club, was a showcase of skill, determination, and raw power. The Pirates' winning try came in the final minute, sending their supporters into a frenzy and securing their first Sevens title in three years. Team captain Brian Ochan praised the team's resilience, stating, "This victory is a testament to our hard work and the unwavering support of our fans."`
  },
  {
    image: '/photos/minet.jpeg',
    aiHint: 'charity event handshake',
    category: 'Community',
    title: 'Foundation Partners with Local Schools for Youth Clinic',
    excerpt: 'We successfully hosted a rugby clinic for over 200 children, promoting the sport and its values.',
    date: 'June 15, 2025',
    link: '/news/youth-clinic-partnership',
    slug: 'youth-clinic-partnership',
    content: `The Kayondo Ronnie Jr Foundation, in collaboration with several local schools, hosted a highly successful youth rugby clinic last weekend. Over 200 children aged 8-14 participated in drills, games, and mentorship sessions led by national team players. The event aimed to introduce the sport to a new generation, emphasizing teamwork, discipline, and respect. "Seeing the joy on these kids' faces is what it's all about," said a foundation spokesperson. "We're building more than just players; we're building a community."`
  },
  {
    image: '/photos/wokos.jpeg',
    aiHint: 'player signing autograph',
    category: 'Player Spotlight',
    title: 'Rising Star: A Conversation with Adrian Kasito',
    excerpt: 'We sat down with the Kobs scrum-half to discuss his journey, ambitions, and player welfare.',
    date: 'July 11, 2025',
    link: '/news/spotlight-adrian-kasito',
    slug: 'spotlight-adrian-kasito',
    content: `Adrian Kasito, the dynamic scrum-half for the Kobs, is quickly becoming one of the most exciting players to watch in Ugandan rugby. We sat down with him to discuss his journey from a young enthusiast to a national star. Kasito spoke passionately about the importance of player welfare and injury prevention. "The support from foundations like RugbyCare is crucial," he noted. "It gives us the confidence to play our hearts out, knowing we have a safety net. My ambition is to inspire young players and help elevate the sport in our country."`
  },
   {
    image: '/photos/jjuko.jpeg',
    aiHint: 'rugby player action',
    category: 'Fundraiser',
    title: 'Annual Fundraising Gala Exceeds Expectations',
    excerpt: 'Thanks to our generous donors, we raised a record amount to support player insurance for the next season.',
    date: 'September 10, 2024',
    link: '/news/annual-gala-success',
    slug: 'annual-gala-success',
    content: `The annual RugbyCare Fundraising Gala was a resounding success, raising over UGX 200 million to support the Athletes Medical Fund. The event, attended by players, partners, and philanthropists, celebrated the foundation's achievements and outlined its vision for the future. A highlight of the evening was a moving speech by a young player whose career was saved by the fund after a severe injury. "Your generosity doesn't just fund insurance," he said, "it funds dreams." The proceeds will ensure hundreds of players are covered for the upcoming season.`
  },
];
