import { Provider } from 'react-redux';
import "./main.css";
import { store } from './Store';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Router, Routes } from 'react-router';
import { Home } from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
