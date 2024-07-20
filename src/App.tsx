import {useMemo} from "react";
import {useLocation} from "react-router-dom";

import Routing from "./routing.tsx";

import Nav from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./hooks/ScrollToTop.tsx";


function App() {

    const location = useLocation();
    const currentPage = useMemo(() => location.pathname, [location.pathname]);

    const pageClass = useMemo(() => {
        if (currentPage === '/')
            return 'home';
        else if (currentPage.startsWith('/portfolio'))
            return currentPage.split('/').length > 2 ? 'portfolio case-study' : 'portfolio';
        else
            return currentPage.slice(1);
    }, [currentPage]);

    return (
        <>
            <ScrollToTop/>

            <main className={`site-body flex w-full flex-col justify-center items-center min-h-screen ${pageClass}`}>
                <Nav currentPage={pageClass}/>
                <Routing/>
                <Footer/>
            </main>
        </>
    );
}

export default App;
