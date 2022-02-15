import Signup from "./Pages/Signup/signup";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import "./App.css";
export default function App() {
    const user = false;
    return (
        <div>
            <Header />
            <Signup />
            <Footer />
        </div>
    );
}
