import Image from 'next/image';

const storyPoints = [
    { title: "The Challenge", text: "Rugby is a physically demanding sport with high injury risks, yet most players in Uganda lacked proper medical coverage. Many promising athletes had their careers cut short by injuries they couldn't afford to treat properly." },
    { title: "Our Findings", text: "After extensive research in 2018, we discovered 82% of rugby injuries went untreated due to financial constraints. Players averaged 3 serious injuries per season, with recovery times 40% longer than medically recommended." },
    { title: "The Solution", text: "We created Uganda's first rugby-specific medical insurance program, providing comprehensive coverage at affordable rates through group policies and strategic partnerships with healthcare providers." },
    { title: "The Impact", text: "Since launch in 2019, we've reduced untreated injuries by 76%, decreased average recovery times by 35%, and seen a 42% increase in player retention rates across Ugandan rugby clubs." }
]

export default function Story() {
    return (
        <section id="story" className="py-20 bg-card">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-primary mb-16">Our Background Story</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image 
                            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                            alt="Rugby players planning" 
                            width={800}
                            height={600}
                            className="rounded-xl shadow-lg w-full"
                            data-ai-hint="rugby players"
                        />
                    </div>
                    
                    <div className="space-y-8">
                        {storyPoints.map((point, index) => (
                             <div key={index}>
                                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 font-body">{index + 1}</span>
                                    {point.title}
                                </h3>
                                <p className="text-foreground/80 font-body">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
