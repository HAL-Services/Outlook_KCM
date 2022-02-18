import "./App.css";
import "./Pages/Home/Home";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/header";
import Services from "./Pages/Services/Services";
import Footer from "./Components/Footer/footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
      <Footer />
    </div>
  );
}
