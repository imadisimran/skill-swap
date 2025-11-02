import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeftAside from '../components/LeftAside';

const HomeLayout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main className='grid-cols-12 grid w-11/12 mx-auto'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section>
                    
                </section>
            </main>

            <Footer></Footer>
        </>
    );
};

export default HomeLayout;