import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ToyDetail from './ToyDetailed';
import Shop from "../Shop/Shop";
import { GetAllToy } from '../hooks/toyHook';
import ToyList from '../Toy/ToyList';

const Toys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toyDatas = JSON.parse(localStorage.getItem("Toys"));
        if(!toyDatas){
          const responseToy = await GetAllToy();
          localStorage.setItem("Toys", JSON.stringify(responseToy));
        }
        setToys(toyDatas);
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
      <Route exact path="/list" element={<ToyList />} />
    </Routes>
  );
};

export default Toys;
