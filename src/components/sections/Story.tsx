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
                <h2 className="text-3xl font-bold text-center text-primary mb-16">Our story</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image 
                            src="/photos/legendK.jpeg" 
                            alt="Rugby players planning" 
                            width={800}
                            height={600}
                            className="rounded-xl shadow-lg w-[70%] mx-auto grayscale"
                            data-ai-hint="rugby players"
                        />
                    </div>
                    
                    <div className="space-y-8">
                        {storyPoints.map((point, index) => (
                             <div key={index} id={point.title === 'The Impact' ? 'story-impact' : undefined}>
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
