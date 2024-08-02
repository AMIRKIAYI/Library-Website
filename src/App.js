import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Div1 from './components/Div1';
import Div2 from './components/Div2';
import Events from './components/Events';
import Footer from './components/Footer';
import Links from './components/Links';
import Loft from './components/Loft';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import VisionMission from './components/VisionMission';
import LibraryRules from './components/LibraryRules';
import Contact from './components/Contact';
import NewsEvents from './components/NewsEvents';
import InformationLiteracy from './components/InformationLiteracy';
import EResources from './components/EResources';
import MyLOFT from './components/MyLOFT';
import AskLibrarian from './components/AskLibrarian';
import Faqs from './components/Faqs';
import QuickReads from './components/QuickReads';
import BorrowForm from './components/BorrowForm';
import StudentDetails from './components/StudentDetails';
import GisPlan from './components/GisPlan';
import GuidanceDay from './components/GuidanceDay';
import StemPlan from './components/StemPlan';
import NorthEdu from './components/NorthEdu';
import OpenHours from './components/OpenHours';
import Turnitin from './components/Turnitin';
import StaffLogin from './components/StaffLogin';
import Loading from './components/Loading';
import Epaper from './components/Epaper';
import Repository from './components/Repository';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="App">
        <Nav1 />
        <Nav2 />
        <Routes>
          <Route path="/" element={
            <>
              <Div1 />
              <Div2 />
              <Links />
              <Loft />
              <Events />
            </>
          } />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/library-rules" element={<LibraryRules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/information-literacy" element={<InformationLiteracy />} />
          <Route path="/e-resources" element={<EResources />} />
          <Route path="/myloft" element={<MyLOFT />} />
          <Route path="/quickreads" element={<QuickReads />} />
          <Route path="/ask-librarian" element={<AskLibrarian />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/borrow" element={<BorrowForm selectedBook={{ title: 'Sample Book', author: 'Sample Author', pages: 100 }} />} />
          <Route path="/studentDetails" element={<StudentDetails />} />
          <Route path="/stafflogin" element={<StaffLogin />} />
          <Route path="/gisplan" element={<GisPlan />} />
          <Route path="/guidanceday" element={<GuidanceDay />} />
          <Route path="/stemplan" element={<StemPlan />} />
          <Route path="/northedu" element={<NorthEdu />} />
          <Route path="/openhours" element={<OpenHours />} />
          <Route path="/turnitin" element={<Turnitin />} />
          <Route path="/epaper" element={<Epaper />} />
          <Route path="/repository" element={<Repository />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
