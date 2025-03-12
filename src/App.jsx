import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import "./css/Body.css";

function App() {
  return (
    <>
      <Header />
      <NavTabs />
        <main className="mx-3">
          <Outlet />
        </main>
      <Footer />
    
    </>
  );
}

export default App;
