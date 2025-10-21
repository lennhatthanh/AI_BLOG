import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    useEffect(() => {
        theme === "dark" ? document.body.classList.add("dark") : document.body.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <div className="border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" href="" className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-pen-tool h-6 w-6 text-primary"
                    >
                        <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
                        <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
                        <path d="m2.3 2.3 7.286 7.286"></path>
                        <circle cx="11" cy="11" r="2"></circle>
                    </svg>
                    <span class="text-2xl font-bold text-primary opacity-0 sm:opacity-100">AI Blog Generator</span>
                </Link>
                <div className="flex items-center gap-2">
                    <Link to="/editor" href="" className="outline-none font-medium text-sm px-3 hover:underline">
                        Editor
                    </Link>
                    <Link to="/history" href="" className="outline-none font-medium text-sm px-3 hover:underline">
                        History
                    </Link>
                    <Button
                        onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
                        // className="px-3 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-sun h-4 w-4"
                        >
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
