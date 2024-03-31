import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { store } from './redux/Store';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';

import "./index.css";
import { User } from './pages/User';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/user" element={<User />} />
          </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
