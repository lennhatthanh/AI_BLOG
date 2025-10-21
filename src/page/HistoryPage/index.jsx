import DialogDeleteBlog from "@/components/DialogDeleteBlog";
import DialogHistoryBlog from "@/components/DialogHistoryBlog";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import NotFound from "@/assets/NotFound.json"
export default function HistoryPage() {
    const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem("blogs")) || []);
    const [open, setOpen] = useState(false);
    const [openClose, setOpenClose] = useState(false);
    const [blog, setBlog] = useState({});
    
    const handlePriview = (value) => {
        setBlog(value);
        setOpen(true);
    };
    const handleDeleteBlog = (value) => {
        setBlogs(blogs.filter((item) => item.id !== value.id));
    };

    const handleOpenDialogClose = (value) => {
        setOpenClose(true);
        setBlog(value);
    };
    useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }, [blogs]);
    return (
        <div className="grid gap-6">
            <h1 className="text-3xl font-bold">Hi, here is your history</h1>
            <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                {blogs.map((item, index) => (
                    <div
                        key={index}
                        class="bg-card w-full text-card-foreground gap-6 justify-between rounded-xl border p-6 shadow-sm"
                    >
                        <h2 class="text-2xl font-bold mb-4 text-ellipsis overflow-hidden whitespace-nowrap">
                            {item.title}
                        </h2>
                        <p class="text-sm text-ellipsis line-clamp-3">{item.decsription}</p>
                        <div class="flex justify-start gap-2 mt-4">
                            <button
                                onClick={() => handlePriview(item)}
                                data-slot="button"
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[&gt;svg]:px-3 bg-primary text-primary-foreground px-4 py-2 rounded-md"
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
                                    class="lucide lucide-eye w-4 h-4"
                                    aria-hidden="true"
                                >
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </button>
                            <button
                                onClick={() => handleOpenDialogClose(item)}
                                data-slot="button"
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[&gt;svg]:px-3 bg-destructive text-destructive-foreground px-4 py-2 rounded-md"
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
                                    class="lucide lucide-trash2 lucide-trash-2 w-4 h-4 stroke-amber-50"
                                    aria-hidden="true"
                                >
                                    <path d="M10 11v6"></path>
                                    <path d="M14 11v6"></path>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                    <path d="M3 6h18"></path>
                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={blogs.length == 0 ? "flex flex-col items-center mx-auto" : "hidden"} style={{ width: 250, height: 250 }}>
                <Lottie animationData={NotFound} loop={true} />
                <div className="text-muted-foreground text-lg">No history found</div>
            </div>
            <DialogHistoryBlog open={open} setOpen={setOpen} blog={blog} />
            <DialogDeleteBlog open={openClose} setOpen={setOpenClose} blog={blog} handleDeleteBlog={handleDeleteBlog} />
        </div>
    );
}
