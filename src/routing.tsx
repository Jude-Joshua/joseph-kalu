import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from "./pages/About";
import Talks from "./pages/Talks";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy.tsx";


const Routing: React.FC = () => {
    return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/talks" element={<Talks/>}/>
        <Route path="/work" element={<Portfolio/>}/>
        <Route path="/work/:projectName" element={<CaseStudy/>}/>
    </Routes>
)
    ;
};

export default Routing;
