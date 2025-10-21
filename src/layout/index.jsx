import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-12">
                <Outlet />
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default Layout;
