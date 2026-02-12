// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CheckoutDetails from './components/CheckoutDetails';
import Market from './pages/Market';
import Privacy from './pages/Privacy';
import TermsOfServices from './pages/TermsOfServices';
import Reviews from './pages/Reviews';
import Login from './pages/Login';
import SupportHeader from './pages/SupportHeader';
import Signup from './pages/Signup';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportHeader />} />
        <Route path='/market' element={<Market/>} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsOfServices />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/product/:id" element={<Home />} /> 
        <Route path="/checkout/:id" element={<CheckoutDetails />} />
      </Routes>
    </Router>
  );
}

export default App;