import Image from 'next/image';

const storyPoints = [
    { title: "Background", text: "In February 2025, Eagles fly-half Ronnie Kayondo suffered a fatal head injury during a match. Lacking insurance, his surgery was delayed, and he passed away. This loss underscores the urgent need for a dedicated medical fund to support to over 5,400 rugby players in case of any injuries while training or participating in a game." },
    { title: "Why the AMF was created", text:"Ronnie Kayondo a fly-half for Eagles Rugby Club suffered a severe head injury during a match on the 8th of February 2025 and was rushed to Kampala Hospital without medical insurance or funds. His surgery was delayed due to lack of immediate payment, and he did not survive. This heartbreaking incident underscores the urgent need for a dedicated medical fund to protect our athletes. Talented athletes often hesitate or withdraw from sport due to fears of unaffordable medical care." },
    { title: "The Challenge", text: "Our foundation is facing a significant challenge in providing medical coverage to these athletes, who are exposed to the risk of injuries and lack access to medical insurance, making it challenging for them to perform on pitch and also also afford quality medical care. The estimated cost of medical insurance for each athlete is UGX 120,000 per year, totaling UGX 648,000,000 annually for all 5400 athletes. Unfortunately, many of these athletes come from economically disadvantaged backgrounds, and their families are unable to bear the financial burden of medical expenses." },
    { title: "Our Goal", text: "Is to fundraise UGX 648,000,000 to provide high quality medical care and support for over 5,400 rugby players across all levels starting from schools to professional. That means we require UGX 120,000 per athlete per year. This support will ensure all players receive timely medical attention to perform at their best and stay safe on the field. Most of these rugby players cannot afford insurance or costly medical expenses when injuries occur, leaving them and their families under severe financial strain" },
    { title: "The Impact", text: "With your financial support, we would be able to provide insurance coverage and medical support to these athletes, ensuring they receive the necessary treatment and support to pursue their sporting endeavors." }
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
                            alt="Ronnie Kayondo Jr., the inspiration for the Athletes Medical Fund Uganda" 
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
