import { useState, Suspense } from 'react';
import List from './pages/list';

function App() {
  const [selectedProduct, setslectedProduct] = useState(null);

  return (
    <>
      {!selectedProduct && (
        <Suspense fallback="Loading...">
          <List onProductSelect={setslectedProduct} />
        </Suspense>
      )}
    </>
  );
}

export default App;
