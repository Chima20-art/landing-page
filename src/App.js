import "./App.css";

//components
import Features from "./components/features/features";
import Light from "./components/light/light";

import Subscribe from "./components/subscribe/subscribe";
import Partner from "./components/Partner/partner";
import Testimonials from "./components/Testimonial/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import DesktopHeader from "./components/desktopHeader/desktopHeader";

function App() {
  return (
    <div className="App">
      <DesktopHeader />
      <Features />
      <Light />
      <Subscribe />
      <Partner />
      <Testimonials />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
