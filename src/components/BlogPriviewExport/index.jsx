import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
function BlogPriviewExport({ resultBlog, valueInput }) {
    const handleCopy = async () => {
        await navigator.clipboard.writeText(resultBlog);
        toast.success("Sao chép thành công")
    };
    const handleDownload = () => {
        // 1️⃣ Tạo blob từ nội dung
        const blob = new Blob([resultBlog], { type: "text/plain" });

        // 2️⃣ Tạo URL tạm thời cho blob
        const url = URL.createObjectURL(blob);

        // 3️⃣ Tạo thẻ <a> để mô phỏng hành động tải xuống
        const a = document.createElement("a");
        a.href = url;
        a.download = valueInput.replaceAll(" ", "-");

        // 4️⃣ Thêm vào DOM và click tự động
        document.body.appendChild(a);
        a.click();

        // 5️⃣ Dọn dẹp
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success("Tải xuống thành công!")
    };
    return (
        <div className="w-full border rounded-xl shadow-sm p-6 border-card bg-card">
            <div className="flex flex-col justify-between gap-2 md:flex-row items-start mb-8 pb-6 border-b">
                <div className="text-2xl font-bold">Xem trước & Xuất</div>
                <div className="flex gap-2 justify-start md:justify-end">
                    <button
                        onClick={handleCopy}
                        className="flex outline-none whitespace-nowrap font-medium text-sm px-3 rounded-md justify-center items-center h-8 gap-1.5 border-card border"
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
                            class="w-4 h-4"
                        >
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                        Sao chép
                    </button>
                    <button onClick={handleDownload} className="flex outline-none whitespace-nowrap font-medium text-sm px-3 rounded-md justify-center items-center h-8 gap-1.5 bg-primary text-primary-foreground shadow-sm">
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
                            class="w-4 h-4"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                        Tải xuống
                    </button>
                </div>
            </div>
            <div className="grid gap-8 min-h-28">
                <div
                    className={`${
                        resultBlog.length == 0 ? "text-[#737373] text-center " : "text-primary-foregroundte text-start"
                    }`}
                >
                    {resultBlog.length == 0 ? (
                        "Chưa có nội dung để hiển thị"
                    ) : (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{resultBlog}</ReactMarkdown>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogPriviewExport;
