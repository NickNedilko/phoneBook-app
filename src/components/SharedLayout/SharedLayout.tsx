import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import { Container } from "./SharedLayout.styled";
import Footer from "../Footer/Footer";
import { Toaster } from 'react-hot-toast';
import { Loader } from "../Loader/Loader";


const SharedLayout = () => {
    return (       
    <div >
        <Header />
            <main>
            <Container>
                 <Suspense fallback={<Loader/>}> 
            <Outlet />
                    </Suspense> 
                    <Toaster/>
            </Container>   
        </main>
        <Footer />
    </div>
    );
};

export default SharedLayout;