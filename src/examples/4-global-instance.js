import { useEffect } from 'react';
import axios from 'axios';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    console.log('global axios instance');
    try {
      const reponse1 = await axios(productsUrl);
      const reponse2 = await axios(randomUserUrl);
      console.log(reponse2);
    } catch (error) {
      console.log(error.reponse);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
