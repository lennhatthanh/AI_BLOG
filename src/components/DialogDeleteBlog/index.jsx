import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Lottie from "lottie-react";
import Trash from "@/assets/trash.json";
import { DialogClose } from "@radix-ui/react-dialog";
import useIsHistoryPage from "@/hooks/useIsHistoryPage";

export default function DialogDeleteBlog({ open, setOpen, blog, handleDeleteBlog }) {
    const isHistoryPage = useIsHistoryPage();
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]"  showCloseButton={isHistoryPage ? false : true}>
                <div className="mx-auto w-[200px] h-[200px]">
                    <Lottie animationData={Trash} loop={true} />
                </div>
                <div data-slot="dialog-header" class="flex flex-col gap-2 text-center sm:text-left">
                    <h2
                        id="radix-_r_a_"
                        data-slot="dialog-title"
                        class="text-lg leading-none font-semibold text-center"
                    >
                        Confirm Delete
                    </h2>
                    <p
                        id="radix-_r_b_"
                        data-slot="dialog-description"
                        class="text-muted-foreground text-sm text-center"
                    >
                        Are you sure you want to delete this item? This action cannot be undone.
                    </p>
                </div>
                <DialogFooter className="sm:justify-center">
                    <DialogClose asChild>
                        <Button className="flex-1" variant="outline">
                            Cancel
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button
                            onClick={() => handleDeleteBlog(blog)}
                            className="flex-1 bg-destructive/70 text-white"
                            type="submit"
                        >
                            Delete
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
