import { useEffect, useState } from 'react';
import { useNetwork } from '../../network/useNetwork';
import './style.css';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';

const API = 'https://fakestoreapi.com/products';

const List = ({ onProductSelect }) => {
  const { get } = useNetwork();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const movies = useSelector(function (state) {
    return state;
  });

  const { isLoading, movie, isError } = movies;

  useEffect(() => {
    get(API);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (movie?.length) {
    return (
      <>
        <Navbar handleCart={handleCart} />
        <div className="cardparent">
          {movie.map((d, index) => {
            const { title, price, image } = d;

            return (
              <div key={index} className="productCard">
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
            );
          })}
        </div>

        {isCartOpen && (
          <div
            style={{
              border: '1px solid red',
              width: '35vw',
              position: 'absolute',
              top: '6.5rem',
              backgroundColor: '#e6ebe9',
              right: '0',
              height: '90vh',
            }}
          >
            <p>kk</p>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <Navbar />
      <p>connect with network</p>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Loading...</p>}

      {isCartOpen && (
        <div
          style={{
            border: '1px solid red',
            width: '35vw',
            position: 'absolute',
            top: '2rem',
            right: '0',
          }}
        >
          <p>kk</p>
        </div>
      )}
    </>
  );
};

export default List;
