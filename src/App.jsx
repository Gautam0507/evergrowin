import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChamoisLeatherOrder from "./pages/productOrderPages/ChamoisLeatherOrder";
import ChamoisLeatherDescription from "./pages/productDescriptionPages/ChamoisLeatherDescription";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/order/chamoisLeather"
            element={<ChamoisLeatherOrder />}
          />
          <Route
            path="/product/chamoisLeather"
            element={<ChamoisLeatherDescription />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
