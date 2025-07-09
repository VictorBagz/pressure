export default function Video() {
  return (
    <section id="video" className="py-20 bg-primary/95 text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ronnie Kayondo jr Jersey 10
          </h2>
          <p className="text-lg text-primary-foreground/80 font-body">
            Permanent retirement at Kitante Primary School
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-accent bg-black">
          {/*
            To add your video, find this file (src/components/sections/Video.tsx)
            and replace the src URL in the iframe below with the embed link for your YouTube video.
            You can get the embed link by clicking "Share" then "Embed" on your YouTube video.
          */}
          <div className="aspect-video">
             <iframe
              src="https://youtu.be/ouXulz0Isek?si=CHBPPfgghqy4pYyz"
              title="RugbyCare UG Impact Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
