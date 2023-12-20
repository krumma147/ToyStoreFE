import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ToyDetail from './ToyDetailed';
import Shop from "../Shop/Shop";
import { GetAllToy } from '../hooks/toyHook';

const Toys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseToy = await GetAllToy();
        setToys(responseToy);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Shop toys={toys} />} />
      <Route path="/:id" element={<ToyDetail toys={toys} />} />
    </Routes>
  );
};

export default Toys;
