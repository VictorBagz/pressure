import Counter from '@/components/Counter';

const impactData = [
  { target: 5400, title: 'Active Rugby Players', description: '', suffix: '+' },
  { target: 75, title: 'Suffer minor and major Injuries Annually', description: '',suffix: '%' },
  { target: 99.7, title: 'Uninsured Players', description: '', suffix: '%' },
  { target: 648, title: 'Annual Medical Budget', description: '', suffix: 'M' },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-secondary my-1">
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
