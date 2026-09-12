import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Placeholder from "./pages/Placeholder";
import Home from "./pages/Home";
import AboutPinnacle from "./pages/AboutPinnacle";
import OurStory from "./pages/OurStory";
import OurLeadership from "./pages/OurLeadership";
import OurValues from "./pages/OurValues";
import OurApproach from "./pages/OurApproach";
import Operations from "./pages/Operations";
import Facilities from "./pages/Facilities";
import Careers from "./pages/Careers";
import ApplyNow from "./pages/ApplyNow";
import ApplicationStatus from "./pages/ApplicationStatus";
import Suppliers from "./pages/Suppliers";
import News from "./pages/News";
import Sustainability from "./pages/Sustainability";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<AboutPinnacle />} />
        <Route path="about/our-story" element={<OurStory />} />
        <Route path="about/leadership" element={<OurLeadership />} />
        <Route path="about/values" element={<OurValues />} />
        <Route path="about/approach" element={<OurApproach />} />

        <Route path="operations" element={<Operations />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="careers" element={<Careers />} />
        <Route path="careers/apply/:jobId" element={<ApplyNow />} />
        <Route path="careers/status" element={<ApplicationStatus />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="news" element={<News />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="legal" element={<Legal />} />

        <Route path="*" element={<Placeholder title="Page Not Found" />} />
      </Route>
    </Routes>
  );
}
