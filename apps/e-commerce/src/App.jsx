import { useState } from 'react';
import Cart from './pages/cart';
import Detail from './pages/detail';
import List from './pages/list';

function App() {
  const [selectedProduct, setslectedProduct] = useState(null);
  const [iscartPage, setIscartPage] = useState(false);

  return (
    <>
      {!selectedProduct && <List onProductSelect={setslectedProduct} />}
      {selectedProduct && <Detail onBack={setslectedProduct} />}
      {iscartPage && <Cart />}
    </>
  );
}

export default App;
