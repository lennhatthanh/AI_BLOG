import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditorPage from "./page/EditorPage";
import Layout from "./layout";
import HomePage from "./page/HomePage";
import HistoryPage from "./page/HistoryPage";
function App() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index path="/editor" element={<EditorPage />}/>
                    <Route index path="/history" element={<HistoryPage />}/>
                    <Route index path="" element={<HomePage />}/>
                </Route> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
