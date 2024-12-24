import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AdoptionList from "./pages/AdoptionList";
import { DogProvider } from "./context/DogContext.jsx";

import PostAdoption from "./pages/PostAdoption";
import DonateHelp from "./pages/DonateHelp";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <DogProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/adoption-list" element={<AdoptionList />} />
              <Route path="/post-adoption" element={<PostAdoption />} />
              <Route path="/donate-help" element={<DonateHelp />} />
              <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </DogProvider>
    </Router>
  );
}

export default App;
