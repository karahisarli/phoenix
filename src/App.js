import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Imprint from "./pages/imprint";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/imprint" element={<Imprint />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;