/** @format */

import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Counting from './components/counting/Counting';
import Header from './components/header/Header';
// import Blog from "./pages/blog/Blog";
import CleanCode from './pages/clean-code/CleanCode';
import LatestWork from './pages/latest-work/LatestWork';
import OurServices from './pages/services/OurServices';
import OurTeam from './pages/team/OurTeam';
import Testimonia from './pages/testimonial/Testimonia';
import WhoWeAre from './pages/who-we-are/WhoWeAre';
import TopBanner from './components/top-banner/TopBanner';
// import Partners from "./pages/partners/Partners";
import ContactUs from './pages/contact-us/ContactUs';
import Footer from './components/footer/Footer';

const MainApp = () => {
	return (
		<>
			<div className='loader'></div>
			<div className='main' id='home'>
				<TopBanner />
				<Header />
				<WhoWeAre />
				<OurServices />
				<CleanCode />
				<LatestWork />
				<OurTeam />
				<Counting />
				<Testimonia />
				{/* <Blog /> */}
				<ContactUs />
				<Footer />
			</div>
		</>
	);
};

export default MainApp;
