import { Provider } from 'react-redux';
import "./main.css";
import { store } from './Store';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Header />

      <Footer />
    </Provider>
  );
}

export default App;
