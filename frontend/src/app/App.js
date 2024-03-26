import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { store } from './redux/Store';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
          </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
