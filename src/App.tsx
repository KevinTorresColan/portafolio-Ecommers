import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Page/HomePage";
import ShoppingCartPage from "./Pages/ShoppingCart/Page/ShoppingCartPage";
import { RecordPage } from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/carrito" element={<ShoppingCartPage/>}/>
        <Route path="/historial" element={<RecordPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
