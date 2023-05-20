import React , { useState , useEffect } from 'react';
import UserData from './UserData';

function FetchAPI () {

  const [data, setData] = useState([]);

  const getAPI = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then((response) => response.json())
        .then((json) => 
          {
            console.log(json);
            setData(json);
          });
  }

  useEffect (() => {getAPI()} , []);

  return (
    <div className='tableData'> 
      <table>
        <thead> 
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>      
            <UserData data = {data} />
        </tbody>
      </table>
    </div>
  );
};

export default FetchAPI;