import React, { Fragment } from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const RootPage = () => {
  return (
    <Fragment>
        <Navbar />
        <Outlet />
        <Footer />
    </Fragment>
  )
}

export default RootPage;
