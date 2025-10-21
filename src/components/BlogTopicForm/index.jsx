import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

function BlogTopicForm({ handleCreateBlog, loading, setValueInput, valueInput }) {
    const handleEnter = (e) => {
        if (e.key === "Enter") handleCreateBlog();
    };
    return (
        <div className="grid gap-6">
            <h1 className="text-3xl font-bold">Blog Editor</h1>
            <div className="bg-card rounded-xl py-6 shadow-sm grid px-6 text-card-foreground">
                <div className="text-2xl font-bold mb-6">Chủ đề Blog</div>
                <div className="w-full flex gap-2">
                    <div className="w-full flex items-center justify-center">
                        <Input
                            onKeyDown={(e) => handleEnter(e)}
                            value={valueInput}
                            onChange={(e) => setValueInput(e.target.value)}
                            type="text"
                            className="w-full h-9 shadow-xs text-base py-2 px-4 bg-transparent border-card border rounded-md outline-none"
                            placeholder="Nhập chủ đè blog của bạn (ví dụ: lợi ích của thiền định)"
                        />
                    </div>
                    {loading ? (
                        <Button
                            disabled
                            onClick={handleCreateBlog}
                            className={`inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground whitespace-nowrap px-4 py-2`}
                        >
                            <Spinner />
                            Tạo Nội Dung
                        </Button>
                    ) : (
                        <Button
                            onClick={handleCreateBlog}
                            className={`inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground whitespace-nowrap px-4 py-2`}
                        >
                            Tạo Nội Dung
                        </Button>
                    )}
                </div>
                <label htmlFor="" className="mt-4 text-sm text-[#737373]">
                    AI sẽ tạo ra nội dung blog dựa trên chủ đề bạn nhập
                </label>
            </div>
        </div>
    );
}

export default BlogTopicForm;
