function Content() {
    return (
        <div className="w-full border rounded-xl shadow-sm p-6 border-[#e5e5e5]">
            <div className="flex flex-col justify-between gap-2 md:flex-row items-start mb-8 pb-6 border-b border-[#e5e5e5]">
                <div className="text-2xl font-bold">Xem trước & Xuất</div>
                <div className="flex gap-2 justify-start md:justify-end">
                    <button className="flex outline-none whitespace-nowrap font-medium text-sm px-3 rounded-md justify-center items-center h-8 gap-1.5 border-[#e5e5e5] border">
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
                    <button className="flex outline-none whitespace-nowrap font-medium text-sm px-3 rounded-md justify-center items-center h-8 gap-1.5 bg-[#171717] text-white shadow-sm">
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
                <p className="text-center text-[#737373]">Chưa có nội dung để hiển thị</p>
            </div>
        </div>
    );
}

export default Content;
