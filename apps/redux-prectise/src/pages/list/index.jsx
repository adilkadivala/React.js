import { useEffect } from 'react';
import { useNetwork } from '../../network/useNetwork';
import './style.css';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';

const API = 'https://fakestoreapi.com/products';

const List = ({ onProductSelect }) => {
  const { get, isLoading, data, error } = useNetwork();

  const movies = useSelector(function (state) {
    return state;
  });

  console.log(movies);

  useEffect(() => {
    get(API);
  }, []);

  if (data?.length) {
    return (
      <>
        <Navbar />
        <div className="cardparent">
          {data.map((d) => {
            const { title, price, image } = d;

            return (
              <>
                <div key={d.id} className="productCard">
                  <img src={image} alt="product image" />
                  <p>{title}</p>
                  <p>$ {price}</p>
                  <Button
                    onClick={() => {
                      onProductSelect(d);
                    }}
                    text=" Add to cart"
                  />
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <p>connect with network</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default List;
