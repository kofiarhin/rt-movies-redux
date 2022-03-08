import "./app.styles.css";
import MoviesList from "./components/MoviesList/MoviesList.component";
import Header from "./components/Header/Header.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details/Details.page";
import Footer from "./components/Footer/footer. component";
import About from "./Pages/About/About.page";
import Contact from "./Pages/Contact/Contact.page";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
