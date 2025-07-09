import Counter from '@/components/Counter';

const impactData = [
  { target: 5400, title: 'Players Covered', description: 'Registered rugby players enjoying our insurance benefits', suffix: '+' },
  { target: 78, title: 'Medical Cases', description: 'Injuries and medical issues successfully treated' },
  { target: 15, title: 'Partner Clinics', description: 'Medical facilities across Uganda accepting our coverage' },
  { target: 100, title: 'Player Satisfaction', description: 'Of surveyed players recommend our program', suffix: '%' },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item, index) => (
            <div key={index} className="bg-card rounded-xl shadow-lg p-8 text-center transition duration-500 hover:shadow-2xl hover:-translate-y-2">
              <Counter 
                target={item.target} 
                suffix={item.suffix}
                className="text-primary text-5xl font-bold mb-4" 
              />
              <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
              <p className="text-muted-foreground font-body">{item.description}</p>
              <div className="mt-4 h-1 w-16 bg-accent mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
