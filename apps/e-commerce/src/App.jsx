import { useState, lazy, Suspense } from 'react';
import List from './pages/list';

const Detail = lazy(() => {
  return import('./pages/detail');
});
const Cart = lazy(() => {
  return import('./pages/cart');
});

function App() {
  const [selectedProduct, setslectedProduct] = useState(null);
  const [iscartPage, setIscartPage] = useState(false);

  return (
    <>
      {!selectedProduct && (
        <Suspense fallback="Loading...">
          <List onProductSelect={setslectedProduct} />
        </Suspense>
      )}
      {selectedProduct && (
        <Suspense fallback="Loading...">
          <Detail onBack={setslectedProduct} />
        </Suspense>
      )}
      {iscartPage && <Cart />}
    </>
  );
}

export default App;
