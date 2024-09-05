import { useState } from 'react';

// use this function if you haven't local JSON,
// function useNetwork() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   function get(url) {
//     setIsLoading(true);
//     setError('');
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       })
//       .catch((err) => {
//         console.log(err);
//         setError(err);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }

//   return { get, data, isLoading, error };
// }

// use this function if you have a Local Json
function useNetwork() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function get(apiData) {
    setIsLoading(true);
    setError('');
    try {
      setData(apiData.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return { get, data, isLoading, error };
}

export default useNetwork;
