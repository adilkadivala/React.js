import { useState } from 'react';

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




// best way
// import { axios } from 'axios';


// class APISERVICE {
//   static APIInstance; // if we have 10 apies, then it will prevent to create 10 instance,  it will create 1 for 10;

//   constructor() {
//     this.axiosInstance = axios.create({
//       baseURL: 'http://localhost:4000/',
//       timeOUT: 1000,
//       headers: { 'custom-Header': 'token' },
//     });
//   }

//   static getInstance() {
//     if (!APISERVICE.APIInstance) {
//       APISERVICE.APIInstance = new APISERVICE();
//     }
//   }

//   get(endpoint) {
//     // getting logic
//   }
//   post(endpoint) {
//     // posting logic
//   }
//   put(endpoint) {
//     // updating logic
//   }
//   delete(endpoint) {
//     // deleting logic
//   }

//   cancleApiCall() {}
// }

//  if we want to over write some method for any perticular api ,

// class productAPI extends APISERVICE {
//   put() {}
// }

// const productapies = new productAPI();
// productapies.get('endpoint');
