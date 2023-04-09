import { Route,Routes } from "react-router-dom";
import Skills from "./Pages/Skills";
import Projets from "./Pages/Projets";
import Contact from "./Pages/Contact";
import Propos from "./Pages/Propos";
import Loading from "./Pages/Loading";

function Router() {
    
    return(
<Routes>
<Route path="/s" element={<Loading/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/projets" element={<Projets/>} />
<Route path="/skills" element={<Skills/>} />
<Route path="/" element={<Propos/>} />
</Routes>
    );
}

export default Router;