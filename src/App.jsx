import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./pages/Footer";
import Background3D from "./components/Background3D";
import "./css/Body.css";

function App() {
  return (
    <>
      <Background3D />
      <NavTabs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
