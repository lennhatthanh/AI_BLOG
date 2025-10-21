import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BlogPriviewExport from "../BlogPriviewExport";
import useIsHistoryPage from "@/hooks/useIsHistoryPage";
export default function DialogHistoryBlog({ open, setOpen, blog }) {
    const isHistoryPage = useIsHistoryPage();
    return (
        <Dialog open={open} onOpenChange={setOpen} dialogClose={false}>
            <DialogContent className="sm:max-w-[700px] max-h-[70%] overflow-auto p-0" showCloseButton={false}>
                <BlogPriviewExport resultBlog={blog.decsription} valueInput={blog.title} />
            </DialogContent>
        </Dialog>
    );
}
