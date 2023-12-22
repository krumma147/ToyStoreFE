import React, { useState, useEffect } from 'react';
import { GetAllToy, DeleteToy } from '../hooks/toyHook';
import { GetAllBranch } from '../hooks/branchHook';
import { GetAllCategory } from '../hooks/categoryHook';
import ModalForm from './ModalForm';

const ToyList = () => {
  const [toys, setToys] = useState([]);
  const [categories, setCategories] = useState([]);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseToy = await GetAllToy();
        const responseCategories = await GetAllCategory();
        const responseBranches = await GetAllBranch();
        // Update the state with the fetched data
        setToys(responseToy);
        setBranches(responseBranches);
        setCategories(responseCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      if(window.confirm('Are you sure you want to delete this toy?')){
        await DeleteToy(id);
        window.location.reload();
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <div className=''>
        <ModalForm toys={toys} action="add" categories={categories} branches={branches} />
      </div>
      <div class="card border-0">
          <div class="card-header">
              <h3 class="card-title text-center">
              Toy List
              </h3>
          </div>
          <div class="card-body">
              <table class="table">
                  <thead>
                    <tr className='row'>
                      <th className='col-md-1'>No.</th>
                      <th className='col'>Name</th>
                      <th className='col'>Price</th>
                      <th className='col'>Image</th>
                      <th className='col'>Branch</th>
                      <th className='col'>Category</th>
                      <th className='col-md-2'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {toys.map((toy, index) => (
                      <tr key={toy._id} className='row'>
                        <td className='col-md-1'>{index+1}</td>
                        <td className='col'>{toy.name}</td>
                        <td className='col'>{toy.price} VND</td>
                        <td className='col'>
                          <img src={`images/products/${toy.image}`} height="100px" width="100px" />
                        </td>
                        <td className='col'>{toy.branch.location}, {toy.branch.city}</td>
                        <td className='col'>{toy.category.name}</td>

                        <td className='col-md-2'>
                          <div class="d-flex gap-2">
                          <ModalForm toys={toys} id={toy._id} index={index} action="edit" categories={categories} branches={branches} />
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={()=>handleDelete(toy._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
          </div>
      </div>
    </>
  );
};

export default ToyList;
