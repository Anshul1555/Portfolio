import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./pages/Footer";
import "./css/Body.css";

function App() {
  return (
    <>
      <NavTabs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
