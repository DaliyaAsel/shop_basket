import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { ShopContextProvider } from './context/shopContext';
import { Shop } from './components/Shop';

function App() {
  return (
    <>
      <Header />
      <ShopContextProvider>
      <Shop />
      </ShopContextProvider>
      <Footer />
    </>
  );
}

export default App;
