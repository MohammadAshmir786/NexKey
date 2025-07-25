import "./App.css";
import Footer from "./components/Footer";
import Manager from "./components/Manager";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="select-none">
      <Navbar />
      <Manager />
      <Footer />
    </div>
  );
}

export default App;
