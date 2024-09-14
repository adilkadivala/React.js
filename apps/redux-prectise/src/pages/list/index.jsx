import { useEffect, useState } from 'react';
import { useNetwork } from '../../network/useNetwork';
import './style.css';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions/movie-list';

const API = 'https://fakestoreapi.com/products';

const List = () => {
  const { get } = useNetwork();

  const dispatch = useDispatch();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleItemCart = (movie) => {
    return () => {
      dispatch(addToCart(movie));
    };
  };

  const handleremoveCart = (movie) => {
    return () => {
      dispatch(removeFromCart(movie));
    };
  };

  const movies = useSelector(function (state) {
    return state.movie;
  });
  const cart = useSelector(function (state) {
    return state.cart;
  });
  const isError = useSelector(function (state) {
    return state.isError;
  });
  const isLoading = useSelector(function (state) {
    return state.isLoading;
  });

  console.log(cart, 'cart');

  useEffect(() => {
    get(API);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (movies?.length) {
    return (
      <>
        <Navbar handleCart={handleCart} />
        <div className="cardparent">
          {movies.map((d, index) => {
            const { title, price, image } = d;

            return (
              <div key={index} className="productCard">
                <img src={image} alt="product image" />
                <p>{title}</p>
                <p>$ {price}</p>
                <Button onClick={handleItemCart(movies)} text=" Add to cart" />
              </div>
            );
          })}
        </div>

        {isCartOpen && (
          <div
            style={{
              width: '35vw',
              position: 'absolute',
              top: '6.5rem',
              backgroundColor: '#e6ebe9',
              right: '0',
              height: '90vh',
            }}
          >
            {cart?.map((item, index) => {
              const { title, price, image } = item;
              return (
                <div key={index} className="productCard">
                  <img src={image} alt="product image" />
                  <p>{title}</p>
                  <p>$ {price}</p>
                  <Button
                    onClick={handleremoveCart(movies)}
                    text=" Add to cart"
                  />
                </div>
              );
            })}
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
