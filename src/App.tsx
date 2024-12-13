import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import AboutLayout from "./components/AboutLayout";
// import History from "./pages/History";
import PlantsAndOfficesPage from "./pages/PlantsAndOfficesPage";
import Compliance from "./pages/Compliance";
// import Affiliates from "./pages/Affiliates";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
// import Investors from "./pages/Investors";
// import AnnualReports from "./pages/AnnualReports";
// import CorporateAffairs from "./pages/CorporateAffairs";
// import InvestorContact from "./pages/InvestorsContact";
import Solutions from "./pages/Solutions";
import MeFitGrinding from "./pages/MeFitGrinding";
import Newsroom from "./pages/Newsroom";
import ContactModal from "./components/ContactModal";
import MeFitCrushing from "./pages/MeFitCrushing";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* <LanguageSwitcher /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="solutions" element={<Solutions />}>
          <Route path="me-fit-grinding" element={<MeFitGrinding />} />
          <Route path="me-fit-crushing" element={<MeFitCrushing />} />
        </Route>
        <Route path="about" element={<AboutLayout />}>
          <Route path="/about" element={<About />} />
          {/* <Route path="history" element={<History />} /> */}
          <Route path="plants-and-offices" element={<PlantsAndOfficesPage />} />
          <Route path="compliance" element={<Compliance />} />
          {/* <Route path="affiliates" element={<Affiliates />} /> */}
        </Route>

        <Route path="products" element={<Products />} />
        <Route path="sustainability" element={<Sustainability />} />
        {/* <Route path="investors" element={<Investors />}>
          <Route path="annual-reports" element={<AnnualReports />} />
          <Route path="corporate-affairs" element={<CorporateAffairs />} />
          <Route path="investors-contact" element={<InvestorContact />} />
        </Route> */}

        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/newsroom" element={<Newsroom />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactModal />
    </>
  );
}

export default App;
