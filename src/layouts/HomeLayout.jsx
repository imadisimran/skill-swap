import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeftAside from '../components/LeftAside';
import CategoryItems from '../components/CategoryItems';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

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
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
            </main>

            <Footer></Footer>
            <Toaster></Toaster>
        </>
    );
};

export default HomeLayout;