import BlogPriviewExport from "@/components/BlogPriviewExport";
import BlogTopicForm from "@/components/BlogTopicForm";
import { use, useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import toast from "react-hot-toast";
import useCheckIP from "@/hooks/useCheckIP";
function EditorPage() {
    const [valueInput, setValueInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [resultBlog, setResultBlog] = useState("");
    const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem("blogs")) || []);

    const handleCreateBlog = async () => {
        setLoading(true);
        const prompt = `
Viết một **bài blog Markdown** về chủ đề **${valueInput}**.

Yêu cầu:
- Viết bằng **Markdown thuần** (không HTML, không đặt trong \`\`\`markdown\`\`\`).
- Có **cấu trúc rõ ràng với các tiêu đề #, ##, ###** thể hiện cấp độ nội dung.
- Giữa các phần phải có **dòng trống** để tạo khoảng cách dễ đọc.
- Dùng **in đậm**, *in nghiêng* để nhấn mạnh các ý quan trọng.
- Có thể thêm **emoji** ở tiêu đề để bài viết sinh động hơn.
- Giọng văn **tự nhiên, gần gũi, truyền cảm xúc** như viết blog cá nhân.
- Độ dài khoảng **700–1000 từ**.

---

### 🧩 Cấu trúc bài viết:

1. **# Tiêu đề chính** — to, nổi bật, có cảm xúc.  
2. **Đoạn mở đầu** ngắn gọn, gợi tò mò và chạm cảm xúc.  
3. **## Giới thiệu / Định nghĩa** — giải thích rõ ràng khái niệm hoặc vấn đề.  
4. **## Đặc điểm / Lợi ích** — mô tả chi tiết, có ví dụ minh họa.  
5. **## Cách thực hiện / Ứng dụng** — hướng dẫn hoặc chia sẻ kinh nghiệm thực tế.  
6. **## Ý nghĩa / Cảm xúc** — thể hiện góc nhìn cá nhân hoặc thông điệp sâu sắc.  
7. **## Kết luận / Lời kết** — tóm tắt nội dung chính, nhấn mạnh thông điệp cuối cùng.  
   - Viết **ngắn gọn, ấn tượng, để lại dư âm cảm xúc** cho người đọc.

---

### 📝 Phong cách gợi ý:
- Viết tự nhiên như đang kể chuyện.
- Sử dụng **dấu gạch ngang (---)** để chia các phần nhẹ nhàng.
- Có thể xen kẽ *trích dẫn*, câu hỏi tu từ hoặc lời khuyên ngắn.
- Mỗi phần nên cách nhau **ít nhất một dòng trống**.

---

⚠️ **Lưu ý cuối cùng:**  
Không được bao bọc bài viết trong khối code hoặc \`\`\`markdown\`\`\`.  
Kết quả phải là **Markdown thực tế** hiển thị đúng tiêu đề, cỡ chữ và định dạng.
`;

        const ip = await useCheckIP();
        if (blogs.filter((item) => item.ip == ip.ip).length >= 5) {
            toast.error("Bạn đã vượt quá 5 lần trong ngày");
            setLoading(false)
            return;
        }
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(prompt);
        setLoading(false);
        setResultBlog(result.response.candidates[0].content.parts[0].text);
        setBlogs([
            ...blogs,
            {
                id: Date.now(),
                title: valueInput,
                decsription: result.response.candidates[0].content.parts[0].text,
                ip: ip.ip,
                atCreated: new Date().getDate(),
            },
        ]);
        setValueInput("");
        toast.success("Đã tạo blog thành công");
    };
    useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }, [blogs]);
    return (
        <div className="grid gap-6">
            <BlogTopicForm
                handleCreateBlog={handleCreateBlog}
                loading={loading}
                setValueInput={setValueInput}
                valueInput={valueInput}
            />
            <BlogPriviewExport resultBlog={resultBlog} valueInput={valueInput} />
        </div>
    );
}

export default EditorPage;
