// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CheckoutDetails from './components/CheckoutDetails';
import Market from './pages/Market';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/market' element={<Market/>} />
        {/* Dynamic route for the product selection & email step */}
        <Route path="/product/:id" element={<Home />} /> 
        {/* The dedicated payment method page (Screenshot 5) */}
        <Route path="/checkout/:id" element={<CheckoutDetails />} />
      </Routes>
    </Router>
  );
}
export default App;