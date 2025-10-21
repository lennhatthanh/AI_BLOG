import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [features, setFeatures] = useState([
        {
            id: 1,
            title: "AI-Powered",
            decripsion: "Generate blog outlines and content suggestions using advanced AI",
        },
        {
            id: 2,
            title: "Rich Editor",
            decripsion: "Full-featured text editor with formatting tools and live preview",
        },
        {
            id: 3,
            title: "Export Ready",
            decripsion: "Export your finished articles in multiple formats",
        },
    ]);
    return (
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
                <h1 className="text-[32px] leading-[1] font-bold text-foreground">AI Blog Generator</h1>
                <p className="text-xl text-[#737373] max-w-2xl mx-auto">
                    Transform your ideas into compelling blog posts with AI assistance. Generate outlines, write
                    content, and export beautiful articles.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
                {features.map((item) => (
                    <div className="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-card py-6 shadow-sm">
                        <h3 className="text-[18px] font-bold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-[14px]">{item.decripsion}</p>
                    </div>
                ))}
            </div>
            <div className="pt-8">
                <a href="/editor" data-discover="true">
                    <Link
                        to="/editor"
                        data-slot="button"
                        className="outline-none whitespace-nowrap font-medium text-sm py-2 px-4 bg-primary rounded-lg text-primary-foreground"
                    >
                        Start Writing
                    </Link>
                </a>
            </div>
        </div>
    );
}

export default HomePage;
