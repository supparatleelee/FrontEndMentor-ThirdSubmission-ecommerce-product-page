import './App.css';
import ProductContrainer from './features/showProducts/ProductContrainer';
import Header from './layouts/Header';

function App() {
  return (
    <div className="app pl-40 pr-40">
      <Header />

      <ProductContrainer />
    </div>
  );
}

export default App;
