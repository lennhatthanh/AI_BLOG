import Content from "../Content";
function Editor() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid gap-6">
                <h1 className="text-3xl font-bold">Blog Editor</h1>
                <div className="bg-white rounded-xl py-6 shadow-sm grid px-6 border-[#e5e5e5] border">
                    <div className="text-2xl font-bold mb-6">Chủ đề Blog</div>
                    <div className="w-full flex gap-2">
                        <div className="w-full flex items-center justify-center">
                            <input
                                type="text"
                                className="w-full h-9 shadow-xs text-base py-2 px-4 bg-transparent border-[#e5e5e5] border rounded-md outline-none"
                                placeholder="Nhập chủ đè blog của bạn (ví dụ: lợi ích của thiền định)"
                            />
                        </div>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#171717] text-white whitespace-nowrap px-4 py-2">
                            Tạo Nội Dung
                        </button>
                    </div>
                    <label htmlFor="" className="mt-4 text-sm text-[#737373]">
                        AI sẽ tạo ra nội dung blog dựa trên chủ đề bạn nhập
                    </label>
                </div>
                <Content />
            </div>
        </div>
    );
}

export default Editor;
