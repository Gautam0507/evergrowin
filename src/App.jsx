import Homepage from "./pages/Homepage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ChamoisLeatherOrder from "./pages/productOrderPages/ChamoisLeatherOrder";
import ChamoisLeatherDescription from "./pages/productDescriptionPages/ChamoisLeatherDescription";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/order" element={<ChamoisLeatherOrder />} />
          <Route
            path="/products/chamoisLeather"
            element={<ChamoisLeatherDescription />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
