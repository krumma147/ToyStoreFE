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
    console.log(toys);
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    DeleteToy(id);
    window.location.reload();
  };

  return (
    <div>
      <div
        class="container"
      >
        <h2>Toy List</h2>
        <div
          class="table-responsive"
        >
            <ModalForm toys={toys} action="add" categories={categories} branches={branches} />
          <table
            class="table table-primary"
          >
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col">Branch</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <tr key={toy._id} class="">
                  <td>{index+1}</td>
                  <td>{toy.name}</td>
                  <td>{toy.price} VND</td>
                  <td>
                    <img src={`images/products/${toy.image}`} height="100px" width="100px" />
                  </td>
                  <td>{toy.branch.location}, {toy.branch.city}</td>
                  <td>{toy.category.name}</td>

                  <td>
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
      
    </div>
  );
};

export default ToyList;
