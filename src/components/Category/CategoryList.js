import React, { useState, useEffect } from 'react';
import { GetAllCategory, DeleteCategory } from '../hooks/categoryHook';
import ModalForm from './ModalForm';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await GetAllCategory();
        // Update the state with the fetched data
        setCategories(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    //UNDONE: Confirmation & FIX 404 ERROR
    DeleteCategory(id);
    window.location.reload();
  };

  return (
    <>
      <div className=''>
        <ModalForm categories={categories} action="add" />
      </div>
      <div class="card border-0">
          <div class="card-header">
              <h3 class="card-title text-center">
                Category List
              </h3>
          </div>
          <div class="card-body">
              <table class="table">
                  <thead>
                    <tr className='row'>
                      <th className='col-md-1'>No.</th>
                      <th className='col'>Name</th>
                      <th className='col-md-2'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                    <tr key={category._id} className='row'>
                      <td className='col-md-1'>{index+1}</td>
                      <td className='col'>{category.name}</td>

                      <td className='col-md-2'>
                        <div class="d-flex gap-2">
                        <ModalForm categories={categories} id={category._id} index={index} action="edit" />
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={()=>handleDelete(category._id)}
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

export default CategoriesList;
