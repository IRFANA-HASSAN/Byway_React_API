import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer  from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import ProductDetail from './pages/ProductDetail.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
