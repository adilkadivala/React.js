import { useEffect } from 'react';
import useNetwork from '../../network/useNetwork';
import './style.css';
import API from '../../data/product.json';

const List = () => {
  const { get, isLoading, data } = useNetwork();

  useEffect(() => {
    get(API);
  }, []);

  if (data?.length) {
    return (
      <div>
        {data.map((d) => {
          const { id, product, amount } = d;
          return (
            <div key={id}>
              {id},{product}, {amount}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div>List</div>
    </>
  );
};

export default List;
